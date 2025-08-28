interface Team {
  team: string;
  played: number;
  won: number;
  lost: number;
  points: number;
  nrr: string;
}

export default function PointsTable({ teams }: { teams: Team[] }) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded-xl">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Team</th>
            <th className="p-2">P</th>
            <th className="p-2">W</th>
            <th className="p-2">L</th>
            <th className="p-2">Pts</th>
            <th className="p-2">NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((t, i) => (
            <tr key={i} className="text-center border-t">
              <td className="p-2 text-left">{t.team}</td>
              <td>{t.played}</td>
              <td>{t.won}</td>
              <td>{t.lost}</td>
              <td className="font-bold">{t.points}</td>
              <td>{t.nrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
