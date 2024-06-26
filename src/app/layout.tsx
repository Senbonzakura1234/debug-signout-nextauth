import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { auth } from "@root/auth";
import { SessionProvider } from "next-auth/react";
import AuthNav from "./_components/AuthNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const getLayoutProps = async () => {
	return await auth();
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getLayoutProps();

	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider session={session}>
					<div className="p-3">
						<AuthNav />
					</div>

					<div className="p-3">{children}</div>
				</SessionProvider>
			</body>
		</html>
	);
}
