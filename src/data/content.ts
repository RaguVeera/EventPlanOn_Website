import type { HubKey, IconName, ModuleId, SolutionId } from '@/types'

/* ---------- Platform modules ---------- */
export interface PlatformModule {
  id: ModuleId
  label: string
  icon: IconName
  title: string
  text: string
  points: string[]
}

export const MODULES: PlatformModule[] = [
  {
    id: 'planning',
    label: 'Event Planning',
    icon: 'plan',
    title: 'Plan every event from one workspace',
    text: 'Spin up an event from a template and keep its details, files, checklists and stakeholders together.',
    points: [
      'Reusable templates for conferences, galas, offsites and weddings',
      'Mood boards, files and notes attached to the event',
      'Portfolio view of every event your team is running',
    ],
  },
  {
    id: 'budget',
    label: 'Budgets',
    icon: 'budget',
    title: 'Budgets that update themselves',
    text: 'Track estimated versus actual spend by category, with payments and deposits tied to each vendor.',
    points: [
      'Estimate vs. actual by category, in real time',
      'Deposit and payment schedules per vendor',
      'Alerts when a line item runs over',
    ],
  },
  {
    id: 'tasks',
    label: 'Tasks',
    icon: 'task',
    title: 'Tasks with owners and deadlines',
    text: 'Break the event into tasks, assign owners, set due dates and watch progress roll up automatically.',
    points: ['Assign to staff, clients or vendors', 'Dependencies and due-date reminders', 'Board, list and calendar views'],
  },
  {
    id: 'timeline',
    label: 'Timelines',
    icon: 'time',
    title: 'Timelines and day-of agendas',
    text: 'Map milestones across months, then switch to a minute-by-minute run of show for event day.',
    points: [
      'Milestone timeline across the planning cycle',
      'Day-of itinerary shared with the whole crew',
      'Last-minute changes reach everyone instantly',
    ],
  },
  {
    id: 'guests',
    label: 'Guests',
    icon: 'guest',
    title: 'Guest lists that stay accurate',
    text: 'Manage attendees, RSVPs, dietary needs and check-in from one list everyone can trust.',
    points: [
      'RSVP status updates from your forms automatically',
      'Groups, tags, seating and dietary notes',
      'Fast check-in on event day',
    ],
  },
  {
    id: 'vendors',
    label: 'Vendors',
    icon: 'vendor',
    title: 'Every vendor, contract and payment',
    text: 'Keep supplier contacts, quotes, contracts and payment dates in one directory linked to your budget.',
    points: [
      'Vendor directory reusable across events',
      'Quotes and contracts stored with each vendor',
      'Payment due dates feed your budget and tasks',
    ],
  },
  {
    id: 'registration',
    label: 'Registration',
    icon: 'form',
    title: 'Forms and registration, no code',
    text: 'Build branded RSVP, registration and feedback forms that feed straight into your guest list.',
    points: [
      'Templates for RSVP, registration and feedback',
      'Responses sync to attendees in real time',
      'Shareable links and embeds for your site',
    ],
  },
  {
    id: 'collab',
    label: 'Collaboration',
    icon: 'team',
    title: 'Bring your event team together',
    text: 'Staff, clients, contractors and vendors work from the same plan, with communication kept next to the work.',
    points: [
      'Role-based access for clients and vendors',
      'Comments and mentions on any task or item',
      'Shared files everyone can find',
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'chart',
    title: 'Know what worked',
    text: 'Report on registrations, attendance, spend and feedback, and compare events side by side.',
    points: [
      'Registration and attendance trends',
      'Spend by category against budget',
      'Feedback scores from post-event surveys',
    ],
  },
]

/** Modules that work most closely with each other: drives the "pairs well with" blocks. */
export const MODULE_RELATED: Record<ModuleId, ModuleId[]> = {
  planning: ['budget', 'tasks', 'vendors'],
  budget: ['vendors', 'tasks', 'analytics'],
  tasks: ['timeline', 'collab', 'planning'],
  timeline: ['tasks', 'collab', 'guests'],
  guests: ['registration', 'analytics', 'collab'],
  vendors: ['budget', 'tasks', 'collab'],
  registration: ['guests', 'analytics', 'collab'],
  collab: ['tasks', 'timeline', 'vendors'],
  analytics: ['budget', 'guests', 'registration'],
}

/** The tools each audience leans on most. */
export const SOLUTION_MODULES: Record<SolutionId, ModuleId[]> = {
  corporate: ['planning', 'budget', 'analytics', 'collab'],
  planners: ['tasks', 'vendors', 'timeline', 'planning'],
  agencies: ['collab', 'analytics', 'tasks', 'budget'],
  conferences: ['registration', 'timeline', 'guests', 'analytics'],
  exhibitions: ['vendors', 'guests', 'timeline', 'registration'],
}

/* ---------- Lifecycle ---------- */
export interface LifecycleStage {
  title: string
  summary: string
  description: string
  tools: string[]
}

export const STAGES: LifecycleStage[] = [
  {
    title: 'Discover & Plan',
    summary: 'Set goals, budget and timeline',
    description: 'Start from a template, set your goals and budget, and build the timeline your whole team works to.',
    tools: ['Event templates', 'Budget calculator', 'Timeline', 'Mood boards'],
  },
  {
    title: 'Organize',
    summary: 'Tasks, vendors and logistics',
    description: 'Assign tasks, book vendors and track contracts and payments while the budget updates itself.',
    tools: ['Tasks & to-dos', 'Vendor directory', 'Contracts', 'Collaboration'],
  },
  {
    title: 'Promote & Register',
    summary: 'Invite, register, confirm',
    description: 'Publish branded registration and RSVP forms, send invitations and watch your guest list fill in real time.',
    tools: ['Registration forms', 'RSVP tracking', 'Attendee lists', 'Communication tools'],
  },
  {
    title: 'Execute',
    summary: 'Run event day smoothly',
    description: 'Share a minute-by-minute run of show, check guests in and push last-minute changes to the whole crew.',
    tools: ['Day-of itinerary', 'Check-in', 'Live updates', 'Mobile access'],
  },
  {
    title: 'Measure',
    summary: 'Report, learn, repeat',
    description: 'Close out the budget, collect feedback and compare results with past events to plan the next one better.',
    tools: ['Feedback surveys', 'Spend reports', 'Attendance analytics', 'Event comparisons'],
  },
]

/* ---------- AI assistant ---------- */
export interface AiCapability {
  title: string
  description: string
  icon: IconName
  prompt: string
  /** [label, html-free text segments] — `bold` marks the emphasised parts. */
  replies: { label: string; parts: { text: string; bold?: boolean }[] }[]
}

const t = (text: string) => ({ text })
const b = (text: string) => ({ text, bold: true })

export const AI_CAPABILITIES: AiCapability[] = [
  {
    title: 'Smart task suggestions',
    description: 'Generates a starter task list and timeline from your event type, date and size.',
    icon: 'task',
    prompt: 'Build a task plan for a 1,000-person partner summit on March 18.',
    replies: [
      { label: 'Plan', parts: [b('164 tasks'), t(' across 9 workstreams, with owners suggested from past events')] },
      { label: 'Timeline', parts: [t('Venue locked by '), b('Nov 30'), t(', speakers by '), b('Jan 15'), t(', registration opens '), b('Jan 20')] },
      { label: 'Risk', parts: [t('Catering headcount is due 3 days before badge printing; consider swapping')] },
    ],
  },
  {
    title: 'Budget insights',
    description: 'Spots overruns early and recommends where to rebalance spend.',
    icon: 'budget',
    prompt: 'Are we on track with the budget?',
    replies: [
      { label: 'Alert', parts: [t('Catering is '), b('8% over'), t(' estimate after the menu upgrade')] },
      { label: 'Option', parts: [t('Décor is $6.6k under; moving '), b('$3.2k'), t(' covers the gap')] },
      { label: 'Forecast', parts: [t('Projected final spend: '), b('$291k'), t(' of $300k')] },
    ],
  },
  {
    title: 'Automated workflows',
    description: 'Sends reminders, updates RSVPs and nudges owners so nothing slips.',
    icon: 'bolt',
    prompt: 'What did automations handle this week?',
    replies: [
      { label: 'Reminders', parts: [t('Sent '), b('23'), t(' deadline reminders to task owners')] },
      { label: 'RSVPs', parts: [t('Synced '), b('342'), t(' registrations into the guest list')] },
      { label: 'Vendors', parts: [t('Flagged SoundStage AV deposit due '), b('Feb 1')] },
    ],
  },
  {
    title: 'Drafts and summaries',
    description: 'Drafts guest emails and summarizes feedback in seconds.',
    icon: 'team',
    prompt: 'Summarize post-event feedback from the gala.',
    replies: [
      { label: 'Score', parts: [t('Average rating '), b('4.7/5'), t(' from 286 responses')] },
      { label: 'Praise', parts: [t('Guests highlighted the venue and the auction pacing')] },
      { label: 'Fix next time', parts: [t('Coat check queues at arrival; add a second station')] },
    ],
  },
]

/* ---------- Solutions ---------- */
export interface Solution {
  id: SolutionId
  title: string
  icon: IconName
  headline: string
  text: string
  points: string[]
  quote: [string, string]
  stats: [IconName, string, string][]
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'corporate',
    title: 'Corporate Event Teams',
    icon: 'building',
    headline: 'Run every internal and external event to one standard.',
    text: 'Give your events team a single system for summits, offsites, launches and partner events, with the visibility leadership asks for.',
    points: [
      'Portfolio view across every event and region',
      'Budget controls and approval-ready reports',
      'Templates that keep every event on brand',
    ],
    quote: ['For corporate teams', 'Consolidate budgets, vendors and attendee data that used to live in separate spreadsheets.'],
    stats: [
      ['chart', 'Portfolio reporting', 'Spend and attendance across events'],
      ['shield', 'Role-based access', 'Share with stakeholders safely'],
    ],
  },
  {
    id: 'planners',
    title: 'Professional Planners',
    icon: 'plan',
    headline: 'Manage many client events without losing track of one.',
    text: "Keep each client's budget, vendors, timeline and guest list separate but easy to switch between.",
    points: [
      'Client-facing views with controlled access',
      'Reusable checklists and vendor lists',
      'Day-of itineraries shared with your crew',
    ],
    quote: ['For independent planners', 'Spend your time on the creative work instead of rebuilding the same spreadsheets.'],
    stats: [
      ['task', 'Reusable checklists', 'Start each event 80% done'],
      ['vendor', 'Vendor directory', 'Your trusted suppliers, saved'],
    ],
  },
  {
    id: 'agencies',
    title: 'Event Agencies',
    icon: 'team',
    headline: 'One workspace for your staff, clients and suppliers.',
    text: 'Coordinate multiple teams and accounts with shared workspaces, permissions and a clear view of workload.',
    points: [
      'Workspaces per client account',
      'Team workload and task ownership',
      'Professional reports to send clients',
    ],
    quote: ['For agencies', 'Show clients live progress without another status meeting.'],
    stats: [
      ['team', 'Multi-team collaboration', 'Staff, clients and vendors'],
      ['chart', 'Client reports', 'Budgets and results in one click'],
    ],
  },
  {
    id: 'conferences',
    title: 'Conferences',
    icon: 'stage',
    headline: 'Sessions, speakers and thousands of attendees, organized.',
    text: 'Handle registration, agendas, speakers and logistics for multi-day conferences in one connected plan.',
    points: [
      'Registration forms with session selection',
      'Speaker and session management',
      'Run of show for every room and day',
    ],
    quote: ['For conference hosts', 'Registration data flows straight into badges, catering counts and room planning.'],
    stats: [
      ['form', 'Registration', 'Branded forms, no code'],
      ['time', 'Multi-track agendas', 'Every room, every day'],
    ],
  },
  {
    id: 'exhibitions',
    title: 'Exhibitions & Expos',
    icon: 'booth',
    headline: 'Coordinate exhibitors, booths and floor logistics.',
    text: 'Track exhibitors, booth assignments, deliverables and deadlines alongside visitor registration.',
    points: [
      'Exhibitor lists with deliverable tracking',
      'Booth and floor assignments',
      'Visitor registration and check-in',
    ],
    quote: ['For exhibition organizers', 'Keep exhibitor deadlines and floor logistics on one timeline.'],
    stats: [
      ['booth', 'Booth management', 'Assignments and status'],
      ['vendor', 'Exhibitor portal', 'Deliverables and documents'],
    ],
  },
]

/* ---------- Connected hub ---------- */
export interface HubNode {
  key: HubKey
  label: string
  icon: IconName
  /** Position as a percentage of the hub canvas. */
  x: number
  y: number
  initial: string
}

export const HUB_NODES: HubNode[] = [
  { key: 'budget', label: 'Budgets', icon: 'budget', x: 12, y: 15.2, initial: '$186.4k spent' },
  { key: 'tasks', label: 'Tasks', icon: 'task', x: 12, y: 39.1, initial: '128 of 164 done' },
  { key: 'timeline', label: 'Run of show', icon: 'time', x: 12, y: 63, initial: '42 days to go' },
  { key: 'vendors', label: 'Vendors', icon: 'vendor', x: 12, y: 87, initial: '14 booked' },
  { key: 'guests', label: 'Guest list', icon: 'guest', x: 88, y: 15.2, initial: '612 confirmed' },
  { key: 'registration', label: 'Registration', icon: 'form', x: 88, y: 39.1, initial: '842 registered' },
  { key: 'collab', label: 'Collaboration', icon: 'team', x: 88, y: 63, initial: '5 collaborators' },
  { key: 'analytics', label: 'Analytics', icon: 'chart', x: 88, y: 87, initial: 'Report ready' },
]

/* ---------- Customers ---------- */
export const BENEFITS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'time', title: 'Hours back every week', text: 'Stop re-typing updates across spreadsheets and email. Change it once and every view stays current.' },
  { icon: 'budget', title: 'Budgets you can trust', text: 'Track estimates, actuals and vendor payments live, so overspend shows up while there is still time to act.' },
  { icon: 'team', title: 'One team, one plan', text: "Give staff, clients and vendors the access they need, without exposing what they don't." },
  { icon: 'form', title: 'Professional guest experience', text: 'Beautiful RSVP, registration and feedback forms that need no coding and get more responses.' },
  { icon: 'bolt', title: 'Up and running fast', text: 'Start from templates, and get free setup help and data migration from our team.' },
  { icon: 'plug', title: 'Works with your stack', text: 'Connect forms, CRMs and the rest of your tools through Zapier, with no code required.' },
]

/* ---------- FAQ ---------- */
export const FAQS: { q: string; a: string }[] = [
  {
    q: 'How does the 60-day free trial work?',
    a: 'Sign up and get every feature for 60 days with no credit card. At the end of the trial you choose a plan, or your account stays available to export your data.',
  },
  {
    q: 'Can I upgrade or downgrade my plan anytime?',
    a: 'Yes. You can upgrade or downgrade your plan at any time, and changes apply from your next billing cycle.',
  },
  {
    q: 'Will you help me move my existing events over?',
    a: "Yes. Setup and data migration assistance are free. Send us your spreadsheets and we'll help bring guests, vendors and budgets into Event Plan On.",
  },
  {
    q: 'Can clients and vendors collaborate in my workspace?',
    a: 'Yes. Invite staff, clients, contractors and vendors and choose what each person can see and edit, so everyone works from the same plan.',
  },
  {
    q: 'Does Event Plan On integrate with my other tools?',
    a: 'Event Plan On connects to thousands of apps through Zapier, including form builders, CRMs and email tools, without writing code.',
  },
  {
    q: 'What kinds of events can I manage?',
    a: 'Corporate events, conferences, exhibitions, galas, fundraisers, weddings and more. Templates help you start each type quickly.',
  },
]

/* ---------- Footer ---------- */
export interface FooterLink {
  label: string
  href: string
  route?: import('@/types').RouteKey
  solution?: SolutionId
}

export const FOOTER_COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Event Planning', href: '#platform' },
      { label: 'Budget Calculator', href: '#platform' },
      { label: 'Attendee Management', href: '#platform' },
      { label: 'Forms & Surveys', href: '#platform' },
      { label: 'AI Assistant', href: '#ai' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Corporate Events', href: '#solutions', solution: 'corporate' },
      { label: 'Event Planners', href: '#solutions', solution: 'planners' },
      { label: 'Agencies', href: '#solutions', solution: 'agencies' },
      { label: 'Conferences', href: '#solutions', solution: 'conferences' },
      { label: 'Non-Profits', href: '#solutions' },
      { label: 'Wedding Planners', href: '#solutions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#resources' },
      { label: 'Guides', href: '#resources' },
      { label: 'Live Demos', href: '#', route: 'demo' },
      { label: 'Help Center', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Pricing', href: '#', route: 'pricing' },
      { label: 'One-on-One Demo', href: '#', route: 'demo' },
      { label: 'Contact', href: '#faq' },
      { label: 'Log in', href: '#', route: 'login' },
    ],
  },
]
