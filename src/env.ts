import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		GITHUB_APP_ID: z.string().catch(""),
		GITHUB_APP_SECRET: z.string().catch(""),
	},
	runtimeEnv: {
		GITHUB_APP_ID: process.env.GITHUB_APP_ID,
		GITHUB_APP_SECRET: process.env.GITHUB_APP_SECRET,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
