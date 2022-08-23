import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@layout';
import {
  HomePage,
  LolPage,
  ChampionsPage,
  ChampionPage,
  ItemsPage,
  ItemPage,
} from '@pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />

            <Route path="lol">
              <Route index element={<LolPage />} />

              <Route path="champion">
                <Route index element={<ChampionsPage />} />
                <Route path=":championId" element={<ChampionPage />} />
              </Route>

              <Route path="item">
                <Route index element={<ItemsPage />} />
                <Route path=":itemId" element={<ItemPage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
