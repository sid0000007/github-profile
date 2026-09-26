import { z } from 'zod';

export const githubUserSchema = z.object({
  login: z.string(),
  name: z.string().nullable(),
  avatar_url: z.string(),
  bio: z.string().nullable(),
  company: z.string().nullable(),
  location: z.string().nullable(),
  email: z.string().nullable(),
  blog: z.string().nullable(),
  twitter_username: z.string().nullable(),
  html_url: z.string(),
  followers: z.number(),
  following: z.number(),
  public_repos: z.number(),
});

export type GithubUser = z.infer<typeof githubUserSchema>;
