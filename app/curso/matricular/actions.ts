"use server"

import { z } from "zod"
import { validateCPF, validatePhone } from "./utils"
import { createStudentAction } from "@/actions/create-student.action"
import consola from "consola"
import { retrieveClassBySlugAction } from "@/actions/retrieve-class-by-slug"
import { createResponsible } from "@/actions/create-responsible"
import { enrollStudentToClass } from "@/actions/enroll-student-to-class.action"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const accessTokenCookieKey = "@acelera-enem:analytics-track"
const refreshTokenCookieKey = "@acelera-enem:clarity-token"

const isProduction = process.env.NODE_ENV === "production"
const DAY_IN_MILISECONDS = 1000 * 60 * 60 * 24

const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: "lax",
  path: "/",
  domain: isProduction ? `.aceleraenem.com` : "",
  maxAge: DAY_IN_MILISECONDS * 365,
} as const

function formatDateInput(date: string) {
  const [day, month, year] = date.replaceAll("_", "").split("/")

  if (day.length === 2 && month.length === 2 && year.length === 4) {
    const date = new Date(`${month}-${day}-${year}`)
    return date
  }

  return null
}

const studentSchema = z
  .object({
    name: z
      .string()
      .min(3, "O nome precisa conter no mínimo 5 caracteres")
      .max(50, "O nome pode conter no máximo 50 caracteres"),
    lastname: z
      .string()
      .min(3, "O sobrenome precisa conter no mínimo 5 caracteres")
      .max(50, "O sobrenome pode conter no máximo 50 caracteres"),
    email: z.string().email("E-mail inválido"),
    cpf: z
      .string()
      .length(11, "Digite apenas os números do CPF")
      .refine((text) => validateCPF(text), {
        path: ["cpf"],
        message: "CPF inválido",
      }),
    phone: z
      .string()
      .min(10, "O número de celular precisa conter no mínimo 10 dígitos")
      .max(15, "O número de celular pode conter no máximo 15 dígitos")
      .refine((text) => validatePhone(text), {
        path: ["phone"],
        message: "Celular inválido",
      }),
    birthdate: z
      .string()
      .length(10, "É necessário preencher a data de nascimento")
      .superRefine((date, ctx) => {
        let newDate = formatDateInput(date)
        if (!newDate) {
          ctx.addIssue({
            code: z.ZodIssueCode.invalid_date,
            message: "Data inválida",
          })
        }
      })
      .transform((d) => new Date(d)),
    password: z
      .string()
      .min(6, "A senha precisa ter no mínimo 6 caracteres")
      .max(100, "A senha pode ter no máximo 100 caracteres"),
    "password-confirm": z
      .string()
      .min(6, "A senha precisa ter no mínimo 6 caracteres")
      .max(100, "A senha pode ter no máximo 100 caracteres"),
    disability: z
      .string()
      .min(3, "A necessidade/deficiência precisa ter no mínimo 3 caracteres")
      .nullable(),
  })
  .refine((schema) => schema.password === schema["password-confirm"], {
    path: ["password-confirm"],
    message: "As senhas não batem",
  })

const addressSchema = z.object({
  cep: z.string().length(8, "O CEP precisa ter 8 dígitos"),
  state: z.string().length(2, "Digite apenas a UF do Estado"),
  city: z
    .string()
    .min(3, "É necessário ter no mínimo 3 caracteres")
    .max(50, "A cidade pode conter no máximo 50 caracteres"),
  neighborhood: z
    .string()
    .min(2, "O bairro precisa ter no mínimo 2 caracteres"),
  street: z.string().min(2, "A rua precisa ter no mínimo 2 caracteres"),
  number: z.string().min(1, "É necessário fornecer o número"),
  complement: z.string().optional(),
})

const responsibleSchema = z.object({
  name: z
    .string()
    .min(5, "O nome precisa conter no mínimo 5 caracteres")
    .max(50, "O nome pode conter no máximo 50 caracteres"),
  lastname: z
    .string()
    .min(5, "O nome precisa conter no mínimo 5 caracteres")
    .max(50, "O nome pode conter no máximo 50 caracteres"),
  email: z.string().email("E-mail inválido"),
  cpf: z.string().length(11, "Digite apenas os números do CPF"),
  phone: z
    .string()
    .min(10, "O número de celular precisa conter no mínimo 10 dígitos")
    .max(15, "O número de celular pode conter no máximo 15 dígitos"),
  relationship: z.string().min(1),
})

function mapError<T>(error: z.ZodError<T>, prefix?: string) {
  const issues = error.flatten(({ message }) => message).fieldErrors

  if (!prefix) return issues

  return Object.entries(issues).reduce((acc, [field, message]) => {
    return {
      ...acc,
      [`${prefix}-${field}`]: message,
    }
  }, {})
}

export type State = {
  errors: Record<string, string[] | null> | null
}

export async function createEnrollment(
  {
    classSlug,
    responsibleEnabled: responsibleEnabledFlag,
  }: { classSlug: string; responsibleEnabled: boolean },
  _: unknown,
  form: FormData
): Promise<State> {
  if (form.get("terms")?.toString() !== "on") {
    return {
      errors: {
        general: ["É preciso aceitar os termos para prosseguir"],
      },
    }
  }

  const studentEntry: z.infer<typeof studentSchema> = {
    name: form.get("student-name")?.toString()!,
    lastname: form.get("student-lastname")?.toString()!,
    email: form.get("student-email")?.toString()!,
    cpf: form.get("student-cpf")?.toString()!,
    phone: form.get("student-phone")?.toString()!,
    birthdate: form.get("student-birthdate")?.toString()! as any,
    password: form.get("student-password")?.toString()!,
    "password-confirm": form.get("student-password-confirm")?.toString()!,
    disability: form.get("student-disability")?.toString()! || null,
  }
  const studentAddressEntry: z.infer<typeof addressSchema> = {
    cep: form.get("address-cep")?.toString()!,
    state: form.get("address-state")?.toString()!,
    city: form.get("address-city")?.toString()!,
    neighborhood: form.get("address-neighborhood")?.toString()!,
    street: form.get("address-street")?.toString()!,
    number: form.get("address-number")?.toString()!,
    complement: form.get("address-complement")?.toString()!,
  }

  const student = studentSchema.safeParse(studentEntry)
  const studentAddress = addressSchema.safeParse(studentAddressEntry)

  let errors: State["errors"] = {}

  if (student.error) {
    errors = {
      ...errors,
      ...mapError(student.error),
    }
  }

  if (studentAddress.error) {
    errors = {
      ...errors,
      ...mapError(studentAddress.error),
    }
  }

  const minorAgeType = student.data?.birthdate
    ? new Date().getFullYear() -
        new Date(student.data.birthdate!).getFullYear() <
      18
    : false

  const responsibleEnabled = responsibleEnabledFlag || minorAgeType

  const responsibleEntry: z.infer<typeof responsibleSchema> = {
    name: form.get("responsible-name")?.toString()!,
    lastname: form.get("responsible-lastname")?.toString()!,
    email: form.get("responsible-email")?.toString()!,
    cpf: form.get("responsible-cpf")?.toString()!,
    phone: form.get("responsible-phone")?.toString()!,
    relationship: form.get("responsible-relationship")?.toString()!,
  }
  const responsibleAddressEntry: z.infer<typeof addressSchema> = {
    cep: form.get("responsible-address-cep")?.toString()!,
    state: form.get("responsible-address-state")?.toString()!,
    city: form.get("responsible-address-city")?.toString()!,
    neighborhood: form.get("responsible-address-neighborhood")?.toString()!,
    street: form.get("responsible-address-street")?.toString()!,
    number: form.get("responsible-address-number")?.toString()!,
    complement: form.get("responsible-address-complement")?.toString()!,
  }

  const responsible = responsibleSchema.safeParse(responsibleEntry)
  const responsibleAddress = addressSchema.safeParse(responsibleAddressEntry)

  if (responsibleEnabled) {
    if (responsible.error) {
      errors = {
        ...errors,
        ...mapError(responsible.error, "responsible"),
      }
    }

    if (responsibleAddress.error) {
      errors = {
        ...errors,
        ...mapError(responsibleAddress.error, "responsible-address"),
      }
    }
  }

  if (responsibleEnabled) {
    if (responsible.data?.email === student.data?.email) {
      errors = {
        ...errors,
        "responsible-email": ["O e-mail não pode ser igual ao do aluno"],
      }
    }

    if (responsible.data?.cpf === student.data?.cpf) {
      errors = {
        ...errors,
        "responsible-cpf": ["O CPF não pode ser igual ao do aluno"],
      }
    }

    if (responsible.data?.phone === student.data?.phone) {
      errors = {
        ...errors,
        "responsible-phone": ["O Celular não pode ser igual ao do aluno"],
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors: {
        ...errors,
        general: [
          "Existem alguns erros no formulário, tente novamente após corrigir os erros",
        ],
      },
    }
  }

  const { class: enrollingClass, error: retrieveClassError } =
    await retrieveClassBySlugAction({
      slug: classSlug,
    })

  if (retrieveClassError) {
    consola.error("Failed to retrieve class by slug", retrieveClassError)
    return {
      errors: {
        general: [
          "Alguma coisa deu errado, já estamos trabalhando nisso. Tente novamente mais tarde.",
        ],
      },
    }
  }

  // create student
  const { student: createdStudent, error: createStudentError } =
    await createStudentAction({
      name: `${student.data?.name} ${student.data?.lastname}`,
      email: student.data?.email!,
      cpf: student.data?.cpf!,
      phone: student.data?.phone!,
      birthDate: student.data?.birthdate!,
      password: student.data?.password!,
      disability: student.data?.disability ?? undefined,
      address: {
        cep: studentAddress.data?.cep!,
        city: studentAddress.data?.city!,
        state: studentAddress.data?.state!,
        neighborhood: studentAddress.data?.neighborhood!,
        number: studentAddress.data?.number!,
        street: studentAddress.data?.street!,
      },
    })

  if (createStudentError) {
    consola.error("Failed to create student.", createStudentError)
    return {
      errors: {
        general: [
          "Alguma coisa deu errado, já estamos trabalhando nisso. Tente novamente mais tarde.",
        ],
      },
    }
  }

  if (responsibleEnabled) {
    const { responsible: _, error: createResponsibleError } =
      await createResponsible({
        name: `${responsible.data?.name} ${responsible.data?.lastname}`,
        email: responsible.data?.email!,
        cpf: responsible.data?.cpf!,
        phone: responsible.data?.phone!,
        relationship: responsible.data?.relationship!,
        studentId: createdStudent?.id!,
        address: {
          cep: responsibleAddress.data?.cep!,
          city: responsibleAddress.data?.city!,
          state: responsibleAddress.data?.state!,
          neighborhood: responsibleAddress.data?.neighborhood!,
          number: responsibleAddress.data?.number!,
          street: responsibleAddress.data?.street!,
        },
      })

    if (createResponsibleError) {
      consola.error("Failed to create responsible.", createResponsibleError)
      return {
        errors: {
          general: [
            "Alguma coisa deu errado, já estamos trabalhando nisso. Tente novamente mais tarde.",
          ],
        },
      }
    }
  }

  const { data: enrolledInfo, error: enrollError } = await enrollStudentToClass(
    {
      classId: enrollingClass!.id,
      studentId: createdStudent!.id,
    }
  )

  if (enrollError) {
    consola.error("Failed to enroll.", enrollError)
    return {
      errors: {
        general: [
          "Ocorreu um erro ao realizar a matrícula, já estamos trabalhando nisso. Tente novamente mais tarde.",
        ],
      },
    }
  }

  cookies().set(
    accessTokenCookieKey,
    enrolledInfo!.authentication.accessToken,
    cookieOptions
  )

  cookies().set(
    refreshTokenCookieKey,
    enrolledInfo!.authentication.refreshToken,
    cookieOptions
  )

  const invoiceId = enrolledInfo!.invoice.id

  const url = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/pay/${invoiceId}`

  return redirect(url)
}
