import React from 'react';
import Image from 'next/image';
import images from '../assets';
import Link from 'next/link';

import '@rainbow-me/rainbowkit/styles.css';
import {
  // getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  Theme,
  connectorsForWallets,
  ConnectButton,
} from '@rainbow-me/rainbowkit';
import { createClient, configureChains, WagmiConfig } from 'wagmi';
import {
  metaMaskWallet,
  braveWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { polygon } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// Rainbow Kit Area Start from here
const { chains, provider } = configureChains(
  [polygon],
  [
    alchemyProvider({
      apiKey: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`,
    }),
    publicProvider(),
  ]
);

// const { connectors } = getDefaultWallets({
//   appName: 'My RainbowKit App',
//   chains,
// });

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      braveWallet({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      coinbaseWallet({ chains, appName: 'My RainbowKit App' }),
    ],
  },
]);

const wagmiClient = createClient({
  // autoConnect: true,
  connectors,
  provider,
});

const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: '...',
  },
  colors: {
    accentColor: '...',
    accentColorForeground: 'white',
    actionButtonBorder: '...',
    actionButtonBorderMobile: '...',
    actionButtonSecondaryBackground: '...',
    closeButton: '...',
    closeButtonBackground: '...',
    connectButtonBackground: '#7b3fe4',
    connectButtonBackgroundError: '...',
    connectButtonInnerBackground: '...',
    connectButtonText: '...',
    connectButtonTextError: '...',
    connectionIndicator: '...',
    downloadBottomCardBackground: '...',
    downloadTopCardBackground: '...',
    error: '...',
    generalBorder: '...',
    generalBorderDim: '...',
    menuItemBackground: '...',
    modalBackdrop: '...',
    modalBackground: '#7b3fe4',
    modalBorder: 'purple',
    modalText: '...',
    modalTextDim: '...',
    modalTextSecondary: '...',
    profileAction: '...',
    profileActionHover: '...',
    profileForeground: '...',
    selectedOptionBorder: '...',
    standby: '...',
  },
  fonts: {
    body: 'system',
  },
  radii: {
    actionButton: '...',
    connectButton: 'round',
    menuButton: '...',
    modal: '...',
    modalMobile: '...',
  },
  shadows: {
    connectButton: '...',
    dialog: '...',
    profileDetailsAction: '...',
    selectedOption: '...',
    selectedWallet: '...',
    walletLogo: '...',
  },
};

const Navbar = () => (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider
      chains={chains}
      coolMode
      // theme={myCustomTheme}
      theme={darkTheme({
        accentColor: '#7b3fe4',
        accentColorForeground: 'white',
        // borderRadius: 'small',
        // fontStack: 'system',
        overlayBlur: 'small',
      })}
    >
      <nav className=" px-4 py-3 bg-[#1B1631] ">
        <div className="flex justify-between  mx-[150px] ">
          <div className="flex items-center	">
            <Link href="/">
              <Image src={images.Logo1} alt="Logo" className="h-100 w-100" />
            </Link>

            <Link
              className="px-3 py-2 ml-[100px] text-white "
              href="/mintSubdomain"
            >
              MintSubDomain
            </Link>
            <Link className="px-3 py-2  text-white" href="/udGallery">
              UD Gallery
            </Link>
          </div>

          <div className="flex ml-auto">
            {/* <button> */}
            <ConnectButton showBalance={false} />

            {/* <Image src={images.Frame} alt="Logo" className="h-100 w-100" /> */}
            {/* <p>Connect Wallet</p> */}
            {/* </button> */}
          </div>
        </div>
      </nav>
    </RainbowKitProvider>
  </WagmiConfig>
);

export default Navbar;
