import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { projectRouterConfig } from '../router-config';

import { ProjectsPageComponent } from './projects-page.component';

@NgModule({
  declarations: [ProjectsPageComponent],
  imports: [RouterModule.forChild(projectRouterConfig)]
})
export class ProjectsModule {}
