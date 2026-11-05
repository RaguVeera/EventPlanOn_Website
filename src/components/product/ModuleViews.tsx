import type { ComponentType } from 'react'
import type { AvatarKey, ModuleId, Tone } from '@/types'
import { Avatar, Bar, Chip } from '@/components/ui/atoms'
import { DataTable, EvHead, Kpi, KpiGrid, Panel, PanelTitle, SampleNote, TaskRow } from './primitives'

/* Each view is the inside of an <AppMain>; its direct children are staggered in by GSAP. */

function PlanningView() {
  const events: { name: string; date: string; tone: Tone; status: string; ready: number }[] = [
    { name: 'Partner Summit 2027', date: 'Mar 18', tone: 'ok', status: 'On track', ready: 78 },
    { name: 'Spring Charity Gala', date: 'Apr 05', tone: 'warn', status: 'Needs attention', ready: 54 },
    { name: 'Sales Kickoff Offsite', date: 'Feb 10', tone: 'ok', status: 'On track', ready: 91 },
    { name: 'Product Launch Expo', date: 'May 22', tone: 'info', status: 'Planning', ready: 22 },
  ]
  return (
    <>
      <EvHead title="Your events" sub="6 active · 2 in planning" chip={<Chip tone="coral">+ New event</Chip>} />
      {events.map((e) => (
        <Panel key={e.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-1.5">
          <div>
            <strong className="font-display">{e.name}</strong>
            <div className="text-xs text-muted">
              {e.date} · {e.ready}% ready
            </div>
            <Bar value={e.ready} />
          </div>
          <Chip tone={e.tone}>{e.status}</Chip>
        </Panel>
      ))}
    </>
  )
}

function BudgetView() {
  const rows: [string, string, string, string, Tone][] = [
    ['Venue', '$90,000', '$88,500', '−$1,500', 'ok'],
    ['Catering', '$40,000', '$43,200', '+$3,200', 'warn'],
    ['AV & production', '$35,000', '$29,800', '−$5,200', 'ok'],
    ['Décor', '$18,000', '$11,400', '−$6,600', 'ok'],
    ['Marketing', '$22,000', '$13,500', '−$8,500', 'ok'],
  ]
  return (
    <>
      <EvHead title="Budget · Partner Summit" sub="Total $300,000" chip={<Chip tone="ok">$113.6k remaining</Chip>} />
      <DataTable
        tabular
        right={[1, 2, 3]}
        head={['Category', 'Estimate', 'Actual', 'Variance']}
        rows={rows.map(([cat, est, act, variance, tone]) => [cat, est, act, <Chip key={cat} tone={tone}>{variance}</Chip>])}
      />
    </>
  )
}

function TasksView() {
  const tasks: { label: string; owner: AvatarKey; done: boolean; when: string }[] = [
    { label: 'Confirm AV vendor', owner: 'RK', done: true, when: 'Done' },
    { label: 'Finalize keynote run of show', owner: 'AM', done: false, when: 'Due Thu' },
    { label: 'Send badge proofs to print', owner: 'SL', done: false, when: 'Due Fri' },
    { label: 'Catering final headcount', owner: 'JP', done: false, when: 'Due Fri' },
    { label: 'Book shuttle buses', owner: 'DN', done: false, when: 'Next week' },
    { label: 'Publish session schedule', owner: 'AM', done: true, when: 'Done' },
  ]
  return (
    <>
      <EvHead title="Tasks" sub="128 of 164 complete" chip={<Chip>This week</Chip>} />
      <Panel>
        {tasks.map((t) => (
          <TaskRow
            key={t.label}
            label={t.label}
            done={t.done}
            owner={t.owner}
            trailing={<Chip tone={t.done ? 'ok' : 'default'}>{t.when}</Chip>}
          />
        ))}
      </Panel>
    </>
  )
}

function TimelineView() {
  const rows: { label: string; left: string; width: string; color: string }[] = [
    { label: 'Venue', left: '0%', width: '22%', color: 'bg-info' },
    { label: 'Speakers', left: '10%', width: '45%', color: 'bg-coral' },
    { label: 'Marketing', left: '25%', width: '50%', color: 'bg-warn' },
    { label: 'Registration', left: '35%', width: '58%', color: 'bg-ok' },
    { label: 'Logistics', left: '55%', width: '35%', color: 'bg-violet' },
    { label: 'Event day', left: '94%', width: '6%', color: 'bg-ink' },
  ]
  return (
    <>
      <EvHead title="Planning timeline" sub="Nov 2026 – Mar 2027" chip={<Chip tone="info">Gantt</Chip>} />
      <Panel className="grid gap-[7px]">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[72px_minmax(0,1fr)] items-center gap-2 text-[11.5px] text-muted">
            <span>{r.label}</span>
            <div className="relative h-4 rounded-md bg-sand">
              <i className={`absolute inset-y-0 rounded-md ${r.color}`} style={{ left: r.left, width: r.width }} />
            </div>
          </div>
        ))}
        <div className="grid grid-cols-[72px_minmax(0,1fr)] items-center gap-2 text-[11.5px] text-muted">
          <span />
          <div className="flex justify-between text-[11px]">
            {['Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </Panel>
    </>
  )
}

function GuestsView() {
  const rows: [string, string, string, Tone, string][] = [
    ['Priya Nair', 'Northwind', 'VIP', 'ok', 'Confirmed'],
    ['Daniel Ortiz', 'Lumen Labs', 'Partner', 'ok', 'Confirmed'],
    ['Aisha Khan', 'Brightpath', 'Partner', 'warn', 'Pending'],
    ['Tom Becker', 'Fernwood', 'Standard', 'ok', 'Confirmed'],
    ['Mei Lin', 'Orbit Co.', 'Speaker', 'info', 'Invited'],
  ]
  return (
    <>
      <EvHead title="Attendees" sub="842 registered · 1,000 capacity" chip={<Chip tone="ok">612 confirmed</Chip>} />
      <DataTable
        head={['Name', 'Company', 'Ticket', 'Status']}
        rows={rows.map(([n, c, t, tone, s]) => [n, c, t, <Chip key={n} tone={tone}>{s}</Chip>])}
      />
      <SampleNote />
    </>
  )
}

function VendorsView() {
  const vendors: [string, string, string, Tone][] = [
    ['Grand Hyatt', 'Venue', 'Contract signed', 'ok'],
    ['SoundStage AV', 'Production', 'Deposit due Feb 1', 'warn'],
    ['Saffron Kitchens', 'Catering', 'Quote under review', 'info'],
    ['Bloom & Co.', 'Décor', 'Paid in full', 'ok'],
  ]
  return (
    <>
      <EvHead title="Vendors" sub="14 booked" chip={<Chip tone="warn">2 payments due</Chip>} />
      {vendors.map(([name, kind, status, tone]) => (
        <Panel key={name} className="flex flex-wrap items-center justify-between gap-2.5">
          <div>
            <strong className="font-display">{name}</strong>
            <div className="text-xs text-muted">{kind}</div>
          </div>
          <Chip tone={tone}>{status}</Chip>
        </Panel>
      ))}
    </>
  )
}

function RegistrationView() {
  return (
    <>
      <EvHead title="Registration form" sub="342 responses this week" chip={<Chip tone="ok">Live</Chip>} />
      <Panel className="grid gap-2.5">
        {['Full name', 'Work email', 'Company'].map((f) => (
          <div key={f}>
            <div className="mb-1 text-xs font-semibold">{f}</div>
            <div className="h-8 rounded-lg border border-line bg-ivory" />
          </div>
        ))}
        <div>
          <div className="mb-1.5 text-xs font-semibold">Sessions you'll attend</div>
          <div className="flex flex-wrap gap-1.5">
            <Chip tone="coral">Keynote</Chip>
            <Chip>Partner roadmap</Chip>
            <Chip tone="coral">Workshops</Chip>
          </div>
        </div>
        <div className="grid h-[34px] place-items-center rounded-full bg-coral text-[13px] font-bold text-white">Register</div>
      </Panel>
    </>
  )
}

function CollabView() {
  const items: { who: AvatarKey; text: string; when: string }[] = [
    { who: 'AM', text: 'Moved keynote to 9:30 AM. @RK can AV be ready by 9:00?', when: '2m' },
    { who: 'RK', text: 'Yes, load-in confirmed for 7:30.', when: '1m' },
    { who: 'SL', text: 'Uploaded badge_proofs_v2.pdf', when: 'just now' },
  ]
  return (
    <>
      <EvHead title="Activity" sub="Partner Summit 2027" chip={<Chip>5 collaborators</Chip>} />
      {items.map((c) => (
        <Panel key={c.text} className="flex gap-2.5">
          <Avatar who={c.who} />
          <div className="min-w-0">
            <div className="text-[13px]">{c.text}</div>
            <small className="text-muted">{c.when}</small>
          </div>
        </Panel>
      ))}
    </>
  )
}

function AnalyticsView() {
  const bars = [22, 30, 38, 46, 58, 72, 64, 86]
  return (
    <>
      <EvHead title="Event report" sub="Spring Charity Gala 2026" chip={<Chip tone="ok">Final</Chip>} />
      <KpiGrid>
        <Kpi label="Attendance">94%</Kpi>
        <Kpi label="Under budget">$8.2k</Kpi>
        <Kpi label="Feedback">4.7/5</Kpi>
      </KpiGrid>
      <Panel>
        <PanelTitle>Registrations by week</PanelTitle>
        <svg viewBox="0 0 300 100" className="h-[110px] w-full" aria-hidden="true">
          {bars.map((v, i) => (
            <rect key={i} x={8 + i * 36} y={96 - v} width="24" height={v} rx="4" fill={i === 7 ? '#E95A78' : '#F2C3CF'} />
          ))}
          <path d="M0 96H300" stroke="#E9E3DA" />
        </svg>
      </Panel>
    </>
  )
}

export const MODULE_VIEWS: Record<ModuleId, ComponentType> = {
  planning: PlanningView,
  budget: BudgetView,
  tasks: TasksView,
  timeline: TimelineView,
  guests: GuestsView,
  vendors: VendorsView,
  registration: RegistrationView,
  collab: CollabView,
  analytics: AnalyticsView,
}
