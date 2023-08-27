"use client"

import { Input, Textarea } from "@nextui-org/react"
import { Flag } from "@/app/api/flags"
import Submit from "@/app/components/Submit"

export interface EditFlagFormProps {
  flag: Flag
}

export default function EditFlagForm({ flag }: EditFlagFormProps) {
  return (
    <>
      <input name="slug" type="hidden" value={flag.slug} />
      <Input
        autoComplete="off"
        autoFocus
        defaultValue={flag.name}
        label="Name"
        name="name"
        variant="bordered"
      />
      <Textarea
        defaultValue={flag.name}
        label="Description"
        name="description"
        variant="bordered"
      />

      <div className="flex gap-4 justify-end">
        <Submit color="primary">Save</Submit>
      </div>
    </>
  )
}
