'use client'

import { Button, ButtonProps } from '@nextui-org/react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function Submit(props: ButtonProps) {
  const { pending } = useFormStatus()

  return <Button isLoading={pending} type="submit" {...props} />
}
