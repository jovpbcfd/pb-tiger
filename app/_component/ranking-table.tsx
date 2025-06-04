import { data } from "@/data/ranking";

export default function RankingTable() {
  return (
    <div className="overflow-x-auto p-1 rounded-lg [background-image:linear-gradient(to_right,#D8A42E_0%,#9A490E_50%,#F7D341_75%,#FFF4C8_88%,#FFCE4B_94%,#F9B34F_97%,#D58C22_100%)]">
      <table className="min-w-full border-collapse [background-image:linear-gradient(to_bottom,#1F2460_0%,#2D3492_50%,#1F2460_100%)] text-white rounded-lg shadow-lg">
        <thead>
          <tr className="text-yellow-400 text-left text-sm sm:text-base">
            <th className="p-4">RANKING</th>
            <th className="p-4">DAILY</th>
            <th className="p-4">WEEKLY</th>
            <th className="p-4">MONTHLY</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-base font-medium">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="p-4 flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                {item.rank}
              </td>
              <td className="p-4">{item.daily}</td>
              <td className="p-4">{item.weekly}</td>
              <td className="p-4">{item.monthly}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
