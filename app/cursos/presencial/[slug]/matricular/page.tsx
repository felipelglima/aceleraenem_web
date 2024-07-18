import { API_URL } from "@/lib/api"

import { Form } from "./components"

export async function generateStaticParams(): Promise<
  Array<{
    slug: string
  }>
> {
  const { data } = (await fetch(`${API_URL}/api/classes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())) as {
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

export default async function Page({ params }: { params: { slug: string } }) {
  return <Form slug={params.slug} />
}
