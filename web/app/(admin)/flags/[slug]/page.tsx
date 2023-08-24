import { getFlag } from '@/app/api/flags'
import PageTitle from '@/app/components/PageTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flags',
}

export default async function Page({ params }: { params: { slug: string } }) {
  const flag = await getFlag(params.slug)

  return (
    <div className="grid grid-cols-2">
      <PageTitle>{flag.name}</PageTitle>
    </div>
  )
}
