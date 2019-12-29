import { Routes } from '@angular/router';

import { LicensePageComponent } from './license-page/license-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ResearchPageComponent } from './research-page/research-page.component';

export const appRouterConfig: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: '**', component: PageNotFoundPageComponent }
];

export const researchRouterConfig: Routes = [{ path: 'research', component: ResearchPageComponent }];

export const projectRouterConfig: Routes = [{ path: 'projects', component: ProjectsPageComponent }];

export const licenseRouterConfig: Routes = [{ path: 'licenses', component: LicensePageComponent }];
