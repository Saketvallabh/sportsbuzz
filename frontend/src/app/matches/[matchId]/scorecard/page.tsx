"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Batsman = {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: string;
};

type Bowler = {
  name: string;
  overs: number;
  runs: number;
  wickets: number;
  economy: number;
};

type Inning = {
  team: string;
  score: string;
  batsmen: Batsman[];
  bowlers: Bowler[];
};

type Scorecard = {
  matchId: string;
  matchTitle: string;
  status: string;
  innings: Inning[];
};

const ScorecardPage: React.FC = () => {
  const { matchId } = useParams<{ matchId: string }>();
  const router = useRouter();
  const [scorecard, setScorecard] = useState<Scorecard | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/matches/${matchId}/scorecard`)
      .then((res) => res.json())
      .then((data) => setScorecard(data))
      .catch((err) => console.error("Error fetching scorecard", err));
  }, [matchId]);

  if (!scorecard) {
    return <p className="p-6">Loading scorecard...</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* back button to go to matches */}
      <button
        onClick={() => router.push("/matches")}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ← Back to Matches
      </button>

      {/* match title/team name + score */}
      <h1 className="text-2xl font-bold mb-2">{scorecard.matchTitle}</h1>
      <p className="text-gray-600 mb-6">{scorecard.status}</p>

      {/* innings sections */}
      {scorecard.innings.map((inning, idx) => (
        <div
          key={idx}
          className={`border rounded-xl mb-6 shadow bg-blue-50 transform transition-all duration-300 
                      ${expanded === idx ? "scale-105" : "hover:scale-105"}`}
          onClick={() => setExpanded(expanded === idx ? null : idx)} // entire card clickable
        >
          {/* header */}
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-blue-100 hover:bg-blue-200 rounded-t-xl"
          >
            <span className="font-semibold text-blue-900">
              {inning.team} — {inning.score}
            </span>
            <span>{expanded === idx ? "▲" : "▼"}</span>
          </div>

          {/* expandable scorecard */}
          {expanded === idx && (
            <div className="p-4">
              {/* batting */}
              <h4 className="font-medium mb-2 text-gray-800">Batting</h4>
              <table className="w-full text-sm border rounded-xl overflow-hidden mb-4 shadow-md">
                <thead className="bg-blue-200 text-blue-900">
                  <tr>
                    <th className="p-2 border text-left">Batsman</th>
                    <th className="p-2 border">R</th>
                    <th className="p-2 border">B</th>
                    <th className="p-2 border">4s</th>
                    <th className="p-2 border">6s</th>
                    <th className="p-2 border">SR</th>
                  </tr>
                </thead>
                <tbody>
                  {inning.batsmen.map((b, i) => (
                    <tr
                      key={i}
                      className="text-center hover:bg-blue-50 transition cursor-pointer"
                    >
                      <td className="p-2 border text-left text-blue-600 font-semibold">
                        {b.name}
                      </td>
                      <td className="p-2 border">{b.runs}</td>
                      <td className="p-2 border">{b.balls}</td>
                      <td className="p-2 border">{b.fours}</td>
                      <td className="p-2 border">{b.sixes}</td>
                      <td className="p-2 border">{b.strikeRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* bowling */}
              <h4 className="font-medium mb-2 text-gray-800">Bowling</h4>
              <table className="w-full text-sm border rounded-xl overflow-hidden shadow-md">
                <thead className="bg-blue-200 text-blue-900">
                  <tr>
                    <th className="p-2 border text-left">Bowler</th>
                    <th className="p-2 border">O</th>
                    <th className="p-2 border">R</th>
                    <th className="p-2 border">W</th>
                    <th className="p-2 border">Econ</th>
                  </tr>
                </thead>
                <tbody>
                  {inning.bowlers.map((bw, i) => (
                    <tr
                      key={i}
                      className="text-center hover:bg-blue-50 transition cursor-pointer"
                    >
                      <td className="p-2 border text-left text-blue-600 font-semibold">
                        {bw.name}
                      </td>
                      <td className="p-2 border">{bw.overs}</td>
                      <td className="p-2 border">{bw.runs}</td>
                      <td className="p-2 border">{bw.wickets}</td>
                      <td className="p-2 border">{bw.economy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ScorecardPage;
