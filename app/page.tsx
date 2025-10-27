"use client";
import { useState, FormEvent } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("http://127.0.0.1:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setResponse(data.answer || data.error || "No response");
    } catch (err) {
      setResponse("Error connecting to server");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="bg-cover bg-fixed h-screen text-white"
      style={{
        backgroundImage: `url("https://media.nbcnewyork.com/2025/10/42926846218-1080pnbcstations.jpg?quality=85&strip=all")`,
      }}
    >
      <div className="bg-black/90 h-screen flex items-center justify-center">
        <div className="max-w-[1140px] w-full mx-auto text-center flex flex-col items-center gap-y-4">
          <h1 className="text-7xl font-bold mb-3">SwishStats</h1>

          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-y-4">
            <textarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Ex: Who led the league in blocked shots?"
              className="w-1/2 h-[10rem] border-1 bg-gray-200/90 text-black rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 font-bold transition-colors"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          {response && <div className="w-1/2 bg-gray-800/80 p-3 rounded-lg">{response}</div>}
        </div>
      </div>
    </div>
  );
}