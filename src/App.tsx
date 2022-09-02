import React, { useEffect } from 'react';
import './assets/index.css'
import { Route, Routes } from 'react-router-dom';
import { MainRoutes } from './router/index';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, useWallet, WalletProvider} from '@solana/wallet-adapter-react';
import { WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import {
  GlowWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,

} from '@solana/wallet-adapter-wallets';
import { FC, ReactNode, useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { initializeApp } from "firebase/app";
import { useAppDispatch, useAppSelector } from './hooks/redux';
import ConnectWallet from './components/UI/ConnectWallet/ConnectWallet';



function App() {
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCNdpAQXni1CNhof3krBH5aXX9icyYmsfI",
      authDomain: "rectville.firebaseapp.com",
      databaseURL: "https://rectville-default-rtdb.europe-west1.firebasedatabase.app/",
      projectId: "rectville",
      storageBucket: "gs://rectville.appspot.com",
      messagingSenderId: "25488995572",
      appId: "1:25488995572:web:f73ef95b07d495bdf51aa1"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

  return (
    <Context>
    <div className="App">
      <Routes>
        {
          MainRoutes.map(route => 
            <Route 
              path={route.path}
              key={route.path}
              element={<route.component />}
            />
          )
        }
      </Routes>
    </div>
    </Context>
  );
}

export default App;


const Context: FC<{ children: ReactNode }> = ({ children }) => {

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
      () => [
          new LedgerWalletAdapter(),
          new PhantomWalletAdapter(),
          new GlowWalletAdapter(),
          new SlopeWalletAdapter(),
          new SolletExtensionWalletAdapter(), 
          new SolletWalletAdapter(),
          new SolflareWalletAdapter({ network }),
          new TorusWalletAdapter(),
      ],
      [network]
  );

  return (
      <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>{children}</WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
};

