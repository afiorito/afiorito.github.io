import 'twin.macro';
import { iPadPro } from 'assets';

export const NotesBranding = () => (
  <div tw="flex items-center gap-x-3 leading-tight text-gray-700 dark:text-white font-medium">
    <img tw="h-12" src={iPadPro} alt="iPad Pro with Pencil" />
    Anthony&#39;s
    <br />
    Notes
  </div>
);
