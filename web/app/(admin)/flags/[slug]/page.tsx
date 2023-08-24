import { getFlag } from '@/app/api/flags'
import PageTitle from '@/app/components/PageTitle'

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
    <div className="grid grid-cols-2">
      <PageTitle>{flag.name}</PageTitle>
    </div>
  )
}
