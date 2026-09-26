import { Component, input, signal } from '@angular/core';
import { TooltipDirective } from '../../core/directives/tooltip.directive';

@Component({
  imports: [TooltipDirective],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  readonly username = input.required<string>();
  readonly avatarUrl = input<string | null>(null);

  protected readonly avatarErrored = signal(false);
}
