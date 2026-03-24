import * as z from "zod"

 export const loginShema = z.object({
    email: z.string().email('Incorect email'),
    password: z.string().min(1, "Password is required!")
})

export type LoginSchema = z.infer<typeof loginShema>

