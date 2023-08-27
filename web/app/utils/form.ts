export function parseForm<T>(formData: FormData): T {
  return Object.fromEntries(formData.entries()) as T
}
