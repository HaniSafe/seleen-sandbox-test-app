import Link from "next/link";
import MyWorkGallery from "@/components/MyWorkGallery";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Seleen Sandbox Test
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            If you can see this, the sandbox is working.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-indigo-600">
            Isolated Preview Environment
          </h2>
          <p className="mt-2 text-gray-700">
            This is a customer&apos;s Next.js app running in an isolated Seleen
            sandbox. The AI agent can modify files in this environment, and
            changes appear here via hot reload.
          </p>
        </div>

        <MyWorkGallery />

        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Server rendered at
          </p>
          <p className="mt-1 text-2xl font-mono font-semibold">
            {new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })}
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Dashboard
          </Link>
          <a
            href="/api/hello"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Test API Route
          </a>
        </div>
      </div>
    </main>
  );
}