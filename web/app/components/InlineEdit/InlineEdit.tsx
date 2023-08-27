import { useState } from "react"
import { FormAction } from "@/app/(admin)/types/form"
import EditView, { EditProps } from "./EditView"
import ReadView from "./ReadView"

export interface InlineEditProps<T> {
  action: FormAction
  edit: (props: EditProps<T>) => JSX.Element
  read: (value: T) => JSX.Element
  value: T
}

export default function InlineEdit<T>({
  action,
  edit,
  read,
  value,
}: InlineEditProps<T>) {
  const [isReadMode, setIsReadMode] = useState(true)

  return isReadMode ? (
    <ReadView onEdit={() => setIsReadMode(false)}>{read(value)}</ReadView>
  ) : (
    <EditView<T>
      action={action}
      defaultValue={value}
      onClose={() => setIsReadMode(true)}
    >
      {edit}
    </EditView>
  )
}
