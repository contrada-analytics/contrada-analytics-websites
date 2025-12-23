// Cloudflare Turnstile TypeScript declarations
interface Window {
  turnstile?: {
    render: (element: string | HTMLElement, options: {
      sitekey: string
      callback?: (token: string) => void
      'expired-callback'?: () => void
      'error-callback'?: () => void
    }) => string
    reset: (widgetId?: string) => void
    remove: (widgetId: string) => void
  }
}
