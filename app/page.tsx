import Hero from "./_component/hero";
import Visualization from "./_component/visualization";
import GamesProvider from "./_component/game-provider";
import GamesJili from "./_component/jili";
import GamesPG from "./_component/pg";
import GamesPP from "./_component/pp";
import GamesFC from "./_component/fc";
import GamesJDB from "./_component/jdb";

export default function Home() {
  return (
    <>
      <Hero />
      <Visualization />
      <GamesProvider />
      <GamesJili />
      <GamesPG />
      <GamesPP />
      <GamesFC />
      <GamesJDB />
    </>
  );
}
