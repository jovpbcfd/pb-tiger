import Image from "next/image";
import Games from "@/components/games";
import { data } from "@/data/jili";

export default function GamesJili() {
  return (
    <>
      <section
        id="jili-games"
        className="bg-[url(/img/hero-provider/JILIBG.webp)] bg-cover bg-no-repeat"
      >
        <div className="max-w-[1350px] mx-auto py-5 px-4">
          <div className="mb-2 lg:mb-5">
            <Image
              src="/img/hero-provider/logo/JILI.webp"
              width={83}
              height={34}
              alt="PG LOGO"
            />
          </div>
          <div>
            <h2 className="font-bold text-[#FFE207] mb-2 lg:mb-5">
              A TOP CHOICE FOR ASIAN PLAYERSSEEKING EXPLOSIVE WINS AND FUN!
            </h2>
            <p className="text-white text-balance leading-5">
              JILI is one of the most popular slot providers in the Asian
              market, known for fast-paced gameplay and high-payout potential.
              Their games offer smooth animations, rewarding combos, and are a
              favorite among Filipino players.
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
