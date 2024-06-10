import { signOut } from "@root/auth";
import { PageProps } from "@root/types";
import { signInQueryValidator } from "@root/utils";
import { RedirectType, permanentRedirect } from "next/navigation";

export default async function SignOut({ searchParams }: PageProps) {
	const { callbackUrl } = signInQueryValidator.parse(searchParams);

	return (
		<>
			<form
				className="w-full max-w-64 self-center lg:max-w-80"
				action={async () => {
					"use server";
					// 1st i tried with redirect = true but it was not working
					await signOut({ redirect: false, redirectTo: callbackUrl });

					// so i try permanentRedirect but it still didn't work
					permanentRedirect(callbackUrl, RedirectType.replace);
				}}
			>
				<button
					className="bg-white text-black p-3"
					type="submit"
				>
					Confirm Sign out
				</button>
			</form>
		</>
	);
}
