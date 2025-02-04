import { auth } from "@/auth";

export default auth((req) => {
  console.log(req.auth);
  if (!req.auth && req.nextUrl.pathname !== "/auth") {
    const newUrl = new URL("/auth", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
