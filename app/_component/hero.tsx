import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[url(/img/SECTION-BG.webp)] py-5 px-4 lg:px-0">
      <div className="max-w-[1350px] mx-auto flex flex-col-reverse justify-between items-center lg:flex-row">
        <div className="text-white w-full lg:w-[45%]">
          <h1 className="text-[#FFE207] text-xl text-center lg:text-left lg:text-[48px] font-bold mb-2 lg:mb-5">
            🎯 PANALOBET JUNE TIGER RANKING BOOST
          </h1>
          <p className="text-center lg:text-left lg:text-[32px]/10 font-bold mb-2 lg:mb-5">
            TIGER RANKING JUST GOT BIGGER! MORE WINNERS, MORE PRIZES — NOW
            REWARDING THE TOP 5 DAILY, WEEKLY, AND MONTHLY PLAYERS
          </p>
          <div>
            <p className="text-center lg:text-[18px]/7 lg:text-left text-[#FFE207] mb-2 lg:mb-5">
              CLIMB THE RANKS, HIT MASSIVE MULTIPLIERS, AND TAKE HOME YOUR SHARE
              OF OVER ₱180,000 THIS JUNE!
            </p>
            <p className="text-center lg:text-[18px]/7 lg:text-left mb-2 lg:mb-5">
              🔥 START SPINNING. START WINNING. YOUR NAME BELONGS ON THE
              LEADERBOARD!
            </p>
          </div>
        </div>
        <div className="w-[133px] h-[133px] lg:w-[573px] lg:h-[573px] border-dashed border-gray-500 rounded-md flex items-center justify-center">
          <Image
            src="/img/HERO SECTION IMAGE.webp"
            width={573}
            height={573}
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
}
