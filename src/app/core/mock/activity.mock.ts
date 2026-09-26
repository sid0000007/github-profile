export interface ActivityOverview {
  commitsPercent: number;
  pullRequestsPercent: number;
  contributedRepos: string[];
  contributedReposExtraCount: number;
}

export const ACTIVITY_OVERVIEW: ActivityOverview = {
  commitsPercent: 83,
  pullRequestsPercent: 17,
  contributedRepos: ['UptimeAI/uptime_webapp', 'UptimeAI/uptime_server', 'UptimeAI/uptime_ml'],
  contributedReposExtraCount: 13,
};

export interface ActivityRepoStat {
  name: string;
  mergedCount?: number;
  openCount?: number;
}

export interface ActivityEntry {
  summary: string;
  repos?: ActivityRepoStat[];
}

export interface ActivityMonth {
  month: string;
  entries: ActivityEntry[];
}

export const CONTRIBUTION_ACTIVITY: ActivityMonth[] = [
  {
    month: 'October 2025',
    entries: [
      { summary: 'Created 56 commits in 11 repositories' },
      {
        summary: 'Opened 29 pull requests in 5 repositories',
        repos: [
          { name: 'UptimeAI/uptime_webapp', mergedCount: 16, openCount: 1 },
          { name: 'UptimeAI/uptime_ml', mergedCount: 6 },
          { name: 'UptimeAI/uptime_scripts', mergedCount: 4 },
          { name: 'UptimeAI/uptime_engine', mergedCount: 1 },
          { name: 'UptimeAI/uptime_ml_encrypted', mergedCount: 1 },
        ],
      },
    ],
  },
];
