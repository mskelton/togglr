import { req } from './req'

export type FlagType = 'boolean' | 'number' | 'string'

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
  return req.get('/flags')
}

export function getFlag(slug: string): Promise<Flag> {
  return req.get(`/flags/${slug}`)
}

export function createFlag(flag: Flag): Promise<Flag> {
  return req.post('/flags', flag)
}

export function updateFlag(flag: Flag): Promise<Flag> {
  return req.put(`/flags/${flag.slug}`, flag)
}

export function deleteFlag(slug: string): Promise<void> {
  return req.delete(`/flags/${slug}`)
}