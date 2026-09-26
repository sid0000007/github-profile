import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { GITHUB_API_BASE } from '../config/app.config.constants';
import { GithubUser, githubUserSchema } from '../models/github-user.schema';

@Injectable({ providedIn: 'root' })
export class GithubUserService {
  private readonly http = inject(HttpClient);

  async getUser(username: string): Promise<GithubUser> {
    const raw = await firstValueFrom(this.http.get(`${GITHUB_API_BASE}/users/${username}`));
    return githubUserSchema.parse(raw);
  }
}
