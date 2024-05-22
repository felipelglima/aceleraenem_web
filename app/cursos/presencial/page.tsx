import Image from "next/image"

import { materials } from "@/app/variables"
import { EnrollModal } from "./enroll-modal"
import { API_URL, Class } from "@/util/api"

const MINUTE = 60
const FIVE_MINUTES = 5 * MINUTE

async function getClasses() {
  const response = await fetch(`${API_URL}/api/classes`, {
    next: {
      revalidate: FIVE_MINUTES,
      tags: ["classes"],
    },
  })
  const data = await response.json()

  return data as Class[]
}

export default async function Page() {
  const classes = await getClasses()

  return (
    <main className="flex w-full flex-col">
      <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-0 px-6 md:flex-row md:gap-16">
        <div className="flex w-full flex-col justify-center gap-6 py-6">
          <section className="mx-auto w-full max-w-7xl p-6">
            <div className="flex flex-col items-center gap-16 rounded-md border border-dashed border-zinc-400 p-4 lg:p-12">
              <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-4xl">
                Você terá acesso à
              </h2>

              <ul className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3">
                {materials.map((material) => (
                  <li
                    key={material.name}
                    className="flex w-full flex-col gap-3 transition duration-500 ease-out hover:scale-105 hover:saturate-150"
                  >
                    <div className="h-[130px] w-full overflow-hidden rounded-md bg-zinc-300 lg:h-[320px]">
                      <Image
                        src={material.img}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <footer className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold text-zinc-800">
                        {material.name}
                      </h3>

                      <p className="text-zinc-600">{material.description}</p>
                    </footer>
                  </li>
                ))}
              </ul>

              <EnrollModal classes={classes} />
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
