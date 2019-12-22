import { Routes } from '@angular/router';

import { LicensePageComponent } from './license-page/license-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ResearchPageComponent } from './research-page/research-page.component';

export const routerConfig: Routes = [
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'research', component: ResearchPageComponent },
  { path: 'licenses', component: LicensePageComponent },
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: '**', component: PageNotFoundPageComponent }
];
