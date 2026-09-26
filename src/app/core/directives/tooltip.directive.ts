import { Directive, ElementRef, Renderer2, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[ghTooltip]',
})
export class TooltipDirective {
  readonly ghTooltip = input.required<string>();
  readonly ghTooltipKeys = input<string[]>([]);
  readonly ghTooltipAlign = input<'center' | 'right'>('center');

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private bubble: HTMLElement | null = null;

  constructor() {
    effect(() => {
      this.render(this.ghTooltip(), this.ghTooltipKeys(), this.ghTooltipAlign());
    });
  }

  private render(label: string, keys: string[], align: 'center' | 'right'): void {
    if (this.bubble) {
      this.renderer.removeChild(this.el.nativeElement, this.bubble);
    }

    const bubble = this.renderer.createElement('span');
    this.renderer.addClass(bubble, 'gh-tooltip');
    this.renderer.addClass(bubble, align === 'right' ? 'gh-tooltip--right' : 'gh-tooltip--center');
    this.renderer.setAttribute(bubble, 'role', 'tooltip');
    this.renderer.appendChild(bubble, this.renderer.createText(label));

    if (keys.length) {
      const keysWrap = this.renderer.createElement('span');
      this.renderer.addClass(keysWrap, 'gh-tooltip-keys');
      for (const key of keys) {
        const kbd = this.renderer.createElement('span');
        this.renderer.addClass(kbd, 'gh-tooltip-key');
        this.renderer.appendChild(kbd, this.renderer.createText(key));
        this.renderer.appendChild(keysWrap, kbd);
      }
      this.renderer.appendChild(bubble, keysWrap);
    }

    this.renderer.addClass(this.el.nativeElement, 'gh-tooltip-host');
    this.renderer.appendChild(this.el.nativeElement, bubble);
    this.bubble = bubble;
  }
}
