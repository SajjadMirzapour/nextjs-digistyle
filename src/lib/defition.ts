import { z } from "zod";

export const LoginFormSchems = z.object({
  username: z
    .string()
    .min(6, { message: "نام کاربری باید حداقل شش حرف داشته باشد" }),
  email: z.string().email({ message: 'یک ایمیل صحیح وارد نمایید' }),
  password: z
    .string()
    .min(6, { message: "پسورد باید حداقل شش حرف داشته باشد" })
    // .regex(/[a-zA-Z]/, { message: "حداقل یک حرف وارد کنید" })
    .regex(/[0-9]/, { message: "حداقل یک عدد وارد کنید" }),
});

export type FormState =
| {
    errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
    }
    message?: string[]
}
| undefined