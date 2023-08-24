import PageTitle from '@/app/components/PageTitle'
import { Metadata } from 'next'
import AddFlag from './AddFlag'
import FlagList from './FlagList'

export const metadata: Metadata = {
  title: 'Flags | Togglr',
}

export default function Page() {
  return (
    <div className="grid grid-cols-2">
      <PageTitle>Flags</PageTitle>
      <AddFlag></AddFlag>
      <FlagList></FlagList>
    </div>
  )
}
