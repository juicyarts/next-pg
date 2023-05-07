import Link from 'next/link';

export default function Main() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Doing this and that with next.js and vercel
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              playground setup including: next.js on vercel, clerk auth & drizzle to manage vercel postgres storage over
              server actions
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/dashboard"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Dashboard
              </Link>
              <a
                target="_blank"
                href="https://github.com/juicyarts/next-pg"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Go to repo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
