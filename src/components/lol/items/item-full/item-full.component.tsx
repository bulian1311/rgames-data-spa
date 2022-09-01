import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@hooks';
import { selectItemById } from '@store';
import { Headline } from '@components';
import { Props } from './item-full.props';

export const ItemFull = ({ ...props }: Props): JSX.Element => {
  const params = useParams();
  const item = useAppSelector(selectItemById(params.itemId as string));

  if (!item) return <div>Loading...</div>;

  return (
    <div {...props}>
      <div className="flex items-center justify-between border-slate-400 border-b-2 pb-2">
        <Headline tag="h1">{item.name}</Headline>
        <div className="flex items-center gap-2">
          <span>Цена: {item.gold.total} |</span>
          <span>Цена рецепта: {item.gold.base} |</span>
          <span>Цена продажи: {item.gold.sell}</span>
        </div>
      </div>

      <div className="flex items-start gap-4 justify-between mt-4">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image.full}`}
          alt={item.name}
        />

        <div
          dangerouslySetInnerHTML={{ __html: item.description }}
          className="flex flex-col"
        />
      </div>
    </div>
  );
};
