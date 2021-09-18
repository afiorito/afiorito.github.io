import { Theme } from 'utilities';

export interface AppContextValue {
  theme: Theme;
  setTheme?: (theme: Theme) => void;
}
