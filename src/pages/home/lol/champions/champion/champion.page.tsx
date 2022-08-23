import { useState } from 'react';
import { Block, Headline } from '@components';
// import { lolDataService } from "@services";
// import { TProps } from "./champion.props";

export const ChampionPage = () => {
  const [champion, setChampion] = useState({});
  const imgurl = `${process.env.API_URL}cdn/${process.env.API_VERSION}/img`;
  console.log(champion);

  return (
    <Block className="flex flex-col">
      {/* <div className="flex gap-4">
        <img
          src={`${imgurl}/champion/${champion && champion.image.full}`}
          width={120}
          height={120}
        />
        <div className="flex flex-col justify-between">
          <Headline>{`${champion.id} (${champion.name})`}</Headline>
          <div className="flex gap-1">
            <img
              src={`${imgurl}/passive/${champion.passive.image.full}`}
              width={50}
              height={50}
            />
            {champion.spells.map((spell) => (
              <img
                key={spell.id}
                src={`${imgurl}/spell/${spell.image.full}`}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>
      </div> */}
    </Block>
  );
};
