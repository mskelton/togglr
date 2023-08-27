import { EditProps } from "@/app/components/InlineEdit/EditView"

export interface EditFlagNameProps extends EditProps<string> {}

export default function EditFlagName({
  onChange,
  ...props
}: EditFlagNameProps) {
  return (
    <input
      aria-label="Flag name"
      className="text-3xl font-bold w-full rounded-xl p-2"
      name="name"
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  )
}
