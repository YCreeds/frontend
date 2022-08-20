import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MetaMaskProvider, useMetaMask } from 'metamask-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leaderboard from './pages/LeaderBoard';
import Profile from './pages/Profile/profile'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/analytics" element={<Leaderboard></Leaderboard>} />
        <Route path="/leaderboard" element={<Leaderboard></Leaderboard>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/" element={<Profile></Profile>} />
      </Routes>
    </BrowserRouter>
  );
}

const Wrapper = () => {

  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

  if (status === "unavailable") return <div>MetaMask not available :(</div>

  if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

  if (status === "connecting") return <div>Connecting...</div>

  if (status !== "connected") return <>hello world</>;

  return (
    <Router></Router>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MetaMaskProvider>
      <Wrapper></Wrapper>
    </MetaMaskProvider>
  </React.StrictMode>
)
