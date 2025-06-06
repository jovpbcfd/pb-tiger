// import Image from "next/image";
import RankingTable from "./ranking-table";
import VisualizeChart from "./visualize-chart";
import Conquer from "./conquer";

export default function Visualization() {
  return (
    <div className="bg-[url(/img/BG-2.webp)] bg-no-repeat bg-cover w-full">
      <section className="pb-12 pt-16 lg:pb-20 lg:pt-42">
        <div className="max-w-[1200px] mx-auto relative p-1">
          <div className="bg-[url(/img/TITLE.webp)] bg-center bg-no-repeat bg-contain left-0 right-0 mx-auto w-[322px] h-[61px] absolute -top-10 lg:-top-30 lg:w-full lg:h-[200px]"></div>
          <RankingTable />
        </div>
      </section>
      <section className="pb-12 lg:pb-20">
        <div className="bg-[url(/img/TITLE.webp)] mx-auto bg-center bg-no-repeat bg-contain  w-[322px] h-[61px] lg:w-full lg:h-[200px]"></div>
        <div className="p-4">
          <div
            className="max-w-[1200px] mx-auto 
            [background-image:linear-gradient(to_right,#D8A42E_0%,#9A490E_50%,#F7D341_75%,#FFF4C8_88%,#FFCE4B_94%,#F9B34F_97%,#D58C22_100%)] p-1
          lg:p-3 rounded-lg
          "
          >
            <VisualizeChart />
          </div>
        </div>
      </section>
      <section className="pb-12 lg:pb-20">
        <div className="p-4">
          <div className="max-w-[1200px] mx-auto bg-[#252B73] rounded-[23px] border-2 border-[#5E69E4] px-2 py-8 lg:py-15">
            <h3 className="text-[#FFE207] text-center font-bold mb-2 lg:text-[30px]/9 text-balance lg:w-[80%] lg:mx-auto lg:mb-8">
              HOW TO CONQUER THE TIGER RANKING — PLAY SMART, WIN BIG!
            </h3>
            <p className="text-white mb-5 text-center text-[12px] lg:text-[18px]/6">
              Want to break into the Tiger Ranking and claim the crown? Here’s
              how to boost your chances:
            </p>
            <div>
              <Conquer />
            </div>
            <div className="w-[80%] mx-auto lg:mt-4">
              <p className="text-[#FFE207] text-center lg:text-[18px]/6">
                The Tiger Ranking isn’t about who bets the most — it’s about who
                hits the hardest. One spin is all it takes. Are you ready?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
