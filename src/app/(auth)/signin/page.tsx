import { auth, providersData, signIn } from "@root/auth";
import { PageProps } from "@root/types";
import { signInQueryValidator } from "@root/utils";
import { RedirectType, permanentRedirect } from "next/navigation";

export default async function SignIn({ searchParams }: PageProps) {
	const { callbackUrl } = signInQueryValidator.parse(searchParams);

	const session = await auth();

	if (session) return permanentRedirect("/", RedirectType.replace);

	return (
		<div className="flex flex-col gap-2">
			{providersData.map((provider) => (
				<form
					key={provider.id}
					action={async () => {
						"use server";

						await signIn(provider.id, { callbackUrl });
					}}
				>
					<button className="bg-white text-black p-3" type="submit">
						<span>Sign in with {provider.name}</span>
					</button>
				</form>
			))}
		</div>
	);
}
