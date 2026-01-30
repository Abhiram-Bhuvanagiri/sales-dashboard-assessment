import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">
        Sales Dashboard Assessment
      </h1>

      <Link
        href="/dashboard"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl"
      >
        Go to Dashboard →
      </Link>
    </main>
  );
}
