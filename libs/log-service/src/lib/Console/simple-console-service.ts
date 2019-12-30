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
