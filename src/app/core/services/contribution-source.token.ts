import { InjectionToken } from '@angular/core';
import { ContributionCalendar } from '../models/contribution.schema';

export interface ContributionSource {
  getContributions(username: string): Promise<ContributionCalendar>;
}

export const CONTRIBUTION_SOURCE = new InjectionToken<ContributionSource>('CONTRIBUTION_SOURCE');
