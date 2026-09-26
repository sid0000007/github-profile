import { Component, inject, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { GITHUB_USERNAME } from '../../../core/config/app.config.constants';
import { ACHIEVEMENTS, ORGANIZATIONS } from '../../../core/mock/profile-extras.mock';
import { GithubUserService } from '../../../core/services/github-user.service';

@Component({
  imports: [],
  selector: 'app-profile-sidebar',
  styleUrl: './profile-sidebar.scss',
  templateUrl: './profile-sidebar.html',
})
export class ProfileSidebar {
  protected readonly username = GITHUB_USERNAME;
  protected readonly achievements = ACHIEVEMENTS;
  protected readonly organizations = ORGANIZATIONS;

  private readonly userService = inject(GithubUserService);

  protected readonly userQuery = injectQuery(() => ({
    queryKey: ['github-user', this.username],
    queryFn: () => this.userService.getUser(this.username),
    staleTime: 5 * 60 * 1000,
  }));

  protected readonly avatarErrored = signal(false);
}
