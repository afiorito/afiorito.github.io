import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import tw from 'twin.macro';

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  icon?: ReactNode;
}

export const Input = ({ icon, ...inputProps }: InputProps) => (
  <div tw="flex items-center border border-gray-300 dark:border-gray-300 rounded p-0.5 min-w-0">
    {icon && <span tw="h-4 w-4 ml-1 mr-1 block flex-shrink-0">{icon}</span>}
    <input
      tw="min-w-0 w-full p-1 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 bg-transparent"
      {...inputProps}
    />
  </div>
);

export const TextArea = tw.textarea`border border-gray-300 rounded p-1 block w-full dark:text-white placeholder-gray-400 dark:placeholder-gray-400 bg-transparent`;
