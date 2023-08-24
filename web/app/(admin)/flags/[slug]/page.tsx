import { Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import slugify from '@sindresorhus/slugify'
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

      <form>
        <Input
          autoFocus
          defaultValue={flag.name}
          label="Name"
          name="name"
          variant="bordered"
        />
        <Input
          isReadOnly
          label="Slug"
          name="slug"
          value={flag.slug}
          variant="bordered"
        />
        <Input
          defaultValue={flag.type}
          label="Type"
          name="type"
          variant="bordered"
        />
        <Textarea
          defaultValue={flag.name}
          label="Description"
          name="description"
          variant="bordered"
        />
      </form>
    </div>
  )
}
