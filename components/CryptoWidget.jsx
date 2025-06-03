import useSWR from 'swr';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CryptoWidget() {
  const { data } = useSWR(
    'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1',
    fetcher,
    { refreshInterval: 60000 }
  );
  const prices = data?.prices?.map(([t, p]) => ({ t, p })) || [];
  return (
    <div className="max-w-sm mx-auto my-10">
      <h3 className="font-bold mb-2 text-center">BTC Price (24h)</h3>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={prices}>
          <Line dataKey="p" stroke="#f7931a" dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-center">Powered by public CoinGecko API</p>
    </div>
  );
}
