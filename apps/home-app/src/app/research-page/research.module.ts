import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { researchRouterConfig } from '../router-config';

import { ResearchPageComponent } from './research-page.component';

@NgModule({
  declarations: [ResearchPageComponent],
  imports: [RouterModule.forChild(researchRouterConfig)]
})
export class ResearchModule {}
