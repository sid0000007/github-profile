import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-tab-nav',
  styleUrl: './tab-nav.scss',
  templateUrl: './tab-nav.html',
})
export class TabNav {
  readonly repositoriesCount = input<number | null>(null);
  readonly packagesCount = input(5);
  readonly starsCount = input(6);
}
