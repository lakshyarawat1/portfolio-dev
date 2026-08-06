# Portfolio Dev — AI Agent Rules

These rules govern how the AI agent behaves in this workspace.
All rules are **mandatory** and must be followed without exception.

---

## 1. Code Style & Consistency

- Use **TypeScript** for all logic files; avoid `any` types.
- Use **Next.js (App Router)** conventions — file-based routing under `app/`.
- CSS: Use **CSS Modules** (`.module.css`) for component-scoped styles. No inline `style` props unless dynamically computed.
- Prefer **named exports** over default exports for components.
- All component files use **PascalCase** (`HeroSection.tsx`); utility files use **camelCase** (`formatDate.ts`).
- Keep components **single-responsibility** — one component per file.
- Never leave `console.log` or debug statements in committed code.
- Use `TODO:` comments for deferred work, never leave silent placeholders.

---

## 2. Git Commit Conventions

Follow the **Conventional Commits** specification strictly:

```
<type>(<scope>): <short description>

[optional body]
[optional footer]
```

### Allowed Types
| Type       | When to Use                                      |
|------------|--------------------------------------------------|
| `feat`     | New feature or section added                     |
| `fix`      | Bug fix or broken layout correction              |
| `style`    | Visual/CSS changes with no logic change          |
| `refactor` | Code restructuring without behavior change       |
| `perf`     | Performance improvement                          |
| `chore`    | Dependency updates, config changes, tooling      |
| `docs`     | README, comments, documentation only             |
| `test`     | Adding or updating tests                         |

### Commit Rules
- Subject line: **max 72 characters**, **imperative mood** ("add hero section", not "added hero section").
- Do **not** combine unrelated changes in one commit — atomic commits only.
- Never commit directly to `main`. Always use a feature branch.
- Squash WIP commits before opening a PR.

### Examples
```
feat(hero): add animated gradient headline
fix(nav): correct mobile menu z-index overlap
style(footer): adjust link spacing and hover color
perf(images): convert PNGs to WebP and add lazy loading
chore(deps): upgrade Next.js to 15.x
```

---

## 3. Branching Strategy

```
main          ← production-ready, protected
  └── dev     ← integration branch, always stable
        └── feat/<name>    ← new features
        └── fix/<name>     ← bug fixes
        └── style/<name>   ← visual-only changes
        └── chore/<name>   ← tooling / config
```

- All feature work branches off `dev`, not `main`.
- PRs must target `dev`; only `dev → main` merges go to production.
- Branch names: **lowercase-kebab-case** only (`feat/contact-form`, not `feat/ContactForm`).

---

## 4. Pull Request Rules

- Every PR must have a **title** following Conventional Commits format.
- PR description must include:
  - **What changed** (brief summary)
  - **Why** (motivation / issue reference)
  - **Screenshots** for any visual change
- PRs must pass all CI checks before merging.
- Never force-push to shared branches (`dev`, `main`).

---

## 5. CI/CD Workflow

### On every Push / PR to `dev` or `main`
1. **Lint** — ESLint must pass with zero errors.
2. **Type-check** — `tsc --noEmit` must pass.
3. **Build** — `next build` must succeed.
4. **Lighthouse CI** — Scores must meet minimums:
   - Performance ≥ 90
   - Accessibility ≥ 95
   - Best Practices ≥ 90
   - SEO ≥ 95

### On merge to `main`
5. **Deploy** — Auto-deploy to Vercel production.

### The AI agent must NOT:
- Suggest merging a PR that has failing CI.
- Bypass linting or type errors with `// eslint-disable` or `@ts-ignore` unless explicitly justified and approved.
- Skip the build step to "save time".

---

## 6. AI Behavior Constraints

- **Plan before executing** large changes. Create an `implementation_plan.md` for any change touching 3+ files.
- **Never overwrite** the user's written content (bio, project descriptions, personal links) — treat them as sacred.
- **Ask before deleting** any file. Never silently remove files.
- **One concern at a time** — do not mix feature work with refactors in the same change set.
- **Always verify** the build passes after making changes to layout or shared components.
- When generating images or assets, save them under `public/assets/` and reference via relative paths.
- Keep all secrets (API keys, tokens) in `.env.local` — never hardcode them.
- After any significant change, update the relevant section of `README.md`.

---

## 7. File & Folder Conventions

```
portfolio-dev/
├── app/                  # Next.js App Router pages & layouts
├── components/           # Reusable UI components
│   ├── ui/               # Primitive/atomic components
│   └── sections/         # Page sections (Hero, About, Projects…)
├── lib/                  # Utility functions, helpers
├── hooks/                # Custom React hooks
├── public/
│   └── assets/           # Images, icons, fonts
├── styles/               # Global CSS, design tokens
├── content/              # Static data (projects, skills JSON)
└── .agents/              # AI skills & rules (this folder)
```

---

## 8. Design System Constraints

- Color, spacing, and typography must come from **CSS custom properties** defined in `styles/tokens.css`.
- Never hardcode hex colors or font sizes inline — use tokens.
- Dark mode is **required** and toggled via `data-theme` attribute on `<html>`.
- All interactive elements must have visible **focus states** (accessibility).
- Minimum touch target size: **44×44px** on mobile.
