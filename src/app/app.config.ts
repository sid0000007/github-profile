import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { QueryClient, provideTanStackQuery } from '@tanstack/angular-query-experimental';
import { provideEchartsCore } from 'ngx-echarts';
import { routes } from './app.routes';
import { echarts } from './core/echarts-setup';
import { CONTRIBUTION_SOURCE } from './core/services/contribution-source.token';
import { JogruberContributionService } from './core/services/jogruber-contribution.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTanStackQuery(new QueryClient()),
    provideEchartsCore({ echarts }),
    { provide: CONTRIBUTION_SOURCE, useClass: JogruberContributionService },
  ],
};
