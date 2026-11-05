// Phone-to-Ship landing page — single source of truth.
// To update the page for a new version: edit the values below, commit,
// push. Nothing else needs to change. Price, links, version, changelog
// all live here.
const PTS = {
  name: "Phone-to-Ship",
  tagline: "Brief it on your phone. Ship a tested web app from your phone.",
  version: "3.3.0",
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
  zipBytes: 113340,
  zipSha256: "6f792781fca0015d7a8138d950b3e7edbd402c111905c7c878f2995d269ef9d1",
  fileCount: 68,
  // What is actually inside the v3.3.0 zip (verified against the archive).
  zipContents: [
    { name: "bin/pts", desc: "The command line: orchestrate, runs, verdict, doctor, snapshot, restore, config, ai, agents." },
    { name: "install.sh + uninstall.sh", desc: "Guarded installer — backs up before replacing, rolls back on failure, clean uninstall." },
    { name: "scripts/orchestrate.py", desc: "The orchestration engine: brief, plan, build, test, diagnose, repair, package, approval stop." },
    { name: "scripts/ai/ + scripts/agents/", desc: "Muse-loop AI (prompt-out, JSON-in, safety core) and 7-role agent orchestration (persistent queue, checkpoints, bounded retries, human verdict)." },
    { name: "scripts/doctor.py, snapshot.py, config.py, termux-check.py, ship-check.py", desc: "Setup checks, hash-verified snapshots and restores, per-tree config, Termux packaging checks, ship checks." },
    { name: "assets/templates/ (12 files)", desc: "Project brief, shipping checklist, release notes, verdict log, store listing, Termux steps, and more." },
    { name: "fixtures/demo-good + demo-bad", desc: "Two demo trees — one that ships, one with a leaked file — so you can try the loop before your own project." },
    { name: "tests/run_tests.py", desc: "The test suite for the tool." },
    { name: "docs, references, README, CHANGELOG", desc: "Onboarding, compatibility, release checklist, and the full changelog." }
  ],
  // FAQ — every answer traces to the product, the license, or this config.
  faq: [
    { q: "What do I need to run it?", a: "Termux on Android and Python 3.9+. Everything is standard library, so there are no dependencies to install. JS syntax checks use node when it is there, and the shell templates use bash." },
    { q: "Does it need an account or the internet?", a: "No. It makes no network calls, needs no account, and sends no telemetry. It runs entirely on your phone." },
    { q: "What happens after I pay?", a: "On itch.io the download is instant. Buying direct with a card, you email your receipt to dogsbarkdogsbyte@gmail.com and the download link comes back to you." },
    { q: "Does it publish or ship anything by itself?", a: "No. It plans, builds, tests, diagnoses, and packages — then stops and waits for your verdict. A ship verdict records your decision only; nothing is published, pushed, or sent without you." },
    { q: "What if a build goes wrong?", a: "Diagnosis names the problem plainly — missing file, leaked file, JS syntax error, empty tree — with the exact file. The one automatic repair quarantines leaked files. It never deletes, never fabricates, never edits your code. Everything else waits for you." },
    { q: "What does the $25 cover?", a: "One payment for v3.3.0 and every v3.x update. A future v4 would be a separate purchase. If it doesn't work for you, ask within 14 days of purchase and you get a refund." }
  ],
  features: [
    "Brief to shipped package: write a short brief, get a plan, build, test, diagnose, repair, package — with an approval stop before anything ships.",
    "Honest diagnosis: missing files, leaked files, JS syntax errors, empty trees — named plainly, with the exact file.",
    "Safe repairs only: the one automatic repair quarantines leaked files. It never deletes, never fabricates, never edits your code.",
    "Agent orchestration: seven roles (architect, code, asset, test, build, deployment, qa) on one persistent queue — checkpointed after every step, with a human verdict at the end.",
    "Muse-loop AI: code and asset work arrives as validated JSON replies. No live model, no keys, no network.",
    "Doctor, snapshots, and logs: pts doctor checks your setup, pts snapshot/restore guards your work with hash verification, every run is logged.",
    "Termux-safe by check, not by claim: packaging checks prove the build installs cleanly under Termux. A real-phone run is still your verdict.",
    "Offline and stdlib-only: no network calls, no accounts, no telemetry."
  ],
  whatsNew: [
    "Agent orchestration: 7 roles on one persistent queue, checkpoint after every step, bounded retries, human verdict gate",
    "Muse-loop AI: pts ai prompt/import with the shared safety core — no live model, no keys, no network",
    "Termux packaging checks (8 checks, all passing)",
    "Guarded installer: backup before replace, rollback on failure, clean uninstall"
  ],
  changelog: [
    { version: "3.3.0", date: "2026-11-05", notes: "Agent orchestration: 7 roles on one persistent queue, checkpoint after every step, bounded retries, human verdict gate. Suite 38/38." },
    { version: "3.2.0", date: "2026-11-05", notes: "Muse-loop AI: pts ai prompt/import with the shared safety core — no live model, no keys, no network." },
    { version: "3.1.0", date: "2026-11-05", notes: "Production hardening: Termux checks, guarded installer, doctor, snapshots, config, logging, CI gate." },
    { version: "3.0.0", date: "2026-11-04", notes: "Merged product line: guarded install, doctor, secret scan." },
    { version: "1.2.0", date: "2026-11-04", notes: "Orchestration engine: brief, plan, build, test, diagnose, repair, package, approval stop." },
    { version: "1.1.0", date: "2026-11-04", notes: "First product build: installer, templates." }
  ]
};
