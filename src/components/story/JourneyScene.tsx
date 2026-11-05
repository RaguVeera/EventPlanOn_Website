import { useRef, useState, type ComponentType } from 'react'
import { cn } from '@/lib/cn'
import { STAGES } from '@/data/content'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { AppFrame, AppMain } from '@/components/ui/AppFrame'
import { Eyebrow } from '@/components/ui/layout'
import { MODULE_VIEWS } from '@/components/product/ModuleViews'
import { SHOWCASE } from '@/components/product/ShowcaseViews'

/** Which product screen illustrates each stage of the lifecycle. */
const SCREENS: { url: string; View: ComponentType }[] = [
  { url: 'events', View: MODULE_VIEWS.planning },
  { url: 'tasks', View: MODULE_VIEWS.tasks },
  { url: 'forms/registration', View: MODULE_VIEWS.registration },
  { url: 'agenda/day-1', View: SHOWCASE[2].View },
  { url: 'reports', View: MODULE_VIEWS.analytics },
]

/**
 * Act 2: the journey. On desktop the page pins and the five lifecycle stages
 * slide past horizontally as you scroll; on phones they simply stack.
 */
export function JourneyScene() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current || !track.current) return
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        const el = track.current!
        const distance = () => el.scrollWidth - window.innerWidth
        gsap.to(el, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => setActive(Math.round(self.progress * (STAGES.length - 1))),
          },
        })
        gsap.to('[data-journey-bar]', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section ref={root} id="journey" className="relative overflow-hidden bg-ivory md:h-screen">
      {/* Fixed chapter header + progress while the track moves */}
      <div className="px-4 pt-16 md:absolute md:inset-x-0 md:top-0 md:z-10 md:px-8 md:pt-24">
        <div className="mx-auto flex max-w-[1200px] items-end justify-between gap-6">
          <div>
            <Eyebrow>Act 02 · The journey</Eyebrow>
            <h2 className="mt-3 font-serif text-[clamp(30px,4vw,56px)] leading-none font-medium tracking-[-0.03em]">
              From first idea to <em className="text-coral">final report.</em>
            </h2>
          </div>
          <ol className="m-0 hidden list-none gap-2 p-0 md:flex" aria-label="Lifecycle progress">
            {STAGES.map((s, i) => (
              <li
                key={s.title}
                className={cn(
                  'grid size-9 place-items-center rounded-full border font-display text-xs font-bold transition-colors duration-300',
                  i <= active ? 'border-coral bg-coral text-white' : 'border-line bg-paper text-muted',
                )}
                aria-current={i === active ? 'step' : undefined}
              >
                {i + 1}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div ref={track} className="flex flex-col md:h-full md:w-[500vw] md:flex-row">
        {STAGES.map((s, i) => {
          const { View, url } = SCREENS[i]
          const on = i === active
          return (
            <article
              key={s.title}
              className="relative grid items-center gap-8 px-4 py-14 md:h-full md:w-screen md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] md:gap-14 md:px-[max(32px,calc((100vw-1136px)/2))] md:pt-40 md:pb-20"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 right-3 font-serif text-[clamp(140px,26vw,380px)] leading-none font-medium text-coral/10 select-none md:right-10 md:top-24"
              >
                0{i + 1}
              </span>
              <div
                className={cn(
                  'relative grid content-center gap-5 transition-[opacity,transform] duration-500 md:max-w-[520px]',
                  on ? 'md:translate-y-0 md:opacity-100' : 'md:translate-y-4 md:opacity-30',
                )}
              >
                <Eyebrow>
                  Stage {i + 1} of {STAGES.length}
                </Eyebrow>
                <h3 className="font-serif text-[clamp(36px,5vw,68px)] leading-[.98] font-medium tracking-[-0.03em]">{s.title}</h3>
                <p className="text-lg text-muted">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tools.map((t) => (
                    <span key={t} className="inline-flex items-center gap-2 rounded-xl border border-line bg-paper px-3.5 py-2 text-sm font-semibold">
                      <i className="size-2 rounded-full bg-coral" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={cn(
                  'relative transition-[opacity,transform] duration-700',
                  on ? 'md:translate-y-0 md:scale-100 md:opacity-100' : 'md:translate-y-8 md:scale-[.96] md:opacity-40',
                )}
              >
                <AppFrame url={`app.eventplanon.com/${url}`}>
                  <AppMain className="min-h-[300px] content-start">
                    <View />
                  </AppMain>
                </AppFrame>
              </div>
            </article>
          )
        })}
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden h-1 bg-line md:block" aria-hidden="true">
        <div data-journey-bar className="h-full origin-left scale-x-0 bg-coral" />
      </div>
    </section>
  )
}
