
import React, { useState } from "react";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

function App() {
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    const provider = new WalletConnectProvider({
      rpc: {
        97: "https://data-seed-prebsc-1-s1.binance.org:8545/" // BNB Testnet
      },
      chainId: 97
    });

    await provider.enable();
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    setAddress(accounts[0]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>BNB Reward App</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
      {address && <p>Connected: {address}</p>}
    </div>
  );
}

export default App;
