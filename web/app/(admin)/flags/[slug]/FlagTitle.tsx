"use client"

import { Flag } from "@/app/api/flags"
import InlineEdit from "@/app/components/InlineEdit"
import PageTitle from "@/app/components/PageTitle"
import { editFlag } from "../actions"
import EditFlagName from "./EditFlagName"

export interface FlagTitleProps {
  flag: Flag
}

export default function FlagTitle({ flag }: FlagTitleProps) {
  return (
    <div className="mb-8 w-full">
      <InlineEdit
        action={editFlag}
        edit={(props) => <EditFlagName {...props} />}
        read={(value) => <PageTitle>{value}</PageTitle>}
        value={flag.name}
      />
    </div>
  )
}
