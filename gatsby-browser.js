import 'tailwindcss/dist/base.min.css';
import { AppContextProvider } from './src/components/common';

export const wrapRootElement = ({ element }) => <AppContextProvider>{element}</AppContextProvider>;
