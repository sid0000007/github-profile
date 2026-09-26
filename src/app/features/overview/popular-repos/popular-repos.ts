import { Component } from '@angular/core';
import { POPULAR_REPOS } from '../../../core/mock/repos.mock';

@Component({
  imports: [],
  selector: 'app-popular-repos',
  styleUrl: './popular-repos.scss',
  templateUrl: './popular-repos.html',
})
export class PopularRepos {
  protected readonly repos = POPULAR_REPOS;
}
