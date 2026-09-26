import { Routes } from '@angular/router';
import { OverviewPage } from './features/overview/overview-page/overview-page';
import { PackagesPage } from './features/packages-page/packages-page';
import { ProjectsPage } from './features/projects-page/projects-page';
import { RepositoriesPage } from './features/repositories-page/repositories-page';

export const routes: Routes = [
  { path: '', component: OverviewPage },
  { path: 'repositories', component: RepositoriesPage },
  { path: 'projects', component: ProjectsPage },
  { path: 'packages', component: PackagesPage },
  { path: '**', redirectTo: '' },
];
