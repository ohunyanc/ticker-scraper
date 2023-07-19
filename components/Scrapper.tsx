"use client";
import React, { useState } from "react";

const Scrapper = () => {
  const [downloads, setDownloads] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const getDownloads = async () => {
    const res = await fetch("https://ticker-scraper.vercel.app/api/getDownloads", {
      method: "POST",
      body: JSON.stringify({ input }),
    });
    const { downloads } = await res.json();

    setDownloads(downloads);
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-black p-24">
      {/*input*/}
      <div className="flex flex-col items-center gap-6">
        <div className="p-4">
          <h1 className="text-white text-xl font-bold">Enter Ticker for Price Update</h1>
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="rounded-md border-2 border-gray-300 text-black p-2"
          placeholder="Enter Stock Ticker"
        />
        <button
          onClick={getDownloads}
          type="button"
          className="rounded-md w-auto bg-green-600 text-xl p-2"
        >
          Go
        </button>

        {downloads && (
          <p className="text-sm text-white">
            This ticker price is {downloads}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Scrapper;
