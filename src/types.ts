export type PageProps = {
	params: { id: string };
	searchParams: Record<string, string | Array<string> | undefined | null>;
};