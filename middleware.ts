import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function getWITANow() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 8 * 60 * 60 * 1000);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // halaman yang dikunci
  if (pathname.startsWith('/protected')) {
    const now = getWITANow();

    // 00:00 WITA hari ini
    const midnight = new Date(now);
    midnight.setHours(0, 0, 0, 0);

    // jika masih sebelum 00:00 → redirect
    if (now < midnight) {
      const url = request.nextUrl.clone();
      url.pathname = '/locked';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/:path*'],
};
