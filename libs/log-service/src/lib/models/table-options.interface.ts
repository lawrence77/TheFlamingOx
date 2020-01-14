import Table from 'cli-table3';

import { Alignment, VerticalAlignment } from './types';

export interface ITableOptions {
  chars?: TableBorder;
  colAligns?: Alignment[];
  colWidths?: number[];
  head?: string[];
  rowAligns?: VerticalAlignment[];
  rowHeights?: number[];
  style?: StyleOption;
  truncate?: string;
  wordWrap?: boolean;
}

export interface IHorizontalRows {
  rows: Table.HorizontalTableRow[];
  type: 'Horizontal';
}

export interface IVerticalRows {
  rows: Table.VerticalTableRow[];
  type: 'Vertical';
}

export interface ICrossRows {
  rows: Table.CrossTableRow[];
  type: 'Cross';
}

type TableBorder = Partial<{
  bottom: string;
  'bottom-left': string;
  'bottom-mid': string;
  'bottom-right': string;
  left: string;
  'left-mid': string;
  mid: string;
  'mid-mid': string;
  middle: string;
  right: string;
  'right-mid': string;
  top: string;
  'top-left': string;
  'top-mid': string;
  'top-right': string;
}>;

type StyleOption = Partial<{
  border: string[];
  compact: boolean;
  head: string[];
  'padding-left': number;
  'padding-right': number;
}>;
