// Run: npx ts-node -r tsconfig-paths/register --project=./libs/log-service/tsconfig.lib.json libs/log-service/src/lib/Console/test-script.ts
import { CodeHighlightLanguages, LogLevel, delay } from '@shared';

import { AdvancedConsole } from './advance-console-service';

const output = new AdvancedConsole(LogLevel.All);

//#region Variable Setup

const tempBoolean = false;
const tempNumber = 5;
const tempString = 'Display this message';
const tempArray = ['hello', 'world'];
const tempFunction = () => undefined;
const tempObject = {
  tempBoolean,
  tempNumber,
  tempString,
  tempArray,
  tempFunction
};
const tempCode = `
import { LogLevel } from '@shared';

import { ISimpleLogger } from '../models/simple-logger-interface';

/**
 * Outputs messages to the console.
 */
export class Console implements ISimpleLogger {
  constructor(private readonly logLevel: LogLevel) {}

  /**
   * Displays parameter to console
   * @param logLevel Set the log level of the function call
   * @param entity Print this parameter
   */
  public log(logLevel: LogLevel, entity: any) {
    if (this.logLevel !== LogLevel.None && logLevel <= this.logLevel) {
      this.helper(logLevel, entity);
    }
  }

  private helper(logLevel: LogLevel, entity: any) {
    if (logLevel === LogLevel.Error) {
      console.error(entity);
    } else if (logLevel === LogLevel.Warn) {
      console.warn(entity);
    } else {
      console.log(entity);
    }
  }
}
`;
const tempJson = `
{
  "npmScope": "TheFlamingOx",
  "implicitDependencies": {
    "angular.json": "*",
    "package.json": "*",
    "tsconfig.json": "*",
    "tslint.json": "*",
    "nx.json": "*"
  },
  "projects": {
    "home-app-e2e": {
      "tags": []
    },
    "home-app": {
      "tags": []
    },
    "log-service": {
      "tags": []
    },
    "shared": {
      "tags": []
    }
  }
}
`;

//#endregion

output.log(LogLevel.Trace, tempBoolean);
output.log(LogLevel.Config, tempNumber);
output.log(LogLevel.Info, tempString);
output.log(LogLevel.Warn, tempArray);
output.log(LogLevel.Error, tempFunction);
output.log(LogLevel.All, tempObject);

output.codeHighlight(LogLevel.Info, CodeHighlightLanguages.Typescript, tempCode);
output.codeHighlight(LogLevel.Info, CodeHighlightLanguages.Json, tempJson);

output.box(LogLevel.Info, 'Important Information');
output.box(LogLevel.Info, 'Hello World', { dimBorder: true });
output.box(LogLevel.Info, 'Foo', { align: 'center', float: 'center' });
output.box(LogLevel.Info, 'Baz', { float: 'left', padding: 10, margin: 4, borderColor: 'cyan', dimBorder: true });
output.box(LogLevel.Info, 'Last info', { padding: 2, margin: 1, borderColor: 'green', backgroundColor: 'black' });

const spinner = output.getSpinner(LogLevel.Info, 'dots', 'Testing');

// tslint:disable-next-line: no-floating-promises
delay(3).then(() => {
  spinner.succeed('Succeeded');
});
