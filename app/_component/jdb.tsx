import Image from "next/image";
import Link from "next/link";
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
        <div className="max-w-[1200px] mx-auto py-5 px-4 lg:py-20">
          <Link href="#game-provider">
            <div className="mb-2 w-[83px] h-[34px] lg:w-[200px] lg:h-[100px] lg:mb-8">
              <Image
                src="/img/hero-provider/logo/JDB.webp"
                width={200}
                height={100}
                alt="PG LOGO"
              />
            </div>
          </Link>
          <div>
            <h2 className="font-bold text-[#FFE207] mb-2 lg:mb-5 lg:text-[24px]/7 lg:text-balance lg:w-[50%]">
              JDB GAMING — CLASSIC MEETS ARCADE: INNOVATION AND THRILLS IN EVERY
              SPIN!
            </h2>
            <p className="text-white text-balance leading-5 lg:text-[18px]/6 lg:w-[60%]">
              JDB blends traditional slot gameplay with arcade-style features,
              delivering unique and interactive games loved by players across
              Asia.For those seeking something different, JDB’s creative game
              mechanics are a breath of fresh air.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[url(/img/hero-provider/LAST_BG.webp)] bg-no-repeat bg-cover">
        <div className="max-w-[1200px] mx-auto py-5 px-4">
          <Games data={data} />
        </div>
      </section>
    </>
  );
}
