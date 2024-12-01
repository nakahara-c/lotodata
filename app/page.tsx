import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  const results = await prisma.results.findMany({
    where: {
      draw_date: {
        gte: new Date('2022-01-01'),
        lt: new Date('2022-12-31'),
      },
    },
    orderBy: {
      draw_date: 'asc',
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">lotodata.net</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>抽選日</th>
            <th>回号</th>
            <th>当せん番号</th>
            <th>ボーナス数字</th>
            <th>口数</th>
            <th>当せん金額</th>
            <th>キャリーオーバー</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={`${r.id}-${r.draw_number}`}>
              <td>{new Date(r.draw_date).toISOString().slice(0, 10)}</td>
              <td>{r.draw_number}</td>
              <td>
                {r.number1} {r.number2} {r.number3} {r.number4} {r.number5} {r.number6} {r.number7}
              </td>
              <td>
                {r.bonus1 && r.bonus2
                  ? `${r.bonus1}, ${r.bonus2}`
                  : r.bonus1 || r.bonus2 || 'N/A'}
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
