import { Link } from 'react-router-dom';
import { Block, Headline } from '@components';

const NotFound = () => {
  return (
    <>
      <Block>
        <Headline tag="h2">Такай страницы нет!</Headline>
        <Link to="/">
          <a>Перейти на главную.</a>
        </Link>
      </Block>
    </>
  );
};

export default NotFound;
