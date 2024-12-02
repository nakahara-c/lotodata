import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  const results = await prisma.results.findMany({
    orderBy: {
      draw_date: 'desc',
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <h1 className="text-4xl font-bold mb-4">lotodata.net</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>種類</th>
            <th>抽選日</th>
            <th>回号</th>
            <th>本数字1</th>
            <th>本数字2</th>
            <th>本数字3</th>
            <th>本数字4</th>
            <th>本数字5</th>
            <th>本数字6</th>
            <th>本数字7</th>
            <th>ボーナス数字1</th>
            <th>ボーナス数字2</th>
            <th>口数</th>
            <th>当せん金額</th>
            <th>キャリーオーバー</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={`${r.kind}-${r.draw_number}`}
              className={r.kind === 'L7' ? 'bg-green-100' : 'bg-blue-100'}
            >
              <td>{r.kind === 'L7' ? 'ロト7' : 'ロト6'}</td>
              <td>{new Date(r.draw_date).toISOString().slice(0, 10)}</td>
              <td>{r.draw_number}</td>
              <td>
                {r.number1}
              </td>
              <td>
                {r.number2}
              </td>
              <td>
                {r.number3}
              </td>
              <td>
                {r.number4}
              </td>
              <td>
                {r.number5}
              </td>
              <td>
                {r.number6}
              </td>
              <td>
                {r.number7 ?? ''}
              </td>
              <td>
                {r.bonus1}
              </td>
              <td>
                {r.bonus2 ?? ''}
              </td>
              <td>{r.winning_tickets || 'N/A'}</td>
              <td>{r.prize_amount || 'N/A'}</td>
              <td>{r.carryover || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
