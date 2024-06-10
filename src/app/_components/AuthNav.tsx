"use client";

import { customPages } from "@root/utils";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthNav() {
	const { data: session, status } = useSession();

	const pathname = usePathname();

	const callbackUrlParam = new URLSearchParams();
	callbackUrlParam.set("callbackUrl", pathname);

	if (status === "loading") return null;

	if (pathname === customPages.signIn || pathname === customPages.signOut)
		return null;

	if (session)
		return (
			<Link className="bg-white text-black p-3" href={`/signout?${callbackUrlParam.toString()}`}>Go to Sign out Page</Link>
		);

	return (
		<button
			className="bg-white text-black p-3"
			onClick={() => signIn()}
		>
			Go to Sign In Page
		</button>
	);
}
