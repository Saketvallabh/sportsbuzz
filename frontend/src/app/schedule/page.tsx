"use client";

import { useEffect, useState } from "react";
import ScheduleCard from "../../components/ScheduleCard";

interface Match {
  team1: string;
  team2: string;
  date: string;
  venue: string;
}

export default function SchedulePage() {
  const [schedule, setSchedule] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule`)
      .then((res) => res.json())
      .then((data) => {
        setSchedule(data.schedule || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading schedule...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Schedule</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {schedule.map((match, i) => (
          <ScheduleCard key={i} match={match} />
        ))}
      </div>
    </div>
  );
}
