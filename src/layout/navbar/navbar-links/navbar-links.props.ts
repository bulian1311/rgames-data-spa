import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLElement> & {
  isOpen: boolean;
};
