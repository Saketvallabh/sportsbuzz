interface Match {
  team1: string;
  team2: string;
  date: string;
  venue: string;
}

export default function ScheduleCard({ match }: { match: Match }) {
  return (
    <div
      className="bg-white shadow rounded-xl p-4 transform transition-transform duration-200 hover:scale-105"
    >
      <h2 className="text-lg font-semibold mb-2">
        {match.team1} vs {match.team2}
      </h2>
      <p className="text-sm text-gray-700">{match.date}</p>
      <p className="text-sm text-gray-700">{match.venue}</p>
    </div>
  );
}


