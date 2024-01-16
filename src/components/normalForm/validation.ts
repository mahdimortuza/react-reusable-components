import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email().min(1, "email is required"),
  password: z.string().min(8, "password must be more than 8 characters"),
});

export type TNormalForm = z.infer<typeof signUpSchema>;
