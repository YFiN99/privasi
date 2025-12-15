import React, { useState } from "react";
import { ethers } from "ethers";

// Dummy token addresses (bisa pakai token testnet)
const tokenIn = "0x0000000000000000000000000000000000000001";
const tokenOut = "0x0000000000000000000000000000000000000002";

// Dummy router contract address
const routerAddress = "0x0000000000000000000000000000000000001000";
// Dummy ABI
const routerABI = [
  "function swapExactTokensForTokens(uint256 amountIn,uint256 amountOutMin,address[] calldata path,address to,uint256 deadline) external returns (uint256[] memory)"
];

export default function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [amount, setAmount] = useState("");

  // Connect Wallet
  const connectWallet = async () => {
    if ((window as any).ethereum) {
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      setSigner(await provider.getSigner());
      setWalletConnected(true);
    } else {
      alert("Install MetaMask!");
    }
  };

  // Swap function dummy
  const swap = async () => {
    if (!signer) return alert("Connect wallet first");

    const routerContract = new ethers.Contract(routerAddress, routerABI, signer);

    try {
      const tx = await routerContract.swapExactTokensForTokens(
        ethers.parseUnits(amount || "0", 18),
        0,
        [tokenIn, tokenOut],
        await signer.getAddress(),
        Math.floor(Date.now() / 1000) + 60 * 10
      );

      await tx.wait();
      alert("Swap transaction sent (dummy)!");
    } catch (err: any) {
      console.error(err);
      alert("Transaction failed (dummy)!");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Tempo Testnet Swap (Dummy)</h1>
      {!walletConnected ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Amount to swap"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={swap}>Swap</button>
        </div>
      )}
    </div>
  );
}
