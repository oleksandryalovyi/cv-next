# CLAUDE.md

- don't create additional README.md files unless it is asked in prompt
- don't create test files and don't update existing tests unless it is asked in prompt
- add only the most important comments. At most 2 comments per file.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal CV/portfolio website built with Next.js 16, React 19, TypeScript, and TailwindCSS. The project follows Feature-Sliced Design (FSD) architecture for code organization. The application features a header, navigation bar, footer, and About page as the main landing page with keyboard navigation support.

## Development Commands

### Local Development

```bash
npm run dev
```

Starts the Next.js development server on http://localhost:3000 with hot module reloading.

### Building & Production

```bash
npm run build       # Create optimized production build
npm run start       # Start production server (requires `build` first)
```

### Code Quality

```bash
npm run lint        # Run ESLint on the codebase
npm run steiger     # Run Feature-Sliced Design linter with auto-fix
```

**Note**: The `steiger` command enforces architectural rules and fails on warnings. It's used to maintain FSD structure consistency. Run it before committing to ensure compliance.

## Architecture: Feature-Sliced Design (FSD)

This project uses Feature-Sliced Design with the following structure:

### Directory Structure

```
src/
├── shared/           # Shared layer - reusable across features
│   ├── config/      # Configuration (fonts, links, etc.)
│   └── ui/          # Shared UI components (Header, NavBar, Footer)
├── pages/           # Pages layer - complete page features
│   └── about/       # About page feature
│       ├── index.tsx        # Public API export
│       └── ui/
│           └── AboutPage.tsx # Page component
└── app/             # (Legacy folder, not actively used)

app/                 # Next.js App Router (server files)
├── layout.tsx       # Root layout with shared UI shell
├── page.tsx         # Home page (exports AboutPage)
└── about/
    └── page.tsx     # About page route
```

### FSD Conventions

- **`shared/`**: Utilities, UI components, and config used across multiple features. Organized by category (config, ui, utils, etc.)
- **`pages/`**: Feature modules representing complete pages/features. Each feature has public API exports and internal UI components.
- **Public APIs**: Each feature exports its public interface via `index.tsx`. Internal components stay in `ui/` subfolder.
- **Path Alias**: Use `@/*` for absolute imports (configured in tsconfig.json as `@/* → root`).
- follow base FSD principles:
  1. There are "app", "pages", "widgets", "features", "entities", "shared" folders as layers with descending hierarchy
  2. There are "ui', "model", "lib", "api", "config" as segment names.
  3. Slices can have names related to business modules
  4. Use local first principle. Put all necessary code to one module-slice unless it is reused in another slice
  5. Slices can't have cross imports. Use deeper layers for reusable logic
  6. Slices should have public api with index.tsx that reexport only necessary parts

## Key Technologies & Patterns

### Styling

- **TailwindCSS v4**: Utility-first styling with PostCSS integration (@tailwindcss/postcss)
- **Font**: JetBrains Mono (configured in `src/shared/config/fonts.ts`)
- Global styles in `app/globals.css`

### Routing & Layout

- **Next.js App Router** (not Pages Router)
- Root layout (`app/layout.tsx`) provides the shell structure: Header → NavBar → Main Content → Footer
- Layout applies the JetBrains Mono font and base styling

### Type Safety

- **TypeScript 5** with strict mode enabled
- Strict type checking: `"strict": true`
- Server Components by default in Next.js 16

### Code Quality Tools

- **ESLint 9**: Enforces code style and Next.js best practices
- **Steiger**: Enforces Feature-Sliced Design rules and project structure

## Important Implementation Notes

### Navigation & Keyboard Support

The About page mentions keyboard navigation ("Navigate in the website using arrow keys"). Implement keyboard event handling in navigation components if adding interactive features.

### TypeScript Path Imports

Always use the `@/` alias for imports (e.g., `@/src/shared/ui/Header`). This is configured and improves readability.

### ESLint Configuration

ESLint uses `eslint-config-next` which includes React and Next.js specific rules. Always run `npm run lint` before committing.

### Steiger & Architecture Enforcement

The project uses steiger with `--fail-on-warnings`. This means:

- FSD structure violations will cause build failures
- Always follow the shared/pages layer hierarchy
- Keep cross-layer dependencies one-directional (pages can import from shared, but not vice versa)
- Run `npm run steiger --fix` before committing to auto-fix violations when possible

## Common Development Workflows

### Adding a New Page Feature

1. Create a new folder under `src/pages/[feature-name]/`
2. Create `ui/` subdirectory with your page component
3. Create `index.tsx` as the public API export
4. Create the route file in `app/[feature-name]/page.tsx` that imports from `src/pages`
5. Update navigation links in `src/shared/config/links.ts`
6. Run `npm run steiger --fix` to ensure FSD compliance

### Adding Shared Components

1. Create component in `src/shared/ui/[ComponentName].tsx`
2. Export from `src/shared/ui/` or create an index file
3. Import using `@/src/shared/ui/...` path alias

### Metadata & SEO

Update page metadata in layout files using Next.js Metadata API (see `app/layout.tsx` for pattern). The root metadata is in the root layout; update the title and description there.
