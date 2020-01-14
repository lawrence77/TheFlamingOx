import { LogLevel } from '@shared';

export interface ISimpleLogger {
  /**
   * Log the entity
   * @param logLevel Set the log level for the function call
   * @param entity Log this parameter
   */
  log(logLevel: LogLevel, entity: any);
}
