import Image from "next/image";
import Games from "@/components/games";
import { data } from "@/data/jdb";

export default function GamesJDB() {
  return (
    <>
      <section
        id="jdb-games"
        className="bg-[url(/img/hero-provider/JDBBG.webp)] bg-cover bg-no-repeat
        lg:bg-[url(/img/hero-provider/1920x500_JDB_HERO.webp)]
        "
      >
        <div className="max-w-[1350px] mx-auto py-5 px-4 lg:py-20">
          <div className="mb-2 w-[83px] h-[34px] lg:w-[259px] lg:h-[142px] lg:mb-5">
            <Image
              src="/img/hero-provider/logo/JDB.webp"
              width={259}
              height={142}
              alt="PG LOGO"
            />
          </div>
          <div>
            <h2 className="font-bold text-[#FFE207] mb-2 lg:mb-5 lg:text-[40px]/10 lg:text-balance">
              JDB GAMING — CLASSIC MEETS ARCADE: INNOVATION AND THRILLS IN EVERY
              SPIN!
            </h2>
            <p className="text-white text-balance leading-5 lg:text-[24px]/8 lg:w-[91%]">
              JDB blends traditional slot gameplay with arcade-style features,
              delivering unique and interactive games loved by players across
              Asia.For those seeking something different, JDB’s creative game
              mechanics are a breath of fresh air.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[url(/img/hero-provider/LAST_BG.webp)] bg-no-repeat bg-cover">
        <div className="max-w-[1350px] mx-auto py-5 px-4">
          <Games data={data} />
        </div>
      </section>
    </>
  );
}
