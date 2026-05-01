import * as z from 'zod'

const ServerEnvSchema = z.object({
  API_ORIGIN: z.url(),
})

type TServerEnv = z.infer<typeof ServerEnvSchema>

let cachedServerEnv: TServerEnv | undefined

function parseEnv<TSchema extends z.ZodType>(schema: TSchema, input: unknown): z.infer<TSchema> {
  const parsed = schema.safeParse(input)

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:')

    for (const issue of parsed.error.issues) {
      const path = issue.path.length ? issue.path.join('.') : '(root)'
      console.error(`- ${path}: ${issue.message}`)
    }

    throw new Error('Invalid environment variables')
  }

  return parsed.data
}

export function getServerEnv(): TServerEnv {
  if (cachedServerEnv) {
    return cachedServerEnv
  }

  cachedServerEnv = parseEnv(ServerEnvSchema, {
    API_ORIGIN: process.env.API_ORIGIN ?? 'https://jsonplaceholder.typicode.com',
  })

  return cachedServerEnv
}

export type { TServerEnv }
