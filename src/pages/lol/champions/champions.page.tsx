import { Champions, LolLayout } from '@components';
import { TProps } from './champions.props';

export const ChampionsPage = (props: TProps) => {
  return (
    <LolLayout>
      <Champions />
    </LolLayout>
  );
};
