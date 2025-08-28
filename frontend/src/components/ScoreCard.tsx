"use client";
import React from "react";

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

type ScoreCardProps = {
  scorecard: Scorecard | null;
  onClose: () => void;
};

const ScoreCard: React.FC<ScoreCardProps> = ({ scorecard, onClose }) => {
  if (!scorecard) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-5xl p-6 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold">{scorecard.matchTitle}</h2>
          <button
            onClick={onClose}
            className="text-red-600 font-bold hover:text-red-800"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-600 mb-4">{scorecard.status}</p>

        {scorecard.innings?.map((inning, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              {inning.team} - {inning.score}
            </h3>

            {/* batting */}
            <h4 className="font-medium">Batting</h4>
            <table className="w-full text-sm border mb-4">
              <thead className="bg-gray-100">
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
                {inning.batsmen?.map((b, i) => (
                  <tr key={i} className="text-center">
                    <td className="p-2 border text-left">{b.name}</td>
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
            <h4 className="font-medium">Bowling</h4>
            <table className="w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border text-left">Bowler</th>
                  <th className="p-2 border">O</th>
                  <th className="p-2 border">R</th>
                  <th className="p-2 border">W</th>
                  <th className="p-2 border">Econ</th>
                </tr>
              </thead>
              <tbody>
                {inning.bowlers?.map((bw, i) => (
                  <tr key={i} className="text-center">
                    <td className="p-2 border text-left">{bw.name}</td>
                    <td className="p-2 border">{bw.overs}</td>
                    <td className="p-2 border">{bw.runs}</td>
                    <td className="p-2 border">{bw.wickets}</td>
                    <td className="p-2 border">{bw.economy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCard;
