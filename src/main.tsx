import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MetaMaskProvider } from 'metamask-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leaderboard from './pages/LeaderBoard';
import Profile from './pages/Profile/profile'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MetaMaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App></App>} />
          <Route path="/leaderboard" element={<Leaderboard></Leaderboard>} />
          <Route path="/profile" element={<Profile></Profile>} />
        </Routes>
      </BrowserRouter>
    </MetaMaskProvider>
  </React.StrictMode>
)
