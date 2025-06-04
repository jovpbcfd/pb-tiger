import Image from "next/image";
import Games from "@/components/games";
import { data } from "@/data/pp";

export default function GamesPP() {
  return (
    <>
      <section className="bg-[url(/img/hero-provider/PPBG.webp)] bg-cover bg-no-repeat">
        <div className="max-w-[1350px] mx-auto py-5 px-4">
          <div className="mb-2 lg:mb-5">
            <Image
              src="/img/hero-provider/logo/PP.webp"
              width={83}
              height={34}
              alt="PG LOGO"
            />
          </div>
          <div>
            <h2 className="font-bold text-[#FFE207] mb-2 lg:mb-5">
              PRAGMATIC PLAY — WORLD-CLASS SLOTS WITH FAST ACTION AND BIG
              BONUSES!
            </h2>
            <p className="text-white text-balance leading-5">
              Pragmatic Play delivers high-volatility, high-reward gameplay with
              strong global fan bases.Their signature Buy Bonus and multiplier
              features make them a go-to for thrill-seeking players.
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
