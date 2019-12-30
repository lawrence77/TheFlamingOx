import { LogLevel } from '@shared';

import { ISimpleLogger } from '../models';

/**
 * Outputs messages to the console.
 */
export class Console implements ISimpleLogger {
  constructor(protected readonly logLevel: LogLevel) {}

  /**
   * Displays parameter to console
   * @param logLevel Set the log level of the function call
   * @param entity Print this parameter
   */
  public log(logLevel: LogLevel, entity: any) {
    if (this.isValidLevel(logLevel)) {
      this.helper(logLevel, entity);
    }
  }

  protected isValidLevel(logLevel: LogLevel) {
    return this.logLevel !== LogLevel.None && logLevel <= this.logLevel;
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
