import { useState } from "react";
import { ethers } from "ethers";

export default function App() {
  const [connected, setConnected] = useState(false);

  async function connect() {
    if (!window.ethereum) {
      alert("Install MetaMask");
      return;
    }

    await window.ethereum.request({ method: "eth_requestAccounts" });
    setConnected(true);
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Tempo Swap Dummy</h1>
      {!connected ? (
        <button onClick={connect}>Connect Wallet</button>
      ) : (
        <p>Wallet Connected ✅</p>
      )}
    </div>
  );
}
