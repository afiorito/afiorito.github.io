import { PropsWithChildren, useState } from 'react';
import { getTheme, Theme } from 'utilities/theme';
import { LocalStorageKey } from 'utilities/local-storage';
import { AppContext } from 'utilities/context';

export const AppContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, setState] = useState({ theme: getTheme() });

  const setTheme = (theme: Theme) => {
    localStorage.setItem(LocalStorageKey.Theme, `${theme}`);
    setState({ ...state, theme: theme });
  };

  return (
    <AppContext.Provider value={{ theme: state.theme, setTheme }}>{children}</AppContext.Provider>
  );
};
