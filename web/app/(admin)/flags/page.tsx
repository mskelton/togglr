import { Metadata } from 'next'
import PageTitle from '@/app/components/PageTitle'
import AddFlag from './AddFlag'
import FlagList from './FlagList'

export const metadata: Metadata = {
  title: 'Flags | Togglr',
}

export default function Page() {
  return (
    <div className="grid grid-cols-2">
      <PageTitle>Flags</PageTitle>
      <AddFlag />
      <FlagList />
    </div>
  )
}
