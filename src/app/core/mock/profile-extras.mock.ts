export interface Achievement {
  emoji: string;
  label: string;
  count?: number;
}

export const ACHIEVEMENTS: Achievement[] = [
  { emoji: '🥇', label: 'Pull Shark' },
  { emoji: '🎉', label: 'YOLO' },
  { emoji: '💧', label: 'Pair Extraordinaire', count: 4 },
];

export interface Organization {
  name: string;
  initials: string;
  color: string;
}

export const ORGANIZATIONS: Organization[] = [{ name: 'UptimeAI', initials: 'UP', color: '#6f42c1' }];

export interface PinnedAccount {
  handle: string;
  icon: string;
}

export const PINNED_ACCOUNTS: PinnedAccount[] = [
  { handle: '@UptimeAI', icon: '🏢' },
  { handle: '@timescale', icon: '🐘' },
];
