import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { GITHUB_USERNAME } from './core/config/app.config.constants';
import { GithubUserService } from './core/services/github-user.service';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { TabNav } from './layout/tab-nav/tab-nav';

@Component({
  imports: [RouterOutlet, Header, TabNav, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly username = GITHUB_USERNAME;
  private readonly userService = inject(GithubUserService);

  protected readonly userQuery = injectQuery(() => ({
    queryKey: ['github-user', this.username],
    queryFn: () => this.userService.getUser(this.username),
    staleTime: 5 * 60 * 1000,
  }));
}
