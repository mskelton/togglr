import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { Button } from "@nextui-org/react"
import { useInteractOutside } from "@react-aria/interactions"
import { useRef, useState } from "react"
import { FormAction } from "@/app/(admin)/types/form"

export interface EditProps<T> {
  autoFocus: boolean
  onChange: (value: T) => void
  value: T
}

export interface EditViewProps<T> {
  action: FormAction
  children: (props: EditProps<T>) => JSX.Element
  defaultValue: T
  onClose: () => void
}

export default function EditView<T>({
  children,
  defaultValue,
  onClose,
}: EditViewProps<T>) {
  const ref = useRef(null)
  const [value, setValue] = useState(defaultValue)

  useInteractOutside({ onInteractOutside: onClose, ref })

  return (
    <div ref={ref} className="relative">
      {children({ autoFocus: true, onChange: setValue, value })}

      <div className="flex gap-2 absolute -bottom-10 right-0">
        <Button aria-label="Like" color="primary" isIconOnly size="sm">
          <CheckIcon />
        </Button>

        <Button
          aria-label="Like"
          color="danger"
          isIconOnly
          onPress={onClose}
          size="sm"
        >
          <XMarkIcon />
        </Button>
      </div>
    </div>
  )
}
