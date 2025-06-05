import Image from "next/image";
import Games from "@/components/games";
import { data } from "@/data/fc";

export default function GamesFC() {
  return (
    <>
      <section
        id="fc-games"
        className="bg-[url(/img/hero-provider/FCBG.webp)] bg-cover bg-no-repeat"
      >
        <div className="max-w-[1350px] mx-auto py-5 px-4">
          <div className="mb-2 lg:mb-5">
            <Image
              src="/img/hero-provider/logo/FC.webp"
              width={83}
              height={34}
              alt="PG LOGO"
            />
          </div>
          <div>
            <h2 className="font-bold text-[#FFE207] mb-2 lg:mb-5">
              FA CHAI (FC GAMING) — CULTURALLY RICH THEMES,LIGHTHEARTED FUN, AND
              FAST PAYOUTS!
            </h2>
            <p className="text-white text-balance leading-5">
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
