import Hero from "./components/Hero";
import Post from "./components/Post";
import Skills from "./components/Skills";
import Toggle from "./components/Toggle";

export default function Home() {
  return (
    <main className="w-full h-full bg-background dark:bg-background_dark">
      <div className="h-14 w-11/12 mx-auto bg-background dark:bg-background_dark sticky top-0 z-10 border-b-2 border-gray-300 dark:border-gray-600  ">
        <div className="flex justify-between items-center h-full w-full">
          <div className=""></div>
          <Toggle />
        </div>
      </div>

      <Hero />
      <Skills />
      <Post />
    </main>
  );
}
