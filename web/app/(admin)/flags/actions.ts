'use server'

import { revalidateTag } from 'next/cache'
import { createFlag, CreateFlagRequest } from '@/app/api/flags'

export async function addFlag(formData: FormData) {
  const data = Object.fromEntries(
    formData.entries(),
  ) as unknown as CreateFlagRequest

  await createFlag({ ...data, enabled: false })
  revalidateTag('flags')
}
