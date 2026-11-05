import type { RouteKey } from '@/types'

/**
 * Internal pages use root-relative paths; links that leave the marketing site
 * (the web app itself) are absolute URLs. Point the absolute ones at the live app.
 */
export const ROUTES: Record<RouteKey, string> = {
  signup: 'https://www.eventplanon.com/signup',
  login: 'https://www.eventplanon.com/login',
  demo: '/demo',
  pricing: '/pricing',
}

/** Full plan and price details live in the app. */
export const PLANS_URL = 'https://www.eventplanon.com/pricing'

export const PATHS = {
  home: '/',
  platform: '/platform',
  solutions: '/solutions',
  ai: '/ai',
  resources: '/resources',
  pricing: '/pricing',
  demo: '/demo',
} as const

export const SUPPORT_EMAIL = 'support@eventplanon.com'

export const isExternal = (href: string): boolean => /^https?:\/\//.test(href)
