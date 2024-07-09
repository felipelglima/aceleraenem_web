"use server"

import { createResponsible } from "@/actions/create-responsible"
import { createStudentAction } from "@/actions/create-student.action"
import { enrollStudentToClass } from "@/actions/enroll-student-to-class.action"
import { retrieveClassBySlugAction } from "@/actions/retrieve-class-by-slug"
import { redirect } from "next/navigation"
import { z } from "zod"

export type EnrollStudentState = {
  status?: "error"
  errors?: Record<string, string | null>
}

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
})

const studentSchema = z.object({
  name: z
    .string()
    .min(5, "O nome precisa conter no mínimo 5 caracteres")
    .max(50, "O nome pode conter no máximo 50 caracteres"),
  email: z.string().email("E-mail inválido"),
  cpf: z.string().length(11, "Digite apenas os números do CPF"),
  phone: z
    .string()
    .min(10, "O número de celular precisa conter no mínimo 10 dígitos")
    .max(15, "O número de celular pode conter no máximo 15 dígitos"),
  birthDate: z
    .string()
    .length(10, "É necessário preencher a data de nascimento")
    .superRefine((date, ctx) => {
      let timestamp = Date.parse(date)
      if (isNaN(timestamp)) {
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
})

const responsibleSchema = z.object({
  name: z
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

function mapError(errors: Record<string, string[]>, prefix: string) {
  return Object.entries(errors).reduce(
    (acc, [key, values]) => ({
      ...acc,
      [`${prefix}-${key}`]: values[0],
    }),
    {}
  )
}

export async function enrollStudent(
  config: {
    slug: string
    responsibleEnabled: boolean
  },
  _: EnrollStudentState,
  formData: FormData
): Promise<EnrollStudentState> {
  const address = addressSchema.safeParse({
    cep: formData.get("student-address-cep"),
    state: formData.get("student-address-state"),
    city: formData.get("student-address-city"),
    neighborhood: formData.get("student-address-neighborhood"),
    street: formData.get("student-address-street"),
    number: formData.get("student-address-number"),
  })

  let errors: EnrollStudentState["errors"] = {}

  if (address.error) {
    errors = {
      ...mapError(address.error.flatten().fieldErrors, "student-address"),
    }
  }

  const student = studentSchema.safeParse({
    name: formData.get("student-name"),
    email: formData.get("student-email"),
    cpf: formData.get("student-cpf"),
    phone: formData.get("student-phone"),
    birthDate: formData.get("student-birthDate"),
    password: formData.get("student-password"),
  })

  if (student.error) {
    errors = {
      ...errors,
      ...mapError(student.error.flatten().fieldErrors, "student"),
    }
  }

  const minor = student.data?.birthDate
    ? new Date().getFullYear() -
        new Date(student.data.birthDate!).getFullYear() <
      18
    : false

  const responsibleAddress = addressSchema.safeParse({
    cep: formData.get("responsible-address-cep"),
    state: formData.get("responsible-address-state"),
    city: formData.get("responsible-address-city"),
    neighborhood: formData.get("responsible-address-neighborhood"),
    street: formData.get("responsible-address-street"),
    number: formData.get("responsible-address-number"),
  })

  const responsibleValidate = responsibleSchema.safeParse({
    name: formData.get("responsible-name"),
    email: formData.get("responsible-email"),
    cpf: formData.get("responsible-cpf"),
    phone: formData.get("responsible-phone"),
    relationship: formData.get("responsible-relationship"),
  })
  if (minor || config.responsibleEnabled) {
    if (responsibleAddress.error) {
      errors = {
        ...errors,
        ...mapError(
          responsibleAddress.error.flatten().fieldErrors,
          "responsible-address"
        ),
      }
    }

    if (responsibleValidate.error) {
      errors = {
        ...errors,
        ...mapError(
          responsibleValidate.error.flatten().fieldErrors,
          "responsible"
        ),
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    }
  }

  const enrollingClass = await retrieveClassBySlugAction({
    slug: config.slug,
  })

  if (enrollingClass.error) {
    console.log(enrollingClass.error)
    return {}
  }

  const createStudent = await createStudentAction({
    name: student.data!.name,
    email: student.data!.email,
    cpf: student.data!.cpf,
    phone: student.data!.phone,
    address: {
      cep: address.data!.cep,
      state: address.data!.state,
      city: address.data!.city,
      neighborhood: address.data!.neighborhood,
      street: address.data!.street,
      number: address.data!.number,
    },
    birthDate: student.data!.birthDate,
    password: student.data!.password,
  })

  if (createStudent.error) {
    console.log(createStudent.error)
    return {}
  }

  if (!createStudent.student?.id) {
    console.log("student id not returned")
    return {}
  }

  const responsible = await createResponsible({
    name: responsibleValidate.data!.name,
    email: responsibleValidate.data!.email,
    cpf: responsibleValidate.data!.cpf,
    phone: responsibleValidate.data!.phone,
    address: responsibleAddress.data!,
    relationship: responsibleValidate.data!.relationship,
    studentId: createStudent.student.id,
  })

  if (responsible.error) {
    console.log(responsible.error)
    return {}
  }

  const { error: enrollmentError } = await enrollStudentToClass({
    class: {
      id: enrollingClass.class!.id,
    },
    student: {
      id: createStudent.student.id,
    },
  })

  if (enrollmentError) {
    console.log("ocorreu um erro", enrollmentError)
    return {}
  }

  if (process.env.NODE_ENV === "development") {
    return redirect("http://localhost:3333")
  }

  return redirect("https://app.aceleraenem.com")
}
