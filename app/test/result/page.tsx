"use client";

import { useState } from "react";

export default function Test(){

const [prompt, setPrompt] = useState("");
const [response, setResponse] = useState("");

const handleInput = async () => {
    if (prompt == ""){
        setResponse("Enter a prompt to continue.");
    } else {
        setResponse(prompt)
    }

};

    return (
        <div
      className="bg-cover bg-fixed h-screen text-white"
      style={{ backgroundImage: `url(${"https://media.nbcnewyork.com/2025/10/42926846218-1080pnbcstations.jpg?quality=85&strip=all"})` }}
    >
      <div className="bg-black/90 h-screen flex items-center justify-center">
        <textarea
            placeholder="some information/response: Victor Wembanyama of the San Antonio Spurs led the lead the league in blocks in the 2024/2025 season. It's worth noting that he missed half the season."
            className="w-1/2 h-[10rem] border-1 bg-gray-200/90 text-black rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
      </div>
    </div>
    );
}
