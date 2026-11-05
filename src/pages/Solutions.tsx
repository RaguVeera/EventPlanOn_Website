import { usePageTitle } from '@/hooks/usePageTitle'
import { Container, Section } from '@/components/ui/layout'
import { PageHero } from '@/components/site/PageHero'
import { Marquee } from '@/components/site/Marquee'
import { SolutionStack } from '@/components/story/SolutionStack'
import { ClosingScene } from '@/components/story/ClosingScene'

export default function Solutions() {
  usePageTitle('Solutions')
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        lines={['Built for the way']}
        accent="your team runs events."
        lede="Corporate teams, planners, agencies, conferences and expos: the same connected platform, shaped around how you work."
      />
      <Section className="pt-0 md:pt-0">
        <Container>
          <SolutionStack />
        </Container>
      </Section>
      <Section className="overflow-hidden py-10 md:py-16">
        <Marquee words={['Summits', 'Galas', 'Offsites', 'Weddings', 'Expos', 'Launches']} />
      </Section>
      <ClosingScene />
    </>
  )
}
