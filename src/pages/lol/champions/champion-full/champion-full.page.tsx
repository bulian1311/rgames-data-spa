import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Block, Champion } from '@components';
import { useAppDispatch } from '@hooks';
import { fetchChampionById } from '@store';

export const ChampionFullPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChampionById(params.championId as string));
  }, []);

  return (
    <Block className="flex flex-col">
      <Champion />
    </Block>
  );
};
