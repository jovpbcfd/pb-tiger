import Image from "next/image";
import Link from "next/link";
import Games from "@/components/games";
import { data } from "@/data/jili";

export default function GamesJili() {
  return (
    <>
      <section
        id="jili-games"
        className="bg-[url(/img/hero-provider/JILIBG.webp)] bg-cover bg-no-repeat
        lg:bg-[url(/img/hero-provider/1920x500_JILI_HERO.webp)]
        "
      >
        <div className="max-w-[1200px] mx-auto py-5 px-4 lg:py-20">
          <Link href="#game-provider">
            <div className="mb-2 w-[83px] h-[34px] lg:w-[200px] lg:h-[80px] lg:mb-5">
              <Image
                src="/img/hero-provider/logo/JILI.webp"
                width={200}
                height={80}
                alt="JILI LOGO"
              />
            </div>
          </Link>
          <div>
            <h2
              className="font-bold text-[#FFE207] mb-2 lg:mb-5 lg:text-[24px]/7 
            lg:text-balance lg:w-[50%]"
            >
              A TOP CHOICE FOR ASIAN PLAYERS SEEKING EXPLOSIVE WINS AND FUN!
            </h2>
            <p
              className="text-white text-balance leading-5 lg:text-[18px]/6 
            lg:w-[60%]"
            >
              JILI is one of the most popular slot providers in the Asian
              market, known for fast-paced gameplay and high-payout potential.
              Their games offer smooth animations, rewarding combos, and are a
              favorite among Filipino players.
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
