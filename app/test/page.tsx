"use client";

import { useState } from "react";

export default function Test(){

const [prompt, setPrompt] = useState("");
const [response, setResponse] = useState("");
const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(`https://localhost:5000/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

        const data = await res.json();
        setResponse(data.answer || data.error || "No response");
      } catch (err) {
        console.log(err)
        setResponse("Error connecting to server");
      } finally {
        setLoading(false);
      }
    };

    return (
        <div
      className="bg-cover bg-fixed h-screen text-white"
      style={{ backgroundImage: `url(${"https://media.nbcnewyork.com/2025/10/42926846218-1080pnbcstations.jpg?quality=85&strip=all"})` }}
    >
      <div className="bg-black/90 h-screen flex items-center justify-center">
        <div className="max-w-[1140px] w-full mx-auto text-center flex flex-col items-center gap-y-4">
          <h1 className="text-7xl font-bold mb-3">SwishStats</h1>
          <textarea
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            placeholder="Ex: Who led the league in blocked shots?"
            className="w-1/2 h-[10rem] border-1 bg-gray-200/90 text-black rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            onClick={handleAsk}
            className="w-1/2 px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 font-bold transition-colors">{loading ? "Loading..." : "Submit"}
          </button>
          {response && (
            <div>{response}</div>
          )}
        </div>
      </div>
    </div>
    );
}
