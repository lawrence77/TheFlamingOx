import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Console } from "@log-service";
import { LogLevel } from '@shared';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const output = new Console(LogLevel.Info);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => {
    output.log(LogLevel.Error, err);
  });
