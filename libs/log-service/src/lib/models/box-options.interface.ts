import { Alignment, CLIColors, Spacing } from './types';

export interface IBoxOptions {
  align: Alignment;
  backgroundColor: CLIColors;
  borderColor: CLIColors;
  dimBorder: boolean;
  float: Alignment;
  margin: Spacing;
  padding: Spacing;
}
