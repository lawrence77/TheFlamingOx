/**
 * List my favorite spinner options
 */
export type SpinnerOptions = 'dots' | 'simpleDotsScrolling' | 'star2' | 'arrow3' | 'pong' | 'clock';

type HexColor = string & { hex?: any };
export type CLIColors =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'gray'
  | HexColor;

export type Alignment = 'center' | 'left' | 'right';
export type VerticalAlignment = 'top' | 'center' | 'bottom';

export type Spacing =
  | number
  | {
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
