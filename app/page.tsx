import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Application",
  description: "Welcome to your Next.js app!",
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to your Next.js app!</h1>
    </main>
  );
}
