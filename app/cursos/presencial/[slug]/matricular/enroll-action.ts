"use server"

import { createStudentAction } from "@/actions/create-student.action"
import { enrollStudentToClass } from "@/actions/enroll-student-to-class.action"
import { retrieveClassBySlugAction } from "@/actions/retrieve-class-by-slug"
import { redirect } from "next/navigation"

export type EnrollFormState = {
  message: string
}

export const enroll = async (state: EnrollFormState, formData: FormData) => {
  "use server"

  const slug = formData.get("class-slug")?.toString()

  const name = formData.get("student-name")?.toString()
  const email = formData.get("student-email")?.toString()

  const cpf = formData.get("student-cpf")?.toString()
  const phone = formData.get("student-phone")?.toString()

  const address = {
    cep: formData.get("student-cep")?.toString()!,
    state: formData.get("student-state")?.toString()!,
    city: formData.get("student-city")?.toString()!,
    neighborhood: formData.get("student-neighborhood")?.toString()!,
    street: formData.get("student-street")?.toString()!,
    number: formData.get("student-number")?.toString()!,
  }

  const birthDate = formData.get("student-birthDate")?.toString()

  if (
    !slug ||
    !name ||
    !email ||
    !cpf ||
    !phone ||
    !birthDate ||
    !address.cep ||
    !address.state ||
    !address.city ||
    !address.neighborhood ||
    !address.street ||
    !address.number
  ) {
    return {
      message: "Missing fields",
    }
  }

  const isMinor =
    new Date().getFullYear() - new Date(birthDate).getFullYear() < 18

  const responsibleData = isMinor
    ? {
        name: formData.get("responsible-name")?.toString(),
        email: formData.get("responsible-email")?.toString(),
        cpf: formData.get("responsible-cpf")?.toString(),
        phone: formData.get("responsible-phone")?.toString(),
        address: {
          cep: formData.get("responsible-cep")?.toString(),
          state: formData.get("responsible-state")?.toString(),
          city: formData.get("responsible-city")?.toString(),
          neighborhood: formData.get("responsible-neighborhood")?.toString(),
          street: formData.get("responsible-street")?.toString(),
          number: formData.get("responsible-number")?.toString(),
        },
        relationship: formData.get("responsible-relationship")?.toString(),
      }
    : null

  const { student, error: studentError } = await createStudentAction({
    name,
    email,
    cpf,
    phone,
    address,
    birthDate: new Date(birthDate),
  })

  if (studentError || !student) {
    return {
      message: studentError || "Ocorreu um erro, tente mais tarde.",
    }
  }

  const { class: currentClass, error: classError } =
    await retrieveClassBySlugAction({
      slug,
    })

  if (classError || !currentClass) {
    return {
      message: classError || "Ocorreu um erro, tente mais tarde.",
    }
  }

  const { error: enrollmentError } = await enrollStudentToClass({
    class: currentClass,
    student,
  })

  if (enrollmentError) {
    return {
      message: enrollmentError,
    }
  }

  redirect("https://app.aceleraenem.com")
}
