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
