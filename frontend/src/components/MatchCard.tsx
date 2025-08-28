// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// export interface Match {
//   matchId: string;
//   team1: string;
//   team2: string;
//   date: string;
//   venue: string;
//   status: string;
// }

// type MatchCardProps = {
//   match: Match;
// };

// export default function MatchCard({ match }: MatchCardProps) {
//   const router = useRouter();

//   return (
//     <div
//       className="bg-white shadow rounded-xl p-4 cursor-pointer 
//                  transform transition-all duration-300 
//                  hover:scale-105 hover:shadow-xl"
//       onClick={() => router.push(`/matches/${match.matchId}/scorecard`)}
//     >
//       <h2 className="text-lg font-semibold mb-2">
//         {match.team1} vs {match.team2}
//       </h2>
//       <p className="text-sm text-gray-700">{match.date}</p>
//       <p className="text-sm text-gray-700">{match.venue}</p>
//       <p className="text-blue-600 font-semibold mt-2">{match.status}</p>
//     </div>
//   );
// }
"use client";
import React from "react";

export interface Match {
  matchId: string;          // <-- needed for your fetch
  team1: string;
  team2: string;
  date: string;
  venue: string;
  status: string;
}

export type MatchCardProps = {
  match: Match;
  /** Optional click handler (used to open modal / fetch scorecard) */
  onClick?: () => void;     // <-- add this
};

export default function MatchCard({ match, onClick }: MatchCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow rounded-xl p-4 cursor-pointer 
                 transform transition-transform duration-200 hover:scale-105"
      role="button"
      aria-label={`${match.team1} vs ${match.team2} – open scorecard`}
    >
      <h2 className="text-lg font-semibold mb-2">
        {match.team1} vs {match.team2}
      </h2>
      <p className="text-sm text-gray-700">{match.date}</p>
      <p className="text-sm text-gray-700">{match.venue}</p>
      <p className="text-blue-600 font-semibold mt-2">{match.status}</p>
    </div>
  );
}
