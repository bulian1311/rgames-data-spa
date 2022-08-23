import React from 'react';
import { Props } from './item-modal.props';

export const ItemModal = ({ item, ...props }: Props): JSX.Element => {
  return (
    <div className="flex gap-2" {...props}>
      <img
        width={80}
        height={80}
        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image}`}
      />
      <span>{item.name}</span>
    </div>
  );
};
