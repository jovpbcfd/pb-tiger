import Image from "next/image";
import Link from "next/link";
import { GamesType } from "@/data/jili";

export default function Games({ data }: { data: GamesType[] }) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center mb-5 lg:gap-x-10 lg:flex-row"
        >
          <Link href={item.gameLink}>
            <div className="flex items-center justify-center h-full w-[300px] mb-2">
              <Image src={item.img} height={300} width={300} alt={item.title} />
            </div>
          </Link>
          <div>
            <h3 className="text-[#FFE207] text-center mb-2 font-bold text-3xl text-uppercase lg:text-left lg:text-[30px]">
              {item.title}
            </h3>
            <p className="text-white mb-3 text-center text-justify">
              {item.description}
            </p>
            <div className="text-justify">
              <p className="mb-2">
                <span className="text-[#FFE207] font-bold">Highlights: </span>{" "}
                <span className="text-white">{item.sub1}</span>
              </p>
              <p>
                <span className="text-[#FFE207] font-bold">Best For:</span>{" "}
                <span className="text-white">{item.sub2}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
