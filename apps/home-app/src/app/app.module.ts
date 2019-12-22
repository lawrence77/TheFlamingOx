import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeSideNavComponent } from './home-side-nav/home-side-nav.component';
import { LicensePageComponent } from './license-page/license-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ResearchPageComponent } from './research-page/research-page.component';
import { routerConfig } from './router-config';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSideNavComponent,
    ProjectsPageComponent,
    ResearchPageComponent,
    LicensePageComponent,
    PageNotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routerConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
