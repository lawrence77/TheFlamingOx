import { CLIColors } from './types';

type Alignment = 'center' | 'left' | 'right';

type Spacing =
  | number
  | {
      bottom: number;
      left: number;
      right: number;
      top: number;
    };

export interface IBoxOptions {
  align: Alignment;
  backgroundColor: CLIColors;
  borderColor: CLIColors;
  dimBorder: boolean;
  float: Alignment;
  margin: Spacing;
  padding: Spacing;
}
