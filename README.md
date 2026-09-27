# GitHub Profile Page

Angular clone of the GitHub profile page, built for the UptimeAI assignment.

## Technology used

- Angular 22 (standalone components, signals)
- TanStack Query for data fetching/caching
- Zod for API response validation
- ECharts (via ngx-echarts) for the contribution heatmap

## Mocked data

- Popular repositories
- Achievements, organizations, pinned accounts
- Activity overview (commits/PR percentages)
- Contribution activity feed

## Dynamic data (live API)

- Profile info — GitHub REST `GET /users/{username}`
- Contribution heatmap — [github-contributions-api.jogruber.de](https://github-contributions-api.jogruber.de)

Username defaults to `shreeramk`, overridable via the `NG_APP_GITHUB_USERNAME` env var (read at install time, see `scripts/generate-runtime-config.mjs`).

## Run locally

```bash
pnpm install
pnpm start   # ng serve, http://localhost:4200
```

```bash
pnpm build   # production build to dist/
```
