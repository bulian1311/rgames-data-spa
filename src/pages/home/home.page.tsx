import { Block, Headline, Input } from '@components';

export const HomePage = () => {
  return (
    <Block>
      <Headline tag="h2">Home Page</Headline>
      <Input icon="search" onClear={() => {}} />
    </Block>
  );
};
