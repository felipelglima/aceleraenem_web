export async function generateStaticParams(): Promise<
  Array<{
    slug: string
  }>
> {
  const response = await fetch(`${API_URL}/classes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const { data } = (await response.json()) as {
    data: {
      classes: Array<{
        slug: string
      }>
    }
  }

  return data.classes.map(({ slug }) => ({
    slug,
  }))
}

import { API_URL } from "@/lib/api"
import { Form } from "./form"

export default async function Page({ params }: { params: { slug: string } }) {
  return <Form slug={params.slug} />
}
