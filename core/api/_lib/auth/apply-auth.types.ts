export type TServerAuthContext =
  | { kind: 'none' }
  | {
      kind: 'bearer'
      token: string
      scheme?: 'Bearer' | string
    }
