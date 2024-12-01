export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">lotodata.net</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>宝くじ</th>
            <th>当選金</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ロト6</td>
            <td>1等 1億円</td>
          </tr>
          <tr>
            <td>ロト7</td>
            <td>1等 1億円</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
