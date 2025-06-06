import Link from "next/link";

export default function GamesProvider() {
  return (
    <section
      id="game-provider"
      className="bg-[url(/img/provider/PROVIDER_BG.webp)] bg-cover bg-center py-12 lg:py-20"
    >
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center gap-4">
        {[
          { href: "#jili-games", src: "JILI" },
          { href: "#pg-games", src: "PG" },
          { href: "#pp-games", src: "PP" },
          { href: "#fc-games", src: "FC" },
          { href: "#jdb-games", src: "JDB" },
        ].map(({ href, src }) => (
          <Link
            key={href}
            href={href}
            className={`w-[45%] sm:w-[30%] md:w-[18%] aspect-[2/3] bg-center bg-no-repeat bg-cover transition-all duration-300 
              bg-[url(/img/provider/${src}.webp)] 
              lg:bg-[url(/img/provider/v2/${src}.webp)]`}
          />
        ))}
      </div>
    </section>
  );
}

// import Link from "next/link";
// export default function GamesProvider() {
//   return (
//     <section className="bg-[url(/img/provider/PROVIDER_BG.webp)] bg-cover bg-center pb-12 lg:py-20">
//       <div className="max-w-[1350px] mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[156px]">
//         <div className="flex gap-x-4 md:gap-0">
//           <Link
//             href="#jili-games"
//             className="cursor-pointer w-[100px] h-[200px] lg:w-[250px] lg:h-[350px] bg-[url(/img/provider/JILI.webp)]
//             bg-center bg-no-repeat bg-cover lg:bg-[url(/img/provider/v2/JILI.webp)]"
//           ></Link>
//           <Link
//             href="#pg-games"
//             className="cursor-pointer w-[100px] h-[200px] lg:w-[250px] lg:h-[350px] bg-[url(/img/provider/PG.webp)]
//             bg-center bg-no-repeat bg-cover lg:bg-[url(/img/provider/v2/PG.webp)]"
//           ></Link>
//           <Link
//             href="#pp-games"
//             className="cursor-pointer w-[100px] h-[200px] lg:w-[250px] lg:h-[350px] bg-[url(/img/provider/PP.webp)]
//             bg-center bg-no-repeat bg-cover lg:bg-[url(/img/provider/v2/PP.webp)]"
//           ></Link>
//         </div>
//         <div className="flex">
//           <Link
//             href="#fc-games"
//             className="cursor-pointer w-[100px] h-[200px] lg:w-[250px] lg:h-[350px] bg-[url(/img/provider/FC.webp)]
//             bg-center bg-no-repeat bg-cover lg:bg-[url(/img/provider/v2/FC.webp)]"
//           ></Link>
//           <Link
//             href="#jdb-games"
//             className="cursor-pointer w-[100px] h-[200px] lg:w-[250px] lg:h-[350px] bg-[url(/img/provider/JDB.webp)]
//             bg-center bg-no-repeat bg-cover lg:bg-[url(/img/provider/v2/JDB.webp)]"
//           ></Link>
//         </div>
//       </div>
//     </section>
//   );
// }
