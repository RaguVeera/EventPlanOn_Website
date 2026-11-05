import { usePageTitle } from '@/hooks/usePageTitle'
import { Container, Eyebrow, Section } from '@/components/ui/layout'
import { Marquee } from '@/components/site/Marquee'
import { HeroScene } from '@/components/story/HeroScene'
import { ChaosScene } from '@/components/story/ChaosScene'
import { JourneyScene } from '@/components/story/JourneyScene'
import { SolutionStack } from '@/components/story/SolutionStack'
import { ProofScene } from '@/components/story/ProofScene'
import { ClosingScene } from '@/components/story/ClosingScene'
import { ConnectedHub } from '@/components/sections/ConnectedHub'
import { AiAssistant } from '@/components/sections/AiAssistant'

const AUDIENCES = ['Corporate teams', 'Non-profits', 'Agencies', 'Wedding planners', 'Conference hosts', 'Expos']

/**
 * The home page is a six-act story: promise → problem → journey → connection → intelligence → people → proof.
 * Each act hands off to the next, and every one is driven by scroll.
 */
export default function Home() {
  usePageTitle()

  return (
    <>
      <HeroScene />
      <ChaosScene />
      <JourneyScene />
      <ConnectedHub className="bg-sand/60 pt-24 md:pt-32" act="Act 03 · The connection" />
      <AiAssistant act="Act 04 · The intelligence" />

      <Section className="overflow-hidden pb-10 md:pb-16">
        <Container>
          <Eyebrow>Built for people who make events happen</Eyebrow>
        </Container>
        <div className="mt-8 grid gap-2">
          <Marquee words={AUDIENCES} />
          <Marquee words={[...AUDIENCES].reverse()} reverse />
        </div>
      </Section>

      <Section className="pt-6 md:pt-10">
        <Container>
          <div className="mb-12 max-w-[760px]">
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="mt-3 font-serif text-[clamp(34px,5vw,72px)] leading-none font-medium tracking-[-0.03em]">
              Whatever you run, <em className="text-coral">it fits.</em>
            </h2>
          </div>
          <SolutionStack />
        </Container>
      </Section>

      <ProofScene />
      <ClosingScene />
    </>
  )
}
