import { z } from 'zod';

export const contributionDaySchema = z.object({
  date: z.string(),
  count: z.number(),
  level: z.number(),
});

export const contributionCalendarSchema = z.object({
  total: z.record(z.string(), z.number()),
  contributions: z.array(contributionDaySchema),
});

export type ContributionDay = z.infer<typeof contributionDaySchema>;
export type ContributionCalendar = z.infer<typeof contributionCalendarSchema>;
