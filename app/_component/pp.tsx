import Image from "next/image";
import Link from "next/link";
import Games from "@/components/games";
import { data } from "@/data/pp";

export default function GamesPP() {
  return (
    <>
      <section
        id="pp-games"
        className="bg-[url(/img/hero-provider/PPBG.webp)] bg-cover bg-no-repeat
        lg:bg-[url(/img/hero-provider/1920x500_PP_HERO.webp)]
        "
      >
        <div className="max-w-[1350px] mx-auto py-5 px-4 lg:py-20">
          <Link href="#game-provider">
            <div className="mb-2 w-[83px] h-[34px] lg:w-[367px] lg:h-[176px] lg:mb-5">
              <Image
                src="/img/hero-provider/logo/PP.webp"
                width={367}
                height={176}
                alt="PG LOGO"
              />
            </div>
          </Link>
          <div>
            <h2 className="font-bold text-[#FFE207] mb-2 lg:mb-5 lg:text-[40px]/10 lg:text-balance">
              PRAGMATIC PLAY — WORLD-CLASS SLOTS WITH FAST ACTION AND BIG
              BONUSES!
            </h2>
            <p className="text-white text-balance leading-5 lg:text-[24px]/8 lg:w-[91%]">
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
