import { useEffect } from 'react'

/** Sets the browser tab title for the current page. */
export function usePageTitle(title?: string): void {
  useEffect(() => {
    document.title = title ? `${title} · Event Plan On` : 'Event Plan On · Every event. One intelligent platform.'
  }, [title])
}
