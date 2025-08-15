import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    '/',
    '/about',
    '/solutions',
    '/solutions/(.*)',
    '/contact',
    '/join',
    '/join/(.*)',
    '/news',
    '/team',
    '/impact',
    '/api/contact',
    '/api/applications/(.*)'
  ],
  // Routes that can always be accessed, and have 
  // no authentication information
  ignoredRoutes: [
    '/api/webhooks/(.*)',
  ],
  // Routes that require authentication
  beforeAuth: (req) => {
    // Add custom logic before authentication if needed
  },
  afterAuth: (auth, req) => {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return auth.redirectToSignIn({ returnBackUrl: req.url })
    }
    
    // Redirect logged in users to admin dashboard if they visit sign-in/sign-up
    if (auth.userId && (req.nextUrl.pathname === '/sign-in' || req.nextUrl.pathname === '/sign-up')) {
      return Response.redirect(new URL('/admin', req.url))
    }

    // Allow users visiting public routes to access them
    return null
  },
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
