export default function GamesProvider() {
  return (
    <section className="bg-[url(/img/provider/PROVIDER_BG.webp)] bg-cover bg-center pb-12 lg:pb-20">
      <div className="max-w-[1350px] mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[156px]">
        <div className="flex">
          <div className="w-[100px] h-[200px] lg:w-[250px] lg:h-[300px] bg-[url(/img/provider/JILI.webp)] bg-center bg-no-repeat bg-cover"></div>
          <div className="w-[100px] h-[200px] lg:w-[250px] lg:h-[300px] bg-[url(/img/provider/PG.webp)] bg-center bg-no-repeat  bg-cover"></div>
          <div className="w-[100px] h-[200px] lg:w-[250px] lg:h-[300px] bg-[url(/img/provider/PP.webp)] bg-center bg-no-repeat  bg-cover"></div>
        </div>
        <div className="flex">
          <div className="w-[100px] h-[200px] lg:w-[250px] lg:h-[300px] bg-[url(/img/provider/FC.webp)] bg-center bg-no-repeat  bg-cover"></div>
          <div className="w-[100px] h-[200px] lg:w-[250px] lg:h-[300px] bg-[url(/img/provider/JDB.webp)] bg-center bg-no-repeat  bg-cover"></div>
        </div>
      </div>
    </section>
  );
}
