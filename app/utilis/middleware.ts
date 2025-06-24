import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(async function middleware() {}, {
  publicPaths: ['/'], // allow only home as public
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)', // protects all app routes
  ],
};
