import { CodeHighlightLanguages, LogLevel } from '@shared';
import boxen from 'boxen';
import { highlight } from 'cli-highlight';
import Table, {
  CrossTable,
  CrossTableRow,
  HorizontalAlignment,
  HorizontalTable,
  HorizontalTableRow,
  VerticalTable,
  VerticalTableRow
} from 'cli-table3';
import ora from 'ora';

import { ICrossRows, IHorizontalRows, ITableOptions, IVerticalRows, SpinnerOptions } from '../models';
import { IBoxOptions } from '../models/box-options.interface';

import { Console } from './simple-console-service';

/**
 * Outputs displays various entities to console log
 */
export class AdvancedConsole extends Console {
  // TODO
  // CLI-Progress https://www.npmjs.com/package/cli-progress
  // Chalk https://www.npmjs.com/package/chalk
  // Table https://www.npmjs.com/package/cli-table3

  /**
   * Displays a message within a box in the CLI
   * Note: Boxen version 4.2.0 doesn't work in Typescript yet. Using version 3.0.0
   * @param logLevel Set the log level for the message
   * @param message This is the text that goes inside the box
   * @param options Optional configuration for the displaying the box
   */
  public box(logLevel: LogLevel, message: string, options?: Partial<IBoxOptions>) {
    let boxOptions: Partial<IBoxOptions> = {
      align: 'left',
      dimBorder: false,
      margin: 0,
      padding: 0
    };

    if (options) {
      boxOptions = {
        ...options
      };
    }

    this.log(logLevel, boxen(message, boxOptions));
  }

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
    spinnerType: SpinnerOptions,
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

  /**
   * Prints a table on the terminal
   * @param logLevel Set the log level of the display
   * @param data Data to display in the table
   * @param options Configuring the table
   */
  public table(logLevel: LogLevel, dataRows: IHorizontalRows | IVerticalRows | ICrossRows, options?: ITableOptions) {
    let defaultOptions = {};
    if (options) {
      defaultOptions = {
        ...options
      };
    }

    switch (dataRows.type) {
      case 'Cross':
        const crossTable = new Table(defaultOptions) as CrossTable;
        crossTable.push(...dataRows.rows);
        this.log(logLevel, crossTable.toString());
        break;

      case 'Horizontal':
        const normalTable = new Table(defaultOptions) as HorizontalTable;
        normalTable.push(...dataRows.rows);
        this.log(logLevel, normalTable.toString());
        break;

      case 'Vertical':
        const verticalTable = new Table(defaultOptions) as VerticalTable;
        verticalTable.push(...dataRows.rows);
        this.log(logLevel, verticalTable.toString());
        break;
    }
  }
}
