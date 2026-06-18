// ---------------------------------------------------------------------------
// Treatment catalogue - single source for /treatments, division hubs,
// individual treatment pages, the home bento, the gallery filter and the
// Treatment Discovery Quiz.
//
// PRICING NOTE: DermaMedics' own confirmed prices were not harvestable. Where a
// figure appears it is an INDICATIVE Metro-Manila market range, clearly framed
// as "confirmed at your free consultation" - never presented as an exact
// DermaMedics rate. `priceRange` is intentionally a soft band, not a quote.
// ---------------------------------------------------------------------------

export interface Treatment {
  slug: string;
  name: string;
  korean?: boolean;
  tagline: string;
  summary: string;
  detail: string;
  goodFor: string[];
  sessions: string;
  downtime: string;
  priceFrom?: number; // indicative market floor, PHP - soft band only
  priceNote?: string;
  // quiz matching
  concerns: Concern[];
}

export interface Division {
  slug: string;
  number: string;
  name: string;
  tag: string;
  glyph: string; // editorial number/symbol, never a Lucide default
  blurb: string;
  intro: string;
  treatments: Treatment[];
}

export type Concern =
  | "skin-texture"
  | "pigmentation"
  | "body-slimming"
  | "anti-ageing"
  | "acne"
  | "wellness"
  | "tattoo";

export const concernLabels: Record<Concern, string> = {
  "skin-texture": "Skin texture & glow",
  pigmentation: "Pigmentation & dark spots",
  "body-slimming": "Body slimming & contouring",
  "anti-ageing": "Anti-ageing & tightening",
  acne: "Acne & scarring",
  wellness: "Wellness & IV drips",
  tattoo: "Tattoo removal",
};

export const divisions: Division[] = [
  {
    slug: "aesthetic-medicine",
    number: "01",
    name: "Aesthetic Medicine",
    tag: "Doctor-led",
    glyph: "✦",
    blurb: "Korean fillers, Botox, threads and PRP - all administered by a doctor.",
    intro:
      "The doctor-led core of DermaMedics. Injectables and minor procedures are performed by a physician, with a conservative hand and a face-first eye for balance - never overfilled, never frozen.",
    treatments: [
      {
        slug: "korean-fillers",
        name: "Korean Fillers",
        korean: true,
        tagline: "Soft volume, natural contour",
        summary: "Cross-linked hyaluronic-acid fillers (Korean brands such as Neuramis and Yvoire) to restore volume and refine the lip, cheek, chin and jaw.",
        detail:
          "Korean dermal fillers are cross-linked hyaluronic-acid (HA) gels used to restore volume and contour. Brands such as Neuramis (Medytox) and Yvoire (LG Chem) are favoured for their soft, natural integration. Because they are HA-based, results are temporary and reversible - they can be dissolved if you ever change your mind. Our doctors layer conservatively for a result that looks like you, rested.",
        goodFor: ["Lip enhancement", "Cheek & midface volume", "Chin & jaw definition", "Smile lines"],
        sessions: "Single session · top-up at 9–12 months",
        downtime: "Minimal · mild swelling 1–2 days",
        priceFrom: 14999,
        priceNote: "per syringe, indicative",
        concerns: ["anti-ageing", "skin-texture"],
      },
      {
        slug: "jawtox",
        name: "Jawtox - Masseter Botox",
        tagline: "A slimmer, softer lower face",
        summary: "Botulinum toxin into the masseter muscles to slim the jawline and ease clenching and grinding.",
        detail:
          "Jawtox places botulinum toxin into the masseter (chewing) muscles to relax them. Over a few weeks the muscle softens, slimming the lower face into a smoother V-line - and, for many patients, relieving teeth-grinding (bruxism) and jaw tension at the same time. A doctor-administered, walk-in-walk-out treatment.",
        goodFor: ["Square / wide jaw", "Teeth grinding", "Jaw tension", "V-line slimming"],
        sessions: "Single session · review at 3–4 months",
        downtime: "None",
        priceFrom: 12000,
        priceNote: "indicative, per area",
        concerns: ["anti-ageing", "body-slimming"],
      },
      {
        slug: "traptox",
        name: "Traptox - Trapezius Botox",
        tagline: "A longer neckline, less tension",
        summary: "Botulinum toxin into the trapezius to soften an overactive 'trap', giving a slimmer shoulder line and tension relief.",
        detail:
          "Traptox relaxes an enlarged or overactive trapezius muscle with botulinum toxin. The result is a longer, more elegant neck-to-shoulder line and noticeable relief from the tension many desk-bound professionals carry. Increasingly requested alongside posture and slimming goals.",
        goodFor: ["Bulky shoulders", "Neck & shoulder tension", "Posture line", "Shoulder slimming"],
        sessions: "Single session · review at 3–4 months",
        downtime: "None",
        concerns: ["body-slimming", "anti-ageing"],
      },
      {
        slug: "crows-feet-botox",
        name: "Crow's Feet & Expression Botox",
        tagline: "Smoother, not frozen",
        summary: "Targeted neuromodulator for crow's feet, forehead lines and frown lines - softened, never frozen.",
        detail:
          "Botulinum toxin relaxes the small muscles that crease the skin around the eyes, forehead and brows. Dosed conservatively by a doctor, the goal is a smoother, well-rested look that still moves and expresses - softening dynamic lines without the over-done, frozen result.",
        goodFor: ["Crow's feet", "Forehead lines", "Frown / glabellar lines", "Prevention"],
        sessions: "Single session · review at 3–4 months",
        downtime: "None",
        priceFrom: 8000,
        priceNote: "indicative, per area",
        concerns: ["anti-ageing"],
      },
      {
        slug: "thread-lift",
        name: "Korean PDO Thread Lift",
        korean: true,
        tagline: "A subtle lift, collagen that lasts",
        summary: "Biodegradable PDO threads reposition mild sagging and stimulate collagen - a non-surgical lift.",
        detail:
          "Minimally invasive lifting using biodegradable polydioxanone (PDO) threads placed under the skin to reposition mild sagging while stimulating your own collagen. The threads dissolve over roughly six months, leaving a collagen-supported result behind. A doctor-led middle ground between injectables and surgery.",
        goodFor: ["Mild jowls", "Cheek & midface droop", "Brow lift", "Neck definition"],
        sessions: "Single session · results build over weeks",
        downtime: "Mild · 2–4 days possible tenderness",
        concerns: ["anti-ageing"],
      },
      {
        slug: "prp-vampire-facial",
        name: "PRP - Vampire Facial",
        tagline: "Your own platelets, better skin",
        summary: "Platelet-rich plasma from your own blood, micro-needled in to boost collagen, texture and repair.",
        detail:
          "A small amount of your own blood is spun in a centrifuge to concentrate platelet-rich plasma (PRP), which is then delivered with microneedling to stimulate collagen and skin repair. Because it uses your own biology, it's a natural route to better texture, fine lines and scar softening.",
        goodFor: ["Dull, tired skin", "Fine lines", "Acne scars", "Overall renewal"],
        sessions: "Course of 3 · monthly",
        downtime: "Mild redness · 1–2 days",
        concerns: ["skin-texture", "acne", "anti-ageing"],
      },
    ],
  },
  {
    slug: "body-slimming",
    number: "02",
    name: "Body Slimming & Contouring",
    tag: "Non-invasive",
    glyph: "◗",
    blurb: "Korean Mesolipo, HIFU, fat-freezing and RF for targeted contouring.",
    intro:
      "Non-surgical contouring for the pockets that diet and exercise don't shift. Doctor-supervised, with honest expectations - these treatments refine and reduce; they are not a substitute for weight loss.",
    treatments: [
      {
        slug: "korean-mesolipo",
        name: "Korean Mesolipo",
        korean: true,
        tagline: "Targeted, injectable fat reduction",
        summary: "Injection lipolysis popularised in Korea - fat-dissolving formulas delivered into small, stubborn pockets.",
        detail:
          "Korean Mesolipo is a non-surgical, injectable fat-reduction treatment popularised in Korea. Fat-dissolving compounds are delivered directly into small, localised pockets - under the chin, abdomen, arms or thighs - and the disrupted fat is cleared naturally over the following weeks. A course of several sessions a month apart is typical. It refines stubborn areas; it is not a substitute for liposuction or weight loss. One of the treatments patients most associate with Doc Jam at our 9F branch.",
        goodFor: ["Double chin", "Abdomen", "Arms", "Thighs"],
        sessions: "Course · sessions ~4 weeks apart",
        downtime: "Mild swelling / tenderness · few days",
        concerns: ["body-slimming"],
      },
      {
        slug: "hifu-body",
        name: "HIFU Body",
        korean: true,
        tagline: "Focused ultrasound, no downtime",
        summary: "High-Intensity Focused Ultrasound to tighten and reduce on the body - non-invasive, no recovery.",
        detail:
          "HIFU (High-Intensity Focused Ultrasound) delivers focused energy into deeper tissue to stimulate collagen and tighten, with little to no downtime. On the body it's used to firm and refine areas such as the abdomen, arms and thighs. We use Korean-made platforms (the Ultraformer lineage) known for comfort and precision.",
        goodFor: ["Loose abdominal skin", "Arms", "Thighs", "Body firming"],
        sessions: "Single or short course",
        downtime: "None",
        concerns: ["body-slimming", "anti-ageing"],
      },
      {
        slug: "cryolipolysis",
        name: "Cryolipolysis - Fat Freezing",
        tagline: "Freeze the pocket, lose the bulge",
        summary: "Controlled cooling crystallises and clears fat cells in a targeted area over the following months.",
        detail:
          "Cryolipolysis uses controlled cooling to crystallise and destroy fat cells in a targeted area; the body then clears them gradually over up to six months. Results are long-lasting in the absence of weight gain. A comfortable, non-invasive option for defined, pinchable pockets.",
        goodFor: ["Love handles", "Lower abdomen", "Back / bra line", "Inner thigh"],
        sessions: "1–2 per area · results over 8–12 weeks",
        downtime: "None · temporary numbness",
        concerns: ["body-slimming"],
      },
      {
        slug: "rf-body-sculpting",
        name: "RF Body Sculpting",
        tagline: "Radiofrequency firming",
        summary: "Radiofrequency heat to firm crepey skin and refine body contours.",
        detail:
          "Radiofrequency (RF) gently heats the deeper skin to stimulate collagen, firming crepey or loose areas and smoothing contours. Often paired with other slimming treatments as the 'tightening' step once volume is reduced.",
        goodFor: ["Crepey skin", "Post-slimming firming", "Cellulite appearance", "Body smoothing"],
        sessions: "Short course · weekly",
        downtime: "None",
        concerns: ["body-slimming", "anti-ageing"],
      },
    ],
  },
  {
    slug: "anti-ageing",
    number: "03",
    name: "Anti-Ageing & Tightening",
    tag: "Collagen-led",
    glyph: "◑",
    blurb: "HIFU, Thermage FLX and PDO threads to lift and tighten without surgery.",
    intro:
      "The energy-based tightening menu - devices that work with your own collagen so the result builds quietly over weeks and looks like nothing was done, only that you look well.",
    treatments: [
      {
        slug: "hifu-face",
        name: "HIFU Face - Korean Ultraformer",
        korean: true,
        tagline: "A non-surgical lift",
        summary: "Focused ultrasound to the deeper face layers to lift the brow, jawline and neck - no downtime.",
        detail:
          "Facial HIFU on a Korean Ultraformer platform delivers focused ultrasound to the same deep layer a surgeon addresses, triggering collagen renewal for a gradual lift of the brow, cheeks, jawline and neck. A genuine middle ground for mild-to-moderate laxity - not a facelift replacement, but no surgery, no downtime.",
        goodFor: ["Early jowls", "Brow & eye area", "Neck laxity", "Overall lift"],
        sessions: "Single · results build over 8–12 weeks",
        downtime: "None",
        concerns: ["anti-ageing"],
      },
      {
        slug: "thermage-flx",
        name: "Thermage FLX",
        tagline: "Gold-standard RF tightening",
        summary: "Radiofrequency that heats the dermis to stimulate collagen across face, eyes and neck - one session, no downtime.",
        detail:
          "Thermage FLX is a radiofrequency platform regarded as a gold standard for non-invasive tightening. It heats the dermis to kick-start collagen across the face, eyes, neck and body, typically in a single comfortable session with no downtime. Results continue to improve for several months.",
        goodFor: ["Skin laxity", "Eye area", "Jawline & neck", "Body tightening"],
        sessions: "Single · annual maintenance",
        downtime: "None",
        concerns: ["anti-ageing"],
      },
      {
        slug: "pdo-thread-lift",
        name: "Korean PDO Thread Lift",
        korean: true,
        tagline: "Lift now, collagen later",
        summary: "Dissolvable PDO threads to reposition sagging and seed new collagen - a doctor-led non-surgical lift.",
        detail:
          "PDO thread lifting uses biodegradable threads to reposition mild sagging while stimulating collagen along their path. The threads dissolve over about six months, but the collagen scaffold they leave behind sustains the result. Performed by a doctor, it pairs naturally with HIFU or Thermage for a layered lift.",
        goodFor: ["Mild sagging", "Cheek & jowl lift", "Brow lift", "Neck"],
        sessions: "Single session",
        downtime: "Mild · few days",
        concerns: ["anti-ageing"],
      },
      {
        slug: "mesotherapy",
        name: "Mesotherapy & Skin Boosters",
        korean: true,
        tagline: "Korean glow, from within",
        summary: "Micro-injections of hydrating, regenerative agents for radiance and texture - the 'Korean glow'.",
        detail:
          "Skin-booster mesotherapy delivers micro-injections of hydrating and regenerative agents into the skin for radiance and texture rather than volume - the hallmark of the 'Korean glow'. Protocols are typically run as a short, spaced course for a cumulative, lit-from-within result.",
        goodFor: ["Dull skin", "Dehydration", "Fine texture", "Radiance"],
        sessions: "Course of 3 · monthly",
        downtime: "Minimal",
        concerns: ["skin-texture", "anti-ageing"],
      },
    ],
  },
  {
    slug: "skin-brightening",
    number: "04",
    name: "Skin Brightening & Pigment",
    tag: "Tone & clarity",
    glyph: "◐",
    blurb: "Dermlight, Q-switch laser, carbon peel and brightening facials for even tone.",
    intro:
      "Pigment, dark spots and uneven tone, addressed with lasers and clinical facials. We frame brightening as your choice - evenness and clarity, on your terms, never an imposed ideal.",
    treatments: [
      {
        slug: "dermlight-pigment",
        name: "Dermlight Pigment Correction",
        tagline: "Targeted pigment therapy",
        summary: "Light-based therapy to break down stubborn pigment and even out tone.",
        detail:
          "Dermlight pigment-correction therapy uses targeted light energy to break down areas of excess pigment so the body can clear them, gradually evening tone. Often planned as a course and paired with home care for a measured, lasting result.",
        goodFor: ["Sun spots", "Uneven tone", "Melasma support", "Dullness"],
        sessions: "Course · spaced",
        downtime: "Minimal",
        concerns: ["pigmentation", "skin-texture"],
      },
      {
        slug: "q-switch-laser",
        name: "Q-Switch Laser",
        tagline: "Pigment, lifted in pulses",
        summary: "Very short, high-energy laser pulses targeting pigment - sun spots, melasma support and tone.",
        detail:
          "A Q-switch laser (e.g. Nd:YAG 1064/532nm) emits very short, high-energy pulses that target pigment without heating the surrounding skin - used for sun spots, melasma support, tattoo removal and overall brightening. A versatile workhorse of pigment care.",
        goodFor: ["Sun & age spots", "Melasma support", "Overall brightening", "Pore refinement"],
        sessions: "Course · 2–4 weeks apart",
        downtime: "Minimal",
        concerns: ["pigmentation", "skin-texture"],
      },
      {
        slug: "carbon-peel",
        name: "Carbon Peel",
        tagline: "The lunchtime laser facial",
        summary: "A carbon mask plus Q-switch laser to refine pores, lift oil and brighten - zero downtime.",
        detail:
          "The carbon peel - sometimes called the 'lunchtime laser facial' - applies a liquid-carbon mask that the laser then targets: the carbon absorbs oil and debris while the laser pulse exfoliates, refines pores and stimulates collagen. Instant glow, minimal downtime.",
        goodFor: ["Oily skin", "Enlarged pores", "Dullness", "Pre-event glow"],
        sessions: "Single or short course",
        downtime: "None",
        concerns: ["skin-texture", "acne", "pigmentation"],
      },
      {
        slug: "whitening-facial",
        name: "Brightening Facials & Peels",
        tagline: "Clinical glow, clinical care",
        summary: "Doctor-planned brightening facials and chemical peels for clarity and even tone.",
        detail:
          "A menu of clinical brightening facials and chemical peels, planned to your skin rather than a one-size protocol. Peels are stepped up gradually for clarity and even tone with safety first - your skin's needs lead, not a fixed ideal.",
        goodFor: ["Uneven tone", "Texture", "Mild pigmentation", "Maintenance glow"],
        sessions: "Course · spaced",
        downtime: "Minimal · light flaking possible",
        concerns: ["pigmentation", "skin-texture"],
      },
    ],
  },
  {
    slug: "acne",
    number: "05",
    name: "Acne & Problem Skin",
    tag: "Skin health",
    glyph: "◓",
    blurb: "Anti-acne packages, clinical facials, peels and scar treatment.",
    intro:
      "Active acne and the scars it leaves, treated as a clinical problem - not a cosmetic afterthought. Structured packages that calm breakouts first, then rebuild the skin.",
    treatments: [
      {
        slug: "anti-acne-package",
        name: "Anti-Acne Package",
        tagline: "Calm the breakout, keep it calm",
        summary: "A structured course combining laser, extraction and peels to control active acne.",
        detail:
          "A doctor-planned course that combines anti-acne laser, clinical extraction and targeted peels to bring active breakouts under control and keep them there. Built as a package because acne responds to consistency, not one-off facials.",
        goodFor: ["Active acne", "Congestion", "Oily, breakout-prone skin", "Body acne"],
        sessions: "Package · multi-session",
        downtime: "Minimal",
        concerns: ["acne", "skin-texture"],
      },
      {
        slug: "acne-facial",
        name: "Acne Facial & Extraction",
        tagline: "Deep clean, done right",
        summary: "Clinical deep-cleanse and safe extraction to decongest and reset the skin.",
        detail:
          "A clinical acne facial with safe, sterile extraction to decongest pores and calm inflammation - the maintenance backbone between active treatments, done by trained hands rather than guesswork at home.",
        goodFor: ["Congestion", "Blackheads", "Mild active acne", "Maintenance"],
        sessions: "Monthly maintenance",
        downtime: "Minimal redness",
        concerns: ["acne", "skin-texture"],
      },
      {
        slug: "acne-scar-treatment",
        name: "Acne Scar Treatment",
        tagline: "Smooth what acne left behind",
        summary: "Fractional laser, microneedling and PRP to soften pitted and rolling acne scars.",
        detail:
          "Acne-scar work combines resurfacing lasers, microneedling and PRP to remodel the skin and soften pitted, rolling or boxcar scars over a planned course. Realistic, cumulative improvement - we set honest expectations from the first consultation.",
        goodFor: ["Pitted scars", "Rolling scars", "Texture", "Post-acne marks"],
        sessions: "Course · monthly",
        downtime: "Few days per session",
        concerns: ["acne", "skin-texture"],
      },
    ],
  },
  {
    slug: "iv-drips",
    number: "06",
    name: "IV Drips & Wellness",
    tag: "Doctor-supervised",
    glyph: "◇",
    blurb: "NAD+, glutathione, Myers cocktail and vitamin drips, doctor-supervised.",
    intro:
      "Doctor-supervised IV therapy for energy, hydration and antioxidant support. We keep the claims conservative and the supervision clinical - wellness, framed honestly.",
    treatments: [
      {
        slug: "nad-plus-drip",
        name: "NAD+ Drip",
        tagline: "Cellular energy support",
        summary: "Intravenous NAD+ to support cellular energy and repair - the longevity-minded drip.",
        detail:
          "An intravenous NAD+ (nicotinamide adenine dinucleotide) infusion, chosen by patients interested in cellular energy and repair support. We keep the framing factual - it is a wellness drip, not a cure - and it is always doctor-supervised.",
        goodFor: ["Low energy", "Recovery", "Longevity interest", "Wellness routine"],
        sessions: "Single or programme",
        downtime: "None",
        concerns: ["wellness"],
      },
      {
        slug: "whitening-glutathione-drip",
        name: "Glutathione Drip",
        tagline: "Antioxidant support",
        summary: "IV glutathione, the antioxidant popular in the Philippines for skin and wellness support.",
        detail:
          "An intravenous infusion of the antioxidant glutathione, long popular in the Philippines for antioxidant and skin support. We discuss realistic, conservative expectations with you first and supervise every session medically - your choice, clearly informed.",
        goodFor: ["Antioxidant support", "Skin wellness", "Maintenance", "Routine drip"],
        sessions: "Course · weekly",
        downtime: "None",
        concerns: ["wellness", "pigmentation"],
      },
      {
        slug: "myers-cocktail",
        name: "Myers' Cocktail",
        tagline: "The classic vitamin blend",
        summary: "A classic IV blend of B-complex, B12, vitamin C, magnesium and calcium for energy and wellness.",
        detail:
          "The Myers' cocktail is a long-established IV blend of B-complex, B12, vitamin C, magnesium and calcium in saline, developed by Dr. John Myers and chosen for energy, immune and general wellness support.",
        goodFor: ["Fatigue", "Immune support", "Hydration", "General wellness"],
        sessions: "As needed / programme",
        downtime: "None",
        concerns: ["wellness"],
      },
      {
        slug: "vitamin-c-drip",
        name: "Vitamin C Drip",
        tagline: "High-dose antioxidant",
        summary: "A high-dose intravenous vitamin C infusion for antioxidant and immune support.",
        detail:
          "A high-dose intravenous vitamin C infusion chosen for antioxidant and immune support, often as part of a wellness or brightening routine. Doctor-supervised, with honest framing of what it can and cannot do.",
        goodFor: ["Immune support", "Antioxidant routine", "Skin wellness", "Recovery"],
        sessions: "Course · weekly",
        downtime: "None",
        concerns: ["wellness"],
      },
      {
        slug: "hydration-drip",
        name: "Hydration Drip",
        tagline: "Reset and rehydrate",
        summary: "An electrolyte and fluid infusion to rehydrate and reset after travel, heat or fatigue.",
        detail:
          "A straightforward fluid-and-electrolyte infusion to rehydrate and reset - popular after travel, long days in Manila heat, or simply when you're running low. Quick, comfortable and doctor-supervised.",
        goodFor: ["Dehydration", "Post-travel", "Fatigue", "Quick reset"],
        sessions: "As needed",
        downtime: "None",
        concerns: ["wellness"],
      },
    ],
  },
  {
    slug: "lasers",
    number: "07",
    name: "Lasers & Resurfacing",
    tag: "Device-led",
    glyph: "◆",
    blurb: "Fractional, CO2, Pico and Q-switch lasers for texture, scars and renewal.",
    intro:
      "The resurfacing arsenal - matched to your skin and your downtime tolerance. We pick the gentlest device that will do the job, not the most aggressive.",
    treatments: [
      {
        slug: "fractional-laser",
        name: "Fractional Laser",
        tagline: "Resurface, renew, smooth",
        summary: "Fractional resurfacing to remodel texture, scars and ageing skin with controlled downtime.",
        detail:
          "Fractional laser treats the skin in microscopic columns, leaving healthy tissue between them to speed healing. It remodels texture, softens scars and renews ageing skin over a planned course, with downtime you can plan around.",
        goodFor: ["Texture", "Acne scars", "Fine lines", "Sun damage"],
        sessions: "Course · monthly",
        downtime: "Few days per session",
        concerns: ["skin-texture", "acne", "anti-ageing"],
      },
      {
        slug: "co2-laser",
        name: "CO2 Laser",
        tagline: "Deeper resurfacing",
        summary: "Ablative CO2 resurfacing for deeper scars, texture and pronounced ageing.",
        detail:
          "CO2 laser is an ablative resurfacing option for deeper concerns - pronounced scarring, texture and ageing. More downtime than fractional non-ablative work, but powerful, planned results. Suitability is assessed carefully by the doctor first.",
        goodFor: ["Deep scars", "Pronounced texture", "Ageing skin", "Sun damage"],
        sessions: "1–3 · spaced",
        downtime: "About a week",
        concerns: ["skin-texture", "anti-ageing", "acne"],
      },
      {
        slug: "pico-laser",
        name: "Pico Laser",
        tagline: "Picosecond precision",
        summary: "Ultra-fast picosecond pulses for pigment, tone and tattoo removal with less heat.",
        detail:
          "Pico laser fires in picosecond pulses - far shorter than traditional lasers - shattering pigment into finer particles with less heat to surrounding skin. Excellent for stubborn pigment, overall tone and tattoo removal, often with fewer sessions.",
        goodFor: ["Stubborn pigment", "Melasma support", "Tone & glow", "Tattoo removal"],
        sessions: "Course · spaced",
        downtime: "Minimal",
        concerns: ["pigmentation", "skin-texture", "tattoo"],
      },
      {
        slug: "stretch-mark-laser",
        name: "Stretch Mark Laser",
        tagline: "Soften and refine",
        summary: "Laser remodelling to soften the colour and texture of stretch marks.",
        detail:
          "Laser treatment remodels the skin to soften both the colour and texture of stretch marks over a course. Results are realistic and cumulative - we'll tell you honestly what to expect for your skin and the age of the marks.",
        goodFor: ["Stretch marks", "Post-pregnancy", "Texture", "Tone blending"],
        sessions: "Course · monthly",
        downtime: "Minimal",
        concerns: ["skin-texture", "body-slimming"],
      },
    ],
  },
  {
    slug: "tattoo-removal",
    number: "08",
    name: "Tattoo Removal",
    tag: "Centuria-listed specialty",
    glyph: "◈",
    blurb: "Q-switch and Pico laser tattoo removal, planned in honest multi-session packages.",
    intro:
      "Our officially listed specialty on the Centuria Medical directory. Laser tattoo removal is a journey, not an erase button - we plan it in honest, multi-session packages and tell you the realistic number up front.",
    treatments: [
      {
        slug: "laser-tattoo-removal",
        name: "Laser Tattoo Removal",
        tagline: "Fading, the right way",
        summary: "Q-switch and Pico laser removal, planned across the sessions your tattoo actually needs.",
        detail:
          "Laser tattoo removal uses Q-switch and Pico lasers to shatter ink into particles your body clears over time. The number of sessions depends on ink colour, depth, age and your skin - so we assess honestly and plan a multi-session package rather than overpromising a single visit. Listed as a DermaMedics specialty on the official Centuria Medical Makati directory.",
        goodFor: ["Unwanted tattoos", "Faded older ink", "Cover-up prep", "Cosmetic tattoo"],
        sessions: "Multi-session package · spaced 6–8 weeks",
        downtime: "Minimal per session",
        concerns: ["tattoo"],
      },
    ],
  },
];

// ---- helpers ---------------------------------------------------------------

export function allTreatments(): { division: Division; treatment: Treatment }[] {
  return divisions.flatMap((division) =>
    division.treatments.map((treatment) => ({ division, treatment }))
  );
}

export function divisionBySlug(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}

export function peso(n: number): string {
  return "₱" + n.toLocaleString("en-PH");
}
