// ---------------------------------------------------------------------------
// Social proof.
//
// HONESTY NOTE: real verbatim Google/Facebook reviews could not be retrieved
// (JS/auth-gated). We do NOT invent named reviewers. The hard proof is the
// VERIFIED AGGREGATE below. The quote cards are theme-based, attributed by
// treatment/branch (not impersonated individuals) and flagged for the client
// to replace with real, consented quotes before/after launch.
// ---------------------------------------------------------------------------

export const socialProof = {
  googleRating: "4.3",
  googleReviewCount: "115",
  facebookCommunity: "11,662",
  // shown verbatim on the site as the credible, verified figures
  caption: "4.3★ across 115 Google reviews · 11,662-strong Facebook community",
};

export interface Review {
  quote: string;
  attribution: string; // treatment/branch, not a fabricated full name
  theme: string;
  placeholder: true; // every quote here is representative, to be replaced
}

export const reviews: Review[] = [
  {
    quote:
      "Doc Jam at the 9th floor is the reason I keep coming back. My slimming package gave me real results and she never pushed anything I didn't need.",
    attribution: "Slimming package patient · 9F branch",
    theme: "Doc Jam · slimming",
    placeholder: true,
  },
  {
    quote:
      "The Korean fillers looked so natural that my friends just said I looked rested. The doctor talked me through the price before anything was done.",
    attribution: "Korean filler patient · 17F branch",
    theme: "Korean fillers · transparency",
    placeholder: true,
  },
  {
    quote:
      "I came in anxious about hidden costs like every other clinic. Here they showed me the numbers first. That alone made me trust them.",
    attribution: "First-visit patient · Main branch",
    theme: "Transparent pricing",
    placeholder: true,
  },
  {
    quote:
      "Been a patient on and off for years. Same doctors, same building, same honest advice. You feel like they actually remember you.",
    attribution: "Returning patient · since 2018",
    theme: "Heritage · loyalty",
    placeholder: true,
  },
  {
    quote:
      "Booked the NAD+ drip after a brutal work stretch. Clean clinic, doctor checked me first, and I genuinely felt better the next day.",
    attribution: "IV drip patient · 17F branch",
    theme: "IV drips · wellness",
    placeholder: true,
  },
  {
    quote:
      "Did my HIFU and Mesolipo as a plan rather than random sessions. They set honest expectations and the results showed up exactly when they said.",
    attribution: "Multi-treatment patient · 9F branch",
    theme: "Multi-treatment · honesty",
    placeholder: true,
  },
];
