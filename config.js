// Phone-to-Ship landing page — single source of truth.
// To update the page for a new version: edit the values below, commit,
// push. Nothing else needs to change. Price, links, version, changelog
// all live here.
const PTS = {
  name: "Phone-to-Ship",
  tagline: "Brief it on your phone. Ship a tested web app from your phone.",
  version: "3.1.0",
  releaseDate: "2026-11-05",
  price: 25,
  currency: "USD",
  priceLabel: "$25 one-time",
  // Set these when the destinations exist. An empty string hides the button.
  stripePaymentLink: "https://buy.stripe.com/dRm28rbjx3VbeyR3Kj2wU00",   // Stripe $25 one-time payment link, live 2026-11-05
  itchUrl: "",             // itch.io product page (set after listing is live)
  githubUrl: "https://github.com/joshoshfield-a11y/phone-to-ship",
  supportEmail: "dogsbarkdogsbyte@gmail.com",
  // Verified build facts for this version (update on each release).
  zipBytes: 84166,
  zipSha256: "58d86391c99d144685edc7c11ff985ecc9ce3e44241bb3b3135a66208f994f81",
  selfTest: "25/25",
  features: [
    "Brief to shipped package: write a short brief, get a plan, build, test, diagnose, repair, package — with an approval stop before anything ships.",
    "Honest diagnosis: missing files, leaked files, JS syntax errors, empty trees — named plainly, with the exact file.",
    "Safe repairs only: the one automatic repair quarantines leaked files. It never deletes, never fabricates, never edits your code.",
    "Doctor, snapshots, and logs: pts doctor checks your setup, pts snapshot/restore guards your work with hash verification, every run is logged.",
    "Termux-safe by check, not by claim: packaging checks prove the build installs cleanly under Termux. A real-phone run is still your verdict.",
    "Offline and stdlib-only: no network calls, no accounts, no telemetry."
  ],
  whatsNew: [
    "Termux packaging checks (8 checks, all passing)",
    "Guarded installer: backup before replace, rollback on failure, clean uninstall",
    "pts doctor, pts snapshot/restore, pts config, per-run logs",
    "CI gate: the package refuses to build when the suite fails"
  ],
  changelog: [
    { version: "3.1.0", date: "2026-11-05", notes: "Production hardening: Termux checks, guarded installer, doctor, snapshots, config, logging, CI gate. 25/25 self-test." },
    { version: "3.0.0", date: "2026-11-04", notes: "Merged product line: guarded install, doctor, secret scan." },
    { version: "1.2.0", date: "2026-11-04", notes: "Orchestration engine: brief, plan, build, test, diagnose, repair, package, approval stop." },
    { version: "1.1.0", date: "2026-11-04", notes: "First product build: installer, templates, self-test." }
  ]
};
