import { req } from "./req"

export type FlagType = "boolean" | "number" | "string"

export interface Flag {
  createdAt: string
  deletedAt: string
  description: string
  enabled: boolean
  name: string
  slug: string
  type: FlagType
  updatedAt: string
}

export interface GetFlagsResponse {
  flags: Flag[]
}

export function getFlags(): Promise<GetFlagsResponse> {
  return req.get("/flags", {
    next: {
      tags: ["flags"],
    },
  })
}

export function getFlag(slug: string): Promise<Flag> {
  return req.get(`/flags/${slug}`)
}

export type CreateFlagRequest = Pick<
  Flag,
  "description" | "enabled" | "name" | "slug" | "type"
>

export function createFlag(flag: CreateFlagRequest): Promise<Flag> {
  return req.post("/flags", flag)
}

export type UpdateFlagRequest = Partial<
  Pick<Flag, "description" | "enabled" | "name">
> & { slug: string }

export function updateFlag({
  slug,
  ...flag
}: UpdateFlagRequest): Promise<Flag> {
  return req.put(`/flags/${slug}`, flag)
}

export function deleteFlag(slug: string): Promise<void> {
  return req.delete(`/flags/${slug}`)
}
