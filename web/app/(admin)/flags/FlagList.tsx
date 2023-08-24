import { getFlags } from '@/app/api/flags'
import FlagsTable from './FlagsTable'

export default async function FlagList() {
  const { flags } = await getFlags()

  return (
    <div className="col-start-1 col-end-3">
      <FlagsTable flags={flags}></FlagsTable>
    </div>
  )
}
