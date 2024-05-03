import { AuthCredentialValidator } from "../lib/validators/account-credentials-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
    createPayloadUser: publicProcedure
    .input(AuthCredentialValidator)
    .mutation(async({input})=>{
        const {email, password} = input 
        const payload = getPayloadClient()

        const { docs: users } = await (await payload).find({
            collection: 'users',
            where: {
              email: {
                equals: email,
              },
            },
          })

          if(users.length !== 0)
            throw new TRPCError({code: "CONFLICT"})

          await (await payload).create({
            collection: "users",
            data:{}
          })
    })
})