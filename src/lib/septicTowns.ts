/**
 * Septic town pages (/septic-service/[slug]).
 *
 * Job volume, tank sizes and common work come from Plumb-All's Jobber
 * septic invoices, Nov 2018 – Nov 2026 (pulled 2026-11-03). Keep claims to
 * what the invoices show. Job volume is "Hundreds" or "Dozens", not exact counts.
 */

export type SepticTown = {
  slug: string;
  name: string;
  county: string;
  zips: string[];
  /** One-line summary for the hero */
  tagline: string;
  /** Meta description, under ~155 characters */
  metaDescription: string;
  intro: string[];
  /** "Hundreds" or "Dozens" of septic jobs in town */
  jobVolume: 'Hundreds' | 'Dozens';
  /** What shows up most on our invoices in this town */
  commonWork: string[];
  tankNote: string;
  localNote: string;
  faqs: { question: string; answer: string }[];
  nearby: string[];
  /** Job photo slugs from jobPhotos.ts; photos from other towns are captioned with their own town */
  photos: string[];
};

const permitAnswer = (county: string) =>
  `${county} County Environmental Health, part of the Georgia Department of Public Health, issues permits for new septic systems and major repairs such as drain field replacement. We'll tell you up front if your repair needs one, and we can pull it for you.`;

export const septicTowns: SepticTown[] = [
  {
    slug: 'jonesboro-ga',
    name: 'Jonesboro',
    county: 'Clayton',
    zips: ['30236', '30238'],
    tagline: 'Pumping, repairs and inspections from the septic team based right here in Jonesboro.',
    metaDescription: 'Septic tank pumping, repair and inspections in Jonesboro, GA, from the septic team based in Jonesboro. Usually there within 24 hours. Free estimates.',
    intro: [
      'Plumb-All is based in Jonesboro, and more of our septic work happens here than anywhere else. Many homes in and around Jonesboro, especially on larger lots outside the city center, are on septic rather than county sewer.',
      'Whether your tank is due for pumping, a drain is backing up, or you are buying a home with a septic system, our technicians know the systems in this area and can usually get to you within 24 hours.',
    ],
    jobVolume: 'Hundreds',
    commonWork: [
      'Drain field diagnosis and repair',
      'Inlet and outlet baffle replacement',
      'Septic tank pumping',
      'Line repairs and jetting between the house and the tank',
      'Access risers, so the lid is at ground level',
    ],
    tankNote: 'Most Jonesboro tanks we pump hold 1,000 gallons. About one in five is a 1,500-gallon tank.',
    localNote: 'Many Jonesboro tanks were buried with no riser, so the lid has to be located and dug up before every service. We add a lot of risers here, which puts the lid at ground level and makes the next pumping quicker.',
    faqs: [
      {
        question: 'Do you serve all of Jonesboro?',
        answer: 'Yes. We serve all of Jonesboro, including the 30236 and 30238 ZIP codes, plus nearby Riverdale, Morrow, Rex and Ellenwood.',
      },
      {
        question: 'Who issues septic permits in Jonesboro?',
        answer: permitAnswer('Clayton'),
      },
      {
        question: "I don't know where my septic tank is. Can you find it?",
        answer: 'Yes. Many older Jonesboro tanks are buried with no riser. We locate the tank, dig up the lid, and can add a riser so the next service is quicker and cheaper.',
      },
    ],
    nearby: ['ellenwood-ga', 'stockbridge-ga', 'hampton-ga', 'fayetteville-ga'],
    photos: [
      'septic-pumping-technician-jonesboro',
      'septic-tank-scum-layer-jonesboro',
      'septic-broken-baffle-jonesboro',
      'septic-tank-new-baffle-jonesboro',
      'septic-line-repair-jonesboro-1',
      'septic-effluent-filter-cleaning-jonesboro',
    ],
  },
  {
    slug: 'fayetteville-ga',
    name: 'Fayetteville',
    county: 'Fayette',
    zips: ['30214', '30215'],
    tagline: 'Septic pumping, drain field repair and Eljen systems across Fayetteville and Fayette County.',
    metaDescription: 'Septic pumping, drain field repair, inspections and Eljen systems in Fayetteville, GA. Usually there within 24 hours. Free estimates, licensed & insured.',
    intro: [
      'A large share of Fayetteville homes, particularly on the wooded lots outside downtown, rely on a septic system. We have been servicing them for years, from routine pumping to full drain field replacements.',
      'Fayetteville is also where we do the most Eljen work. Eljen drain fields are an alternative for lots where a conventional drain field won\'t fit or the soil drains poorly.',
    ],
    jobVolume: 'Dozens',
    commonWork: [
      'Septic inspections, including for home sales',
      'Drain field diagnosis and repair',
      'Septic tank pumping',
      'Baffle replacement',
      'Distribution box repair and Eljen drain field installs',
    ],
    tankNote: 'Most Fayetteville tanks we service are 1,000 gallons, and about one in five is 1,500 gallons.',
    localNote: 'Inspections make up a big part of our Fayetteville work. If you are buying or selling a home on septic, an inspection before closing can catch a failing drain field before it becomes your problem.',
    faqs: [
      {
        question: 'Do you serve all of Fayetteville?',
        answer: 'Yes. We serve Fayetteville (30214 and 30215) and the rest of Fayette County, including Tyrone and Peachtree City.',
      },
      {
        question: 'Who issues septic permits in Fayetteville?',
        answer: permitAnswer('Fayette'),
      },
      {
        question: 'Can you put in an Eljen system in Fayetteville?',
        answer: 'Yes. We design and install Eljen drain fields, which fit in a smaller area than a conventional drain field. They are often the answer when a lot is too small or the soil drains poorly.',
      },
    ],
    nearby: ['jonesboro-ga', 'hampton-ga', 'stockbridge-ga'],
    photos: [
      'sewer-camera-inspection-2',
      'septic-tank-outlet-baffle-jonesboro',
      'septic-outlet-line-gravel-hampton-1',
      'septic-risers-mcdonough',
    ],
  },
  {
    slug: 'ellenwood-ga',
    name: 'Ellenwood',
    county: 'Clayton, DeKalb and Henry',
    zips: ['30294'],
    tagline: 'Septic pumping, baffle and drain field repair across the 30294 ZIP code.',
    metaDescription: 'Septic tank pumping, baffle replacement and drain field repair in Ellenwood, GA. Usually there within 24 hours. Free estimates, licensed & insured.',
    intro: [
      'Ellenwood sits where Clayton, DeKalb and Henry counties meet, and many of its homes are on septic. It is one of the areas we work in most, just a short drive from our Jonesboro shop.',
      'We handle everything from a routine pump-out to tracking down why sewage is backing up into the house.',
    ],
    jobVolume: 'Dozens',
    commonWork: [
      'Inlet and outlet baffle replacement',
      'Septic tank pumping',
      'Drain field diagnosis and repair',
      'Jetting clogged lines between the house and the tank',
    ],
    tankNote: 'Nearly every Ellenwood tank we have pumped is a 1,000-gallon tank.',
    localNote: 'Broken or missing baffles are the most common problem we find in Ellenwood tanks. A failed baffle lets solids flow out to the drain field, so we check them on every pumping.',
    faqs: [
      {
        question: 'Do you serve all of Ellenwood?',
        answer: 'Yes. We serve the whole 30294 ZIP code, whether your home is in the Clayton, DeKalb or Henry County part of Ellenwood.',
      },
      {
        question: 'Who issues septic permits in Ellenwood?',
        answer: 'It depends on which county your home is in. Clayton, DeKalb and Henry County each have an Environmental Health office, part of the Georgia Department of Public Health, that issues permits for new systems and major repairs. We\'ll tell you up front if your repair needs one, and we can pull it for you.',
      },
      {
        question: 'What does a septic baffle do?',
        answer: 'Baffles are the tees at the inlet and outlet of the tank. They keep scum and solids inside the tank so only liquid flows to the drain field. When one breaks, solids can clog the drain field, which is far more expensive to fix than the baffle.',
      },
    ],
    nearby: ['jonesboro-ga', 'stockbridge-ga', 'mcdonough-ga'],
    photos: [
      'septic-broken-baffle-jonesboro',
      'septic-outlet-baffle-replaced-hampton',
      'septic-pumping-technician-jonesboro',
      'septic-line-red-clay-jonesboro',
    ],
  },
  {
    slug: 'hampton-ga',
    name: 'Hampton',
    county: 'Henry',
    zips: ['30228'],
    tagline: 'Septic inspections, pumping and drain field repair in Hampton and southern Henry County.',
    metaDescription: 'Septic inspections, pumping and drain field repair in Hampton, GA and southern Henry County. Usually there within 24 hours. Free estimates.',
    intro: [
      'Hampton and the surrounding parts of southern Henry County are largely rural, and most homes outside the city limits depend on a septic system.',
      'We inspect, pump and repair septic systems throughout Hampton, and we can tell you whether a slow drain is a tank that needs pumping or a drain field that needs attention.',
    ],
    jobVolume: 'Dozens',
    commonWork: [
      'Septic inspections',
      'Drain field diagnosis and repair',
      'Baffle replacement',
      'Septic tank pumping',
    ],
    tankNote: 'Most Hampton tanks we pump are 1,000 gallons, and about one in four is 1,500 gallons.',
    localNote: 'On bigger rural lots, tanks and drain fields are often farther from the house and harder to find. We locate the system before we dig, so your yard isn\'t torn up looking for it.',
    faqs: [
      {
        question: 'Do you serve all of Hampton?',
        answer: 'Yes. We serve Hampton (30228) and the surrounding area, including Locust Grove and McDonough.',
      },
      {
        question: 'Who issues septic permits in Hampton?',
        answer: permitAnswer('Henry'),
      },
      {
        question: 'How often should a septic tank in Hampton be pumped?',
        answer: 'Most households should pump every 3 to 5 years. A larger family, a garbage disposal, or a smaller tank means pumping sooner.',
      },
    ],
    nearby: ['mcdonough-ga', 'stockbridge-ga', 'jonesboro-ga', 'fayetteville-ga'],
    photos: [
      'septic-root-intrusion-hampton',
      'septic-tank-trench-hampton',
      'septic-outlet-baffle-replaced-hampton',
      'septic-outlet-line-gravel-hampton-1',
      'septic-inlet-tee-hampton-1',
      'sewer-camera-inspection-3',
    ],
  },
  {
    slug: 'stockbridge-ga',
    name: 'Stockbridge',
    county: 'Henry',
    zips: ['30281'],
    tagline: 'Septic drain field repair, pumping and baffle replacement in Stockbridge.',
    metaDescription: 'Septic drain field repair, baffle replacement and tank pumping in Stockbridge, GA. Usually there within 24 hours. Free estimates, licensed & insured.',
    intro: [
      'Stockbridge has a mix of homes on county sewer and homes on septic, and if you are on septic, it needs regular care to keep working.',
      'Drain field problems are the most common septic call we get in Stockbridge. We find the cause, whether it is a full tank, a broken baffle, or a field that has failed, and quote the fix before we start.',
    ],
    jobVolume: 'Dozens',
    commonWork: [
      'Drain field diagnosis and repair',
      'Baffle replacement',
      'Septic inspections',
      'Septic tank pumping',
    ],
    tankNote: 'Nearly every Stockbridge tank we have pumped is a 1,000-gallon tank.',
    localNote: 'Soggy spots or bright green grass over the drain field are an early warning. Catching a drain field problem early often means a spot repair instead of a full replacement.',
    faqs: [
      {
        question: 'Do you serve all of Stockbridge?',
        answer: 'Yes. We serve Stockbridge (30281) and nearby Ellenwood, Rex and McDonough.',
      },
      {
        question: 'Who issues septic permits in Stockbridge?',
        answer: permitAnswer('Henry'),
      },
      {
        question: 'Can a failing drain field be repaired, or does it need replacing?',
        answer: 'It depends on the cause. A crushed line or a clogged section can often be repaired in place. A field that is saturated end to end usually needs replacing. We diagnose it first so you only pay for what the system needs.',
      },
    ],
    nearby: ['ellenwood-ga', 'mcdonough-ga', 'jonesboro-ga', 'hampton-ga'],
    photos: [
      'septic-pump-line-repair-stockbridge-1',
      'septic-pump-line-repair-stockbridge-2',
      'septic-pump-line-repair-stockbridge-3',
      'septic-tank-trench-hampton',
    ],
  },
  {
    slug: 'mcdonough-ga',
    name: 'McDonough',
    county: 'Henry',
    zips: ['30252', '30253'],
    tagline: 'Septic service in McDonough and Henry County: drain fields, inspections and pumping.',
    metaDescription: 'Septic tank pumping, drain field repair and risers in McDonough, GA and Henry County. Usually there within 24 hours. Free estimates, licensed & insured.',
    intro: [
      'McDonough is the Henry County seat, and many homes in and around it, especially outside the city center, are on septic.',
      'Most of our McDonough septic calls involve the drain field: slow drains, wet spots in the yard, or a system that backs up after heavy rain. We also inspect and pump tanks on a regular schedule.',
    ],
    jobVolume: 'Dozens',
    commonWork: [
      'Drain field diagnosis and repair',
      'Septic inspections',
      'Septic tank pumping',
      'Baffle replacement',
    ],
    tankNote: 'Most McDonough tanks we service are 1,000 gallons, with some 1,500-gallon tanks.',
    localNote: 'A system that backs up after heavy rain often has a drain field that is near the end of its life. If that sounds familiar, have it checked before it fails completely.',
    faqs: [
      {
        question: 'Do you serve all of McDonough?',
        answer: 'Yes. We serve McDonough (30252 and 30253) and nearby Hampton, Locust Grove and Stockbridge.',
      },
      {
        question: 'Who issues septic permits in McDonough?',
        answer: permitAnswer('Henry'),
      },
      {
        question: 'Why does my septic back up after it rains?',
        answer: 'When the soil around the drain field is already saturated, the field cannot absorb more water, so it backs up toward the house. It can point to a field that is clogged or undersized. We can check it and tell you whether it needs a repair or a replacement.',
      },
    ],
    nearby: ['stockbridge-ga', 'hampton-ga', 'ellenwood-ga'],
    photos: [
      'septic-risers-mcdonough',
      'septic-riser-install-mcdonough-2',
      'septic-pump-chamber-mcdonough',
      'septic-pump-replacement-mcdonough',
      'septic-pumping-mcdonough-2',
      'septic-excavation-mcdonough',
    ],
  },
];

export function getSepticTown(slug: string): SepticTown | undefined {
  return septicTowns.find((town) => town.slug === slug);
}
