import { useRef } from 'react'
import { PATHS, PLANS_URL } from '@/config/routes'
import { MODULES } from '@/data/content'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Button } from '@/components/ui/Button'
import { Container, Eyebrow, Section } from '@/components/ui/layout'
import { Icon } from '@/components/ui/Icon'
import { PageHero } from '@/components/site/PageHero'
import { SiteLink } from '@/components/site/SiteLink'
import { ClosingScene } from '@/components/story/ClosingScene'
import { Faq } from '@/components/sections/Faq'

const STEPS = [
  { title: 'Sign up', text: 'Every feature is unlocked for 60 days. No credit card, no setup fees.' },
  { title: 'Plan a real event', text: 'Bring your guests, vendors and budgets across. We help with setup and data migration for free.' },
  { title: 'Choose what fits', text: 'At the end of the trial pick a plan, or keep your account available to export your data.' },
]

const PROMISES = ['No credit card required', 'Free setup & data migration', 'Upgrade, downgrade or cancel anytime']

export default function Pricing() {
  usePageTitle('Pricing')
  const root = useRef<HTMLDivElement>(null)
  useScrollReveal(root, '[data-reveal]')

  return (
    <div ref={root}>
      <PageHero
        eyebrow="Pricing"
        lines={['Try every feature,']}
        accent="free for 60 days."
        lede="Start with everything unlocked, then choose the plan that fits once you have planned a real event with it."
      >
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button route="signup" size="lg" arrow>
            Start 60-day free trial
          </Button>
          <Button to={PATHS.demo} variant="ghost" size="lg">
            Book a demo
          </Button>
          <a
            href={PLANS_URL}
            target="_blank"
            rel="noopener"
            className="px-3 font-display text-sm font-bold text-coral-deep underline-offset-4 hover:underline"
          >
            View plans and prices →
          </a>
        </div>
      </PageHero>

      <Section className="bg-paper">
        <Container>
          <Eyebrow>How the trial works</Eyebrow>
          <ol className="m-0 mt-10 grid list-none gap-5 p-0 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} data-reveal className="grid content-start gap-3 rounded-card-lg bg-sand p-8">
                <span className="font-serif text-7xl leading-none text-coral">{i + 1}</span>
                <h3 className="font-serif text-3xl leading-tight font-medium">{s.title}</h3>
                <p className="text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <ul className="m-0 mt-8 flex list-none flex-wrap gap-x-8 gap-y-3 p-0">
            {PROMISES.map((p) => (
              <li key={p} className="flex items-center gap-2 text-[15px] font-medium">
                <Icon name="check" size={18} className="text-ok" />
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Included in the trial</Eyebrow>
          <h2 className="mt-3 mb-10 max-w-[18ch] font-serif text-[clamp(32px,4.6vw,64px)] leading-none font-medium tracking-[-0.03em]">
            Everything. <em className="text-coral">No locked doors.</em>
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <SiteLink
                key={m.id}
                to={`${PATHS.platform}/${m.id}`}
                data-reveal
                className="group flex items-center gap-4 rounded-2xl border border-line bg-paper px-5 py-4 transition-colors hover:border-coral"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-[11px] bg-coral-soft text-coral-deep">
                  <Icon name={m.icon} size={18} />
                </span>
                <strong className="font-display text-[15px]">{m.label}</strong>
                <Icon name="arrow" size={15} className="ml-auto text-coral opacity-0 transition-opacity group-hover:opacity-100" />
              </SiteLink>
            ))}
            <div data-reveal className="flex items-center gap-4 rounded-2xl border border-coral bg-coral-soft px-5 py-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-[11px] bg-coral text-white">
                <Icon name="spark" size={18} />
              </span>
              <strong className="font-display text-[15px]">AI assistant</strong>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 md:pt-0">
        <Container>
          <Faq />
        </Container>
      </Section>

      <ClosingScene />
    </div>
  )
}
