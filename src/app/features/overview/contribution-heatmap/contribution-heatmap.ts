import { Component, computed, inject, input } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { NgxEchartsDirective } from 'ngx-echarts';
import { GITHUB_USERNAME } from '../../../core/config/app.config.constants';
import { PINNED_ACCOUNTS } from '../../../core/mock/profile-extras.mock';
import { CONTRIBUTION_SOURCE } from '../../../core/services/contribution-source.token';

const LEVEL_COLORS = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
const DAY_NAME_MAP = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

@Component({
  imports: [NgxEchartsDirective],
  selector: 'app-contribution-heatmap',
  styleUrl: './contribution-heatmap.scss',
  templateUrl: './contribution-heatmap.html',
})
export class ContributionHeatmap {
  readonly selectedYear = input.required<string>();

  protected readonly pinnedAccounts = PINNED_ACCOUNTS;

  private readonly username = GITHUB_USERNAME;
  private readonly contributionSource = inject(CONTRIBUTION_SOURCE);

  protected readonly contributionsQuery = injectQuery(() => ({
    queryKey: ['contributions', this.username],
    queryFn: () => this.contributionSource.getContributions(this.username),
    staleTime: 5 * 60 * 1000,
  }));

  protected readonly totalCount = computed(() => {
    const data = this.contributionsQuery.data();
    const year = this.selectedYear();
    return data?.total[year] ?? 0;
  });

  protected readonly chartOption = computed<EChartsCoreOption | null>(() => {
    const data = this.contributionsQuery.data();
    const year = this.selectedYear();
    if (!data || !year) return null;

    const heatmapData = data.contributions
      .filter((day) => day.date.startsWith(year))
      .map((day) => [day.date, day.level, day.count]);

    return {
      tooltip: {
        formatter: (params: { data: [string, number, number] }) => {
          const [date, , count] = params.data;
          const label = count === 1 ? 'contribution' : 'contributions';
          return `${count} ${label} on ${date}`;
        },
      },
      visualMap: {
        show: false,
        min: 0,
        max: 4,
        calculable: false,
        pieces: [
          { min: 0, max: 0, color: LEVEL_COLORS[0] },
          { min: 1, max: 1, color: LEVEL_COLORS[1] },
          { min: 2, max: 2, color: LEVEL_COLORS[2] },
          { min: 3, max: 3, color: LEVEL_COLORS[3] },
          { min: 4, max: 4, color: LEVEL_COLORS[4] },
        ],
      },
      calendar: {
        top: 20,
        left: 30,
        right: 10,
        cellSize: ['auto', 13],
        range: year,
        splitLine: { show: false },
        itemStyle: { borderWidth: 3, borderColor: '#fff' },
        yearLabel: { show: false },
        dayLabel: { nameMap: DAY_NAME_MAP, fontSize: 10 },
        monthLabel: { fontSize: 10 },
      },
      series: [
        {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: heatmapData,
        },
      ],
    };
  });
}
