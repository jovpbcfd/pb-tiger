import Image from "next/image";
import Link from "next/link";
import Games from "@/components/games";
import { data } from "@/data/pg";

export default function GamesPG() {
  return (
    <>
      <section
        id="pg-games"
        className="bg-[url(/img/hero-provider/PGBG.webp)] bg-cover bg-no-repeat
        lg:bg-[url(/img/hero-provider/1920x500_PG_HERO.webp)]
        "
      >
        <div className="max-w-[1200px] mx-auto py-5 px-4 lg:py-20">
          <Link href="#game-provider">
            <div className="mb-2 w-[83px] h-[34px] lg:w-[207px] lg:h-[90px] lg:mb-8">
              <Image
                src="/img/hero-provider/logo/PG.webp"
                width={207}
                height={90}
                alt="PG LOGO"
              />
            </div>
          </Link>
          <div>
            <h2
              className="font-bold text-[#FFE207] mb-2 lg:mb-5 
            lg:text-[24px]/7 lg:text-balance lg:w-[50%]"
            >
              PG SOFT — PREMIUM GRAPHICS, ENGAGING MECHANICS,AND MOBILE-FRIENDLY
              PERFECTION!
            </h2>
            <p className="text-white text-balance leading-5 lg:text-[18px]/6 lg:w-[60%]">
              PG Soft is famous for its high-quality visuals, creative game
              logic, and seamless mobile experience. Their games appeal to young
              and stylish players who appreciate aesthetics and features in
              equal measure.
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
