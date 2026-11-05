import { useRef } from 'react'
import { PATHS } from '@/config/routes'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Button } from '@/components/ui/Button'
import { Container, Eyebrow, Section } from '@/components/ui/layout'
import { Icon } from '@/components/ui/Icon'
import { PageHero } from '@/components/site/PageHero'
import { WordReveal } from '@/components/site/WordReveal'
import { AiAssistant } from '@/components/sections/AiAssistant'
import { ClosingScene } from '@/components/story/ClosingScene'
import type { IconName } from '@/types'

const STEPS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'chart', title: 'Learns from your event data', text: 'Budgets, tasks, guests and vendors already live in one place, so the assistant sees the whole event.' },
  { icon: 'spark', title: 'Suggests the next step', text: 'Starter task lists and timelines from your event type, date and size.' },
  { icon: 'shield', title: 'Catches risks early', text: 'Overruns and clashing deadlines surface weeks before the event, not on the day.' },
  { icon: 'bolt', title: 'Automates the busywork', text: 'Reminders, RSVP updates and nudges to owners happen without anyone chasing.' },
]

export default function Ai() {
  usePageTitle('AI assistant')
  const root = useRef<HTMLDivElement>(null)
  useScrollReveal(root, '[data-reveal]')

  return (
    <div ref={root}>
      <PageHero
        tone="dark"
        eyebrow="AI-powered event management"
        lines={['A co-pilot,']}
        accent="not an autopilot."
        lede="Event Plan On learns from your event data to suggest next steps, catch risks early and automate the busywork. You stay in control of every decision."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Button route="signup" size="lg" arrow>
            Try it free for 60 days
          </Button>
          <Button to={PATHS.demo} variant="line" size="lg">
            See it in a demo
          </Button>
        </div>
      </PageHero>

      <AiAssistant act="Ask it anything" compact />

      <Section>
        <Container>
          <Eyebrow>How it works</Eyebrow>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} data-reveal className="relative grid content-start gap-4 rounded-card-lg border border-line bg-paper p-7">
                <span className="font-serif text-6xl leading-none text-coral/25">{String(i + 1).padStart(2, '0')}</span>
                <span className="grid size-11 place-items-center rounded-xl bg-coral-soft text-coral-deep">
                  <Icon name={s.icon} size={20} />
                </span>
                <h3 className="font-serif text-2xl leading-tight font-medium">{s.title}</h3>
                <p className="text-[15px] text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <Eyebrow>Our principle</Eyebrow>
          <WordReveal
            className="mt-6 font-serif text-[clamp(36px,6vw,96px)] leading-[1] font-medium tracking-[-0.035em]"
            text="Suggestions, never surprises. You approve every change."
          />
        </Container>
      </Section>

      <ClosingScene />
    </div>
  )
}
