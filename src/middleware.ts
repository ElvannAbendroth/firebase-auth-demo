import { defineMiddleware } from 'astro:middleware'
import { projectAuth } from './firebase/client'

export const onRequest = defineMiddleware((context, next) => {
  const currentUser = projectAuth.currentUser
  const { pathname } = context.url

  if (!currentUser && pathname !== '/register' && pathname !== '/login' && context.request.method === 'GET') {
    return context.redirect('/login')
  }

  if (currentUser) {
    context.locals.userEmail = currentUser.email
  }

  if (currentUser && (pathname === '/register' || pathname === '/login')) {
    return context.redirect('/')
  }

  return next()
})
