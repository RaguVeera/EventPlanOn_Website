import { Container, Eyebrow, Section } from '@/components/ui/layout'
import { Avatar } from '@/components/ui/atoms'
import { CountUp } from '@/components/ui/CountUp'
import { WordReveal } from '@/components/site/WordReveal'

const stats: { value: number; prefix?: string; suffix?: string; label: string }[] = [
  { value: 12, suffix: '+', label: 'planning tools in one workspace' },
  { value: 60, suffix: ' days', label: 'free trial with every feature unlocked' },
  { value: 0, prefix: '$', label: 'setup fees, with free data migration' },
  { value: 1, label: 'shared source of truth for every stakeholder' },
]

/** Act 5: proof. A quote that is read aloud by scrolling, then the numbers. */
export function ProofScene() {
  return (
    <Section className="bg-ivory">
      <Container>
        <Eyebrow>Act 05 · The result</Eyebrow>
        <WordReveal
          className="mt-8 max-w-[22ch] font-serif text-[clamp(36px,6.4vw,104px)] leading-[1] font-medium tracking-[-0.035em] sm:max-w-none"
          text="“The task management and budget tracking features alone have saved us countless hours.”"
        />
        <div className="mt-10 flex items-center gap-3.5 text-[14.5px] text-muted">
          <Avatar who="EP" className="size-11 text-sm" />
          <span>
            <strong className="block font-display text-ink">Event Plan On customer</strong>
            Testimonial from eventplanon.com
          </span>
        </div>

        <div className="mt-20 grid grid-cols-2 border-t border-line md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`px-1 py-8 md:px-8 ${i ? 'md:border-l md:border-line' : ''} ${i % 2 ? 'pl-6' : ''}`}>
              <strong className="block font-serif text-[clamp(44px,6vw,84px)] leading-none font-medium tracking-[-0.03em]">
                {s.prefix}
                {s.value === 0 ? '0' : s.value === 1 ? '1' : <CountUp value={s.value} onScroll />}
                <span className={s.suffix === '+' ? 'text-coral' : 'text-[.4em] text-coral'}>{s.suffix}</span>
              </strong>
              <span className="mt-3 block max-w-[24ch] text-sm text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
