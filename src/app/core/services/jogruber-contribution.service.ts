import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CONTRIBUTIONS_API_BASE } from '../config/app.config.constants';
import { ContributionCalendar, contributionCalendarSchema } from '../models/contribution.schema';
import { ContributionSource } from './contribution-source.token';

@Injectable({ providedIn: 'root' })
export class JogruberContributionService implements ContributionSource {
  private readonly http = inject(HttpClient);

  async getContributions(username: string): Promise<ContributionCalendar> {
    const raw = await firstValueFrom(
      this.http.get(`${CONTRIBUTIONS_API_BASE}/${username}?y=all`),
    );
    return contributionCalendarSchema.parse(raw);
  }
}
