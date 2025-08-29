// "use client";
// import React, { useEffect, useState } from "react";
// import MatchCard, { Match } from "../../components/MatchCard";
// import ScoreCard from "../../components/ScoreCard";

// type Scorecard = {
//   matchId: string;
//   matchTitle: string;
//   status: string;
//   innings: any[];
// };

// const MatchesPage: React.FC = () => {
//   const [matches, setMatches] = useState<Match[]>([]);
//   const [selectedScorecard, setSelectedScorecard] = useState<Scorecard | null>(null);

//   useEffect(() => {
//     fetch("http://localhost:3001/api/matches")
//       .then((res) => res.json())
//       .then((data) => setMatches(data.matches));
//   }, []);

//   const handleMatchClick = async (matchId: string) => {
//     try {
//       const res = await fetch(`http://localhost:3001/api/matches/${matchId}/scorecard`);
//       const data = await res.json();
//       setSelectedScorecard(data);
//     } catch (err) {
//       console.error("Failed to fetch scorecard", err);
//     }
//   };

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {matches.map((match) => (
//         <MatchCard key={match.matchId} match={match} />
//       ))}

//       <ScoreCard
//         scorecard={selectedScorecard}
//         onClose={() => setSelectedScorecard(null)}
//       />
//     </div>
//   );
// };

// export default MatchesPage;

"use client";
import React, { useEffect, useState } from "react";
import MatchCard, { Match } from "../../components/MatchCard";

const MatchesPage: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/matches`)
      .then((res) => res.json())
      .then((data) => setMatches(data.matches))
      .catch((err) => console.error("Failed to fetch matches", err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {matches.map((match) => (
        <MatchCard
          key={match.matchId}
          match={match}
          // since ScoreCard is a page, we navigate instead of modal
          onClick={() =>
            window.location.assign(`/matches/${match.matchId}/scorecard`)
          }
        />
      ))}
    </div>
  );
};

export default MatchesPage;

