import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import type { Provider } from "next-auth/providers/index";
import { env } from "@root/env";
import { customPages } from "@root/utils";

const providers: Array<Provider> = [
	GitHub({
		clientId: env.GITHUB_APP_ID,
		clientSecret: env.GITHUB_APP_SECRET,
	}),
];
export const providersData = providers.map((provider) => {
	if (typeof provider === "function") {
		const providerData = provider();

		return { id: providerData.id, name: providerData.name };
	} else {
		return { id: provider.id, name: provider.name };
	}
});

export const { auth, handlers, signIn, signOut } = NextAuth({
	providers,
	callbacks: { session: ({ session }) => session },
	pages: customPages,
});
