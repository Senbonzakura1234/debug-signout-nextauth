import { NextAuthConfig } from "next-auth";
import { z } from "zod";

export const signInQueryValidator = z
	.object({
		callbackUrl: z.string().url().optional().catch("/").default("/"),
		error: z.string().optional().catch(undefined).transform(Boolean),
	})
	.catch({ callbackUrl: "/", error: false })
	.default({ callbackUrl: "/", error: false });

export const customPages = {
	signIn: "/signin",
	signOut: "/signout",
} as const satisfies Partial<NextAuthConfig["pages"]>;
