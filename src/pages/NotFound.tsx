import { PATHS } from '@/config/routes'
import { usePageTitle } from '@/hooks/usePageTitle'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/site/PageHero'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <PageHero
      tone="dark"
      eyebrow="Error 404"
      lines={['This page left']}
      accent="the venue."
      lede="The link may be old or mistyped. Head back to the main stage and pick up the story from there."
      className="min-h-screen"
    >
      <div className="mt-9 flex flex-wrap gap-3">
        <Button to={PATHS.home} size="lg" arrow>
          Back to home
        </Button>
        <Button to={PATHS.platform} variant="line" size="lg">
          Explore the platform
        </Button>
      </div>
    </PageHero>
  )
}
