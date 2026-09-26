import { Component } from '@angular/core';
import { ACTIVITY_OVERVIEW } from '../../../core/mock/activity.mock';

const CENTER = 100;
const AXIS_LENGTH = 80;
const ZERO_AXIS_STUB = 0.05;

@Component({
  imports: [],
  selector: 'app-activity-overview',
  styleUrl: './activity-overview.scss',
  templateUrl: './activity-overview.html',
})
export class ActivityOverview {
  protected readonly overview = ACTIVITY_OVERVIEW;
  protected readonly center = CENTER;

  private readonly commitsRatio = this.overview.commitsPercent / 100;
  private readonly pullRequestsRatio = this.overview.pullRequestsPercent / 100;

  protected readonly topY = CENTER - AXIS_LENGTH * ZERO_AXIS_STUB;
  protected readonly rightX = CENTER + AXIS_LENGTH * ZERO_AXIS_STUB;
  protected readonly bottomY = CENTER + AXIS_LENGTH * this.pullRequestsRatio;
  protected readonly leftX = CENTER - AXIS_LENGTH * this.commitsRatio;

  protected readonly polygonPoints = [
    `${CENTER},${this.topY}`,
    `${this.rightX},${CENTER}`,
    `${CENTER},${this.bottomY}`,
    `${this.leftX},${CENTER}`,
  ].join(' ');
}
