import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { licenseRouterConfig } from '../router-config';

import { LicensePageComponent } from './license-page.component';

@NgModule({
  declarations: [LicensePageComponent],
  imports: [RouterModule.forChild(licenseRouterConfig)]
})
export class LicenseModule {}
