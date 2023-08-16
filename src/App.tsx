import { ConfigProvider } from 'antd';
import type { FC } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Game from './pages/Game/Game';
import Settings from './pages/Settings/Settings';
import Start from './pages/Start/Start.tsx';
import store from './store';

const App: FC = () => (
  <Provider store={store}>
    <ConfigProvider >
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={(<Start />)} />
          <Route path="/settings" element={(<Settings />)} />
          <Route path="/game" element={(<Game />)} />
          <Route path="*" element={(<Navigate to="/"/>)}/>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);

export default App;
