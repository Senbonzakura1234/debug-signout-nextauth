import { auth } from '@root/auth';
import { customPages } from '@root/utils';

export default auth(req => {
	if (!req.auth) {
		const newUrl = new URL(customPages.signIn, req.nextUrl.origin);

		if (!req.nextUrl.pathname.startsWith(customPages.signOut))
			newUrl.searchParams.set('callbackUrl', req.nextUrl.href);

		return Response.redirect(newUrl);
	}
});

export const config = { matcher: ['/profile/:path*', '/signout/:path*'] };
