# GitHub Profile Page

Angular clone of the GitHub profile page, built for the UptimeAI assignment.

## Stack

- Angular 22 (standalone components)
- TanStack Query for data fetching/caching
- Zod for API response validation
- ECharts (via ngx-echarts) for the contribution heatmap

## APIs

- Profile info: GitHub REST `GET /users/{username}`
- Contribution heatmap: [github-contributions-api.jogruber.de](https://github-contributions-api.jogruber.de)
- Rest (repos, achievements, activity) is mock data

Username is set in `src/app/core/config/app.config.constants.ts`.

## Run locally

```bash
pnpm install
pnpm start   # ng serve, http://localhost:4200
```

```bash
pnpm build   # production build to dist/
```
