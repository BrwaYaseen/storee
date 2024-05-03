import { z } from "zod"

 export const AuthCredentialValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message:"password must be 8 characters or more"})
  })

  export type TAuthCredentialValidator = z.infer<typeof AuthCredentialValidator>