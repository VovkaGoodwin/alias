import { ConfigProvider } from 'antd';
import type { FC } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Endgame from './pages/Endgame/Endgame.tsx';
import Game from './pages/Game/Game';
import Settings from './pages/Settings/Settings';
import Start from './pages/Start/Start.tsx';
import Teams from './pages/Teams/Teams.tsx';
import store from './store';
import Locale from 'antd/locale/ru_RU';

const App: FC = () => (
  <Provider store={store}>
    <ConfigProvider
      locale={Locale}
    >
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={(<Teams />)} />
          <Route path="/settings" element={(<Settings />)} />
          <Route path="/start" element={(<Start />)} />
          <Route path="/game" element={(<Game />)} />
          <Route path="/endgame" element={(<Endgame />)} />
          <Route path="*" element={(<Navigate to="/"/>)}/>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);

export default App;
