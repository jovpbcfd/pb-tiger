import Image from "next/image";
import Link from "next/link";
import Games from "@/components/games";
import { data } from "@/data/fc";

export default function GamesFC() {
  return (
    <>
      <section
        id="fc-games"
        className="bg-[url(/img/hero-provider/FCBG.webp)] bg-cover bg-no-repeat
        lg:bg-[url(/img/hero-provider/1920x500_FC_HERO.webp)]
        "
      >
        <div className="max-w-[1350px] mx-auto py-5 px-4 lg:py-20">
          <Link href="#game-provider">
            <div className="mb-2 w-[83px] h-[34px] lg:w-[285px] lg:h-[154px] lg:mb-5">
              <Image
                src="/img/hero-provider/logo/FC.webp"
                width={285}
                height={154}
                alt="PG LOGO"
              />
            </div>
          </Link>
          <div>
            <h2 className="font-bold text-[#FFE207] mb-2 lg:mb-5 lg:text-[40px]/10 lg:text-balance">
              FA CHAI (FC GAMING) — CULTURALLY RICH THEMES,LIGHTHEARTED FUN, AND
              FAST PAYOUTS!
            </h2>
            <p className="text-white text-balance leading-5 lg:text-[24px]/8 lg:w-[91%]">
              FC Gaming specializes in quirky, colorful slots inspired by Asian
              themes. Easy to play with fun designs, FC games are ideal for
              players who enjoy cheerful vibes and fast rewards.
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
