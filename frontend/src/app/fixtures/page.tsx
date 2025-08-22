"use client";

import { useEffect, useState } from "react";

type Match = {
  id: number;
  team_a: string;
  team_b: string;
  venue: string;
  raw_date: string;
  status: string;
};

export default function FixturesPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/fixtures`)
      .then((res) => res.json())
      .then((data) => {
        setMatches(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching fixtures:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading fixtures...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Upcoming Fixtures</h1>
      <ul className="space-y-4">
        {matches.map((match) => (
          <li key={match.id} className="p-4 border rounded-lg shadow">
            <p className="font-semibold">{match.team_a} vs {match.team_b}</p>
            <p className="text-sm text-gray-600">{match.venue}</p>
            <p className="text-sm text-gray-500">{match.raw_date}</p>
            <span className="text-xs bg-blue-100 px-2 py-1 rounded">
              {match.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
