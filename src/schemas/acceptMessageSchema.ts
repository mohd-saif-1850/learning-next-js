import { z } from "zod"

export const acceptMEssageSchema = z.object({
    acceptMessages : z.boolean()
})