import { HTMLAttributes } from 'react';
import { TResLolItem } from '@types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  item: TResLolItem;
};
