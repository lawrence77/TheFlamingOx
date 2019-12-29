import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LicenseModule } from './license-page/license.module';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { ProjectsModule } from './projects-page/projects.module';
import { ResearchModule } from './research-page/research.module';
import { appRouterConfig } from './router-config';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PageNotFoundPageComponent],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    LicenseModule,
    ProjectsModule,
    ResearchModule,
    RouterModule.forRoot(appRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
