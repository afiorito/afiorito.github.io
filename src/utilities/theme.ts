import { LocalStorageKey } from './local-storage';

export enum Theme {
  Dark,
  Light,
}

export const getSystemTheme = () =>
  matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light;

export const getTheme = (): Theme => {
  const item = localStorage.getItem(LocalStorageKey.Theme);
  return item ? Number(item) : getSystemTheme();
};
