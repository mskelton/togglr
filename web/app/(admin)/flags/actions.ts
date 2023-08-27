"use server"

import { revalidateTag } from "next/cache"
import {
  createFlag,
  CreateFlagRequest,
  updateFlag,
  UpdateFlagRequest,
} from "@/app/api/flags"
import { parseForm } from "@/app/utils/form"

export async function addFlag(formData: FormData) {
  const data = parseForm<CreateFlagRequest>(formData)
  await createFlag({ ...data, enabled: false })
  revalidateTag("flags")
}

export async function editFlag(formData: FormData) {
  const data = parseForm<UpdateFlagRequest>(formData)
  await updateFlag(data)
  revalidateTag("flags")
}
