// Run: npx ts-node -r tsconfig-paths/register --project=./libs/log-service/tsconfig.lib.json libs/log-service/src/lib/Console/test-script.ts
import { LogLevel } from '@shared';

import { Console } from './simple-console-service';

const output = new Console(LogLevel.All);

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

output.log(LogLevel.Trace, tempBoolean);
output.log(LogLevel.Config, tempNumber);
output.log(LogLevel.Info, tempString);
output.log(LogLevel.Warn, tempArray);
output.log(LogLevel.Error, tempFunction);
output.log(LogLevel.All, tempObject);
