import { ItemFull, LolLayout } from '@components';
import { TProps } from './item-full.props';

export const ItemFullPage = (props: TProps) => {
  return (
    <LolLayout {...props}>
      <ItemFull />
    </LolLayout>
  );
};
