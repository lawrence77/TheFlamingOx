import { CodeHighlightLanguages, LogLevel } from '@shared';
import { highlight } from 'cli-highlight';
import ora from 'ora';

import { spinnerOptions } from '../models';

import { Console } from './simple-console-service';

/**
 * Outputs displays various entities to console log
 */
export class AdvancedConsole extends Console {
  // TODO
  // CLI-Progress https://www.npmjs.com/package/cli-progress
  // Chalk https://www.npmjs.com/package/chalk
  // Boxes https://www.npmjs.com/package/boxen
  // Columns https://www.npmjs.com/package/cli-columns
  // Table https://www.npmjs.com/package/cli-table3
  // Spinner https://www.npmjs.com/package/ora

  /**
   * Displays and highlights code in the CLI
   * @param logLevel Set the log level for the display
   * @param language Set the code language for the highlight
   * @param code string Pass a string representation for the code
   */
  public codeHighlight(logLevel: LogLevel, language: CodeHighlightLanguages, code: string) {
    this.log(logLevel, highlight(code, { language: language, ignoreIllegals: true }));
  }

  /**
   * Shows a spinner in the CLI.
   * Note: Ora version 4.0^ doesn't work in Typescript yet. Using version 3.4.0
   * @param logLevel Set the log level for the spinner display
   * @param text Set the text following the spinner
   * @returns An ora spinner or undefined
   */
  public getSpinner(
    logLevel: LogLevel,
    spinnerType: spinnerOptions,
    text: string,
    indent?: number
  ): ora.Ora | undefined {
    if (this.isValidLevel(logLevel)) {
      // More options here: https://www.npmjs.com/package/ora
      const options = {
        text,
        spinner: spinnerType,
        indent: indent || 0
      };

      return ora(options).start();
    }

    return undefined;
  }
}
