import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { useAppSelector } from '@hooks';
import { Display } from '@components';
import { selectDisplayValue, selectChampions } from '@store';
import { ChampionItemSmall } from './champion-item-small';
import { ChampionItemLarge } from './champion-item-large';
import { ChampionItemLine } from './champion-item-line';
import { ChampionFilter } from './filter';
import { Sort } from './sort';
import { Props } from './champions.props';

export const Champions = (props: Props): JSX.Element => {
  const champions = useAppSelector(selectChampions);
  const displayValue = useAppSelector(selectDisplayValue);

  let ChampionItem = ChampionItemSmall;

  switch (displayValue) {
    case 'lines':
      ChampionItem = ChampionItemLine;
      break;
    case 'table':
      ChampionItem = ChampionItemSmall;
      break;
    case 'cell':
      ChampionItem = ChampionItemLarge;
      break;
  }

  const renderChampions = () => {
    return champions.map((champ) => (
      <ChampionItem key={champ.key} champion={champ} />
    ));
  };

  return (
    <>
      <ChampionFilter />
      <div className="flex items-center justify-between">
        <Sort />
        <Display />
      </div>
      <div
        className={clsx('flex flex-wrap gap-2 justify-center', {
          'flex-col': displayValue === 'lines',
        })}
        {...props}
      >
        {renderChampions()}
      </div>
    </>
  );
};
