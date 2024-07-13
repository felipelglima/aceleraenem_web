"use server"

import crypto from "node:crypto"

import { API_URL, COMMUNICATION_TOKEN } from "@/lib/api"

type EnrollStudentToClassRequest = {
  class: {
    id: string
  }
  student: {
    id: string
  }
}

export const enrollStudentToClass = async (
  props: EnrollStudentToClassRequest
) => {
  const response = await fetch(`${API_URL}/api/enrollments`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${COMMUNICATION_TOKEN}`,
    },
    body: JSON.stringify({
      specversion: "1.0",
      type: "Enrollment Placed",
      source: "web",
      subject: "enrollment",
      action: "placed",
      id: crypto.randomUUID(),
      time: new Date().toISOString(),
      env: process.env.NODE_ENV === "production" ? "prd" : "dev",
      datacontenttype: "application/json",
      data: props,
    }),
  })

  type APIResponse =
    | {
        data: { access_token: string; expiresIn: number }
      }
    | {
        data: null
        error: string
      }

  const result = (await response.json()) as APIResponse

  if (!result.data) {
    return {
      error: result.error,
      data: null,
    }
  }

  return {
    error: null,
    data: {
      access_token: result.data.access_token,
    },
  }
}
