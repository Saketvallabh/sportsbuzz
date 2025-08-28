"use client";

import { useEffect, useState } from "react";
import PointsTable from "../../components/PointsTable";

interface Team {
  team: string;
  played: number;
  won: number;
  lost: number;
  points: number;
  nrr: string;
}

export default function PointsTablePage() {
  const [table, setTable] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/points-table`)
      .then((res) => res.json())
      .then((data) => {
        setTable(data.pointsTable || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading points table...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Points Table</h1>
      <PointsTable teams={table} />
    </div>
  );
}
