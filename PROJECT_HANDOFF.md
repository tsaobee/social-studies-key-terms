# Social Studies Key Terms Website — Project Handoff

## Purpose

Publish and eventually monetize a bilingual Social Studies vocabulary website for classroom warm-ups, review, and matching games.

## Current product

The website currently includes:

- Grade tabs for Grades 7, 8, 8 LK, 9, 9 LK, 10 LK, and 11
- Lesson selection using a compact menu
- Flashcard review with images
- English and Traditional Chinese definitions
- Key-term and definition list view
- Matching game with equal-size cards
- Teacher-controlled match-game timer
- Square, uncropped image presentation
- Real maps for the Rhine and Danube Rivers
- Varied Industrial Revolution imagery

The present content includes all provided lesson sets:

- Grade 7: Topics 1–2, Lessons 1–12 — 145 terms
- Grade 8: Topics 9–10, Lessons 1–10 — 141 terms
- Grade 8 LK: Population, Migration, Cultural Diffusion, and Regions, Lessons 1–6 — 77 terms
- Grade 9 DH: Modules 15 and 17, Lessons 1–10 — 158 terms
- Grade 9 LK: Christianity, Medieval Europe, Islamic World, and World History 1000–1300 — 300 terms
- Grade 10 LK: Chapters 19 and 21 — 94 terms
- Grade 11: Reconstruction — 29 terms

Total: 944 bilingual key terms.

## Project location

The deployment-ready project is:

`/Users/johannatsao/Documents/Cowork OS.md/Teaching/Social Studies Key Terms Website`

The original working copy remains at:

`/Users/johannatsao/Documents/Cowork OS.md/Teaching/G9 DH Social/Unit 1 - Industrialization/Lesson 1 Flashcard Game`

Treat the deployment-ready project as the official website project. Content work completed in the original copy should be synchronized into the official project before publishing.

## Technical state

- Static HTML/CSS/JavaScript site
- Images are stored in `assets/`
- Vercel configuration is in `vercel.json`
- Git repository initialized on branch `main`
- Initial deployment-preparation commit: `cdad686`
- Git identity is configured locally for GitHub user `tsaobee`
- No remote repository has been connected yet
- No secrets are stored in the project

## Account and deployment state

- GitHub is connected in Codex as `tsaobee`
- A GitHub repository still needs to be created; recommended name: `social-studies-key-terms`
- Recommended repository visibility: private
- Vercel should import that GitHub repository and deploy the repository root as a static site
- Supabase and AWS are not required for the initial public launch

## Recommended rollout

### Phase 1 — Public launch

1. Create the private GitHub repository.
2. Connect the local repository and push `main`.
3. Import the repository into Vercel.
4. Verify all grade tabs, flashcards, list mode, matching game, images, responsive layouts, and Traditional Chinese text.
5. Add a custom domain when the preferred name is chosen.

### Phase 2 — Product foundation

Use Supabase for teacher accounts, saved sets, progress, and database-backed content. Add privacy terms and analytics suitable for an education audience.

### Phase 3 — Monetization

Add Stripe subscriptions or one-time purchases, a free/premium boundary, teacher dashboards, and account entitlements. Keep payment and privileged Supabase keys only in server-side environment variables.

### Phase 4 — Scale if needed

Use AWS S3/CloudFront only if the media library or traffic makes separate asset infrastructure worthwhile.

## Safety requirements

- Never request or store account passwords in chat.
- Never commit AWS access keys, Supabase service-role keys, Stripe secret keys, or other credentials.
- Use official OAuth/account connection screens and Vercel environment variables.
- Review licensing for textbook-derived definitions and all images before commercial launch.

## First task for the new project chat

Create or connect the GitHub repository, push the deployment-ready project, deploy it through Vercel, test the public URL, and document the resulting repository and deployment links. Pause only for required account authorization, repository creation if unavailable through the connection, domain choice, or billing approval.
