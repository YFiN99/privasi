import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // Load AI bridge script setelah React root siap
    const script = document.createElement("script");
    script.src = "/ai-bridge.js"; // pastikan file ada di public/
    script.async = true;
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  const handleSwap = () => {
    alert(`Dummy swap: ${amount} TEMPO → TEMPO`);
    setAmount("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Tempo Swap (Testnet Dummy)</h1>

      <div style={{ marginTop: "20px" }}>
        <label>
          Amount to swap:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "100px" }}
          />
        </label>
      </div>

      <button
        onClick={handleSwap}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Swap
      </button>
    </div>
  );
}
