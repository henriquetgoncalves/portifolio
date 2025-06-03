import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [
  { day: 'Day 1', weight: 70, pr: 300 },
  { day: 'Day 30', weight: 70, pr: 320 },
  { day: 'Day 60', weight: 70, pr: 345 },
];

export default function FitnessChart() {
  return (
    <div className="max-w-md mx-auto my-10" id="fitness">
      <h3 className="font-bold mb-2 text-center">CrossFit Progress</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Line dataKey="pr" stroke="#4ade80" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-center">Always chasing that 350 lbs deadlift.</p>
    </div>
  );
}
