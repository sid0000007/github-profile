import { Component } from '@angular/core';
import { CONTRIBUTION_ACTIVITY } from '../../../core/mock/activity.mock';

@Component({
  imports: [],
  selector: 'app-contribution-activity',
  styleUrl: './contribution-activity.scss',
  templateUrl: './contribution-activity.html',
})
export class ContributionActivity {
  protected readonly months = CONTRIBUTION_ACTIVITY;
}
