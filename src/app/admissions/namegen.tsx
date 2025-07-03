"use client";

import { useState } from "react";

const firstNames: Record<string, string> = {
  A: "Arlowen", B: "Bexley", C: "Cindrel", D: "Dorran", E: "Elira", F: "Fennel",
  G: "Grivven", H: "Hestara", I: "Isk", J: "Juniper", K: "Kerrin", L: "Lioren",
  M: "Merrit", N: "Nura", O: "Orwyn", P: "Peren", Q: "Quen", R: "Rellian",
  S: "Sylwen", T: "Thorne", U: "Umbra", V: "Vess", W: "Wrenna", X: "Zephir",
  Y: "Ylva", Z: "Ziven"
};

const surnameRoots: Record<string, string> = {
  January: "Night", February: "Thorn", March: "Star", April: "Moss",
  May: "Ash", June: "Wickle", July: "Night", August: "Thorn",
  September: "Star", October: "Moss", November: "Ash", December: "Wickle"
};

const surnameEndings: Record<string, string> = {
  "0": "bloom", "1": "whittle", "2": "gleam", "3": "snort", "4": "hush",
  "5": "bloom", "6": "whittle", "7": "gleam", "8": "snort", "9": "hush"
};

const titles = [
  "Keeper of the Gallery", "Daughter of Dust", "Wandering Archivist",
  "Watcher at the Gate", "Student of the Wild", "Ember-Ward",
  "Heir of the Forgotten Thread", "One Who Listens"
];

export default function BrightwellNameGenerator() {
  const [firstLetter, setFirstLetter] = useState("");
  const [birthMonth, setBirthMonth] = useState("January");
  const [phoneDigit, setPhoneDigit] = useState("");
  const [includeTitle, setIncludeTitle] = useState(false);
  const [result, setResult] = useState("");

  function generateName() {
    const initial = firstLetter.toUpperCase();
    const firstName = firstNames[initial] || "Mystery";
    const root = surnameRoots[birthMonth] || "Star";
    const ending = surnameEndings[phoneDigit] || "gleam";
    let name = `${firstName} ${root}${ending}`;
    if (includeTitle) {
      const title = titles[Math.floor(Math.random() * titles.length)];
      name += `, ${title}`;
    }
    setResult(name);
  }

  return (
    <div className="w-full py-16 px-6 md:px-20 bg-transparent text-black">
      <div className="max-w-4xl mx-auto border-4 border-yellow-900 p-10 rounded-3xl bg-yellow-100 bg-opacity-70 shadow-xl shadow-yellow-900/20">
        <h1 className="text-4xl font-bold mb-8 tracking-wide text-center">
          Brightwell Name Generator
        </h1>

        <div className="space-y-6">
          <label className="block">
            <span className="block text-lg font-semibold mb-1">First letter of your real name:</span>
            <input
              type="text"
              maxLength={1}
              value={firstLetter}
              onChange={(e) => setFirstLetter(e.target.value)}
              className="w-full md:w-1/3 border-2 border-yellow-900 bg-yellow-50 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-700 text-black"
            />
          </label>

          <label className="block">
            <span className="block text-lg font-semibold mb-1">Birth month:</span>
            <select
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              className="w-full md:w-1/3 border-2 border-yellow-900 bg-yellow-50 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-700 text-black"
            >
              {Object.keys(surnameRoots).map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="block text-lg font-semibold mb-1">Last digit of your phone number:</span>
            <input
              type="number"
              min={0}
              max={9}
              value={phoneDigit}
              onChange={(e) => setPhoneDigit(e.target.value)}
              className="w-full md:w-1/3 border-2 border-yellow-900 bg-yellow-50 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-700 text-black"
            />
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={includeTitle}
              onChange={() => setIncludeTitle(!includeTitle)}
              className="h-5 w-5 text-yellow-700 border-2 border-yellow-900 rounded focus:ring-yellow-700"
            />
            <span className="text-lg font-semibold">Add a legendary title?</span>
          </label>

          <div className="flex flex-col md:flex-row md:items-center md:gap-6 mt-6">
            <button
                onClick={generateName}
                className="bg-yellow-900 hover:bg-yellow-800 text-white px-6 py-3 text-lg rounded-lg transition-colors">
                Generate Name
            </button>

            {result && (
                <div className="mt-4 md:mt-0 text-2xl font-bold font-mono bg-yellow-200 inline-block px-6 py-4 rounded-xl border-2 border-yellow-900 text-center">
                {result}
                </div>
            )}
            </div>
        </div>
      </div>
    </div>
  );
}
