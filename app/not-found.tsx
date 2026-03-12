import { createSEO } from "@/lib/seo";

export const metadata = createSEO({
  title: "Not found",
  description: "Learn more about my experience, skills, and background.",
});

export default function NotFound() {
  return (
    <main className="h-[calc(100vh-4rem)] lg:max-w-md mx-auto flex justify-center items-center gap-6">
      <h1 className="lg:text-4xl text-2xl font-semibold mb-4 text-center px-4 text-black dark:text-white">
        The page you're looking for can't be found.
      </h1>
    </main>
  );
}
