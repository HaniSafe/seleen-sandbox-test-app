import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Dashboard Page</h1>
          <p className="mt-3 text-lg text-gray-600">
            Routing works correctly.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-emerald-600">
            Navigation Test
          </h2>
          <p className="mt-2 text-gray-700">
            This page confirms that Next.js App Router is working inside the
            sandbox. Client-side and server-side navigation both function
            correctly.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
