import { getFlag } from "@/app/api/flags"
import FlagTitle from "./FlagTitle"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const flag = await getFlag(params.slug)

  return {
    title: `${flag.name} | Togglr`,
  }
}

export default async function Page({ params }: PageProps) {
  const flag = await getFlag(params.slug)

  return (
    <div>
      <FlagTitle flag={flag} />
    </div>
  )
}
