import { Component, computed, inject, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { GITHUB_USERNAME } from '../../../core/config/app.config.constants';
import { CONTRIBUTION_SOURCE } from '../../../core/services/contribution-source.token';
import { ActivityOverview } from '../activity-overview/activity-overview';
import { ContributionActivity } from '../contribution-activity/contribution-activity';
import { ContributionHeatmap } from '../contribution-heatmap/contribution-heatmap';
import { PopularRepos } from '../popular-repos/popular-repos';
import { ProfileSidebar } from '../profile-sidebar/profile-sidebar';

@Component({
  imports: [ProfileSidebar, PopularRepos, ContributionHeatmap, ActivityOverview, ContributionActivity],
  selector: 'app-overview-page',
  styleUrl: './overview-page.scss',
  templateUrl: './overview-page.html',
})
export class OverviewPage {
  private readonly username = GITHUB_USERNAME;
  private readonly contributionSource = inject(CONTRIBUTION_SOURCE);
  private readonly selectedYearOverride = signal<string | null>(null);

  protected readonly contributionsQuery = injectQuery(() => ({
    queryKey: ['contributions', this.username],
    queryFn: () => this.contributionSource.getContributions(this.username),
    staleTime: 5 * 60 * 1000,
  }));

  protected readonly years = computed(() => {
    const data = this.contributionsQuery.data();
    if (!data) return [];
    return Object.keys(data.total)
      .filter((year) => /^\d{4}$/.test(year))
      .sort((a, b) => Number(b) - Number(a));
  });

  protected readonly selectedYear = computed(() => this.selectedYearOverride() ?? this.years()[0] ?? '');

  protected selectYear(year: string): void {
    this.selectedYearOverride.set(year);
  }
}
