import Hero from "./components/Hero";
import Post from "./components/Post";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="w-full h-full bg-background dark:bg-background_dark">
      <Hero />
      <Skills />
      <Post />
    </main>
  );
}
