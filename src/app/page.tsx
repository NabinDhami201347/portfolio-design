import { Hero, Post, Skills } from "@/components";

export default function Home() {
  return (
    <main className="w-full h-full bg-background dark:bg-background_dark">
      <Hero />
      <Skills />
      <Post />
      <Skills />
      <Post />
      <Skills />
    </main>
  );
}
