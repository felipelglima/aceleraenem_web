import { NextRequest, NextResponse } from "next/server"

export function proxy(req: NextRequest) {
  const url = req.nextUrl
  const referralId = url.searchParams.get("referralId")

  const res = NextResponse.next()

  if (referralId) {
    res.cookies.set("referralId", referralId, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
  }

  return res
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
}
