import { Component } from '@angular/core';
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
export class OverviewPage {}
