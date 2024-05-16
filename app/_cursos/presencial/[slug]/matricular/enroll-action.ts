"use server"

export type EnrollFormState = {
  message: string
}

export const enroll = async (
  state: EnrollFormState,
  formData: FormData
): Promise<EnrollFormState> => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return {
    message: "hello world",
  }
}
