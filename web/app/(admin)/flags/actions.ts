'use server'

import { CreateFlagRequest, createFlag } from '@/app/api/flags'
import { revalidateTag } from 'next/cache'

export async function addFlag(formData: FormData) {
  const data = Object.fromEntries(
    formData.entries(),
  ) as unknown as CreateFlagRequest

  await createFlag({ ...data, enabled: false })
  revalidateTag('flags')
}
