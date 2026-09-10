import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16 text-center">
      <div>
        <p className="font-heading text-6xl font-extrabold text-slate-950">404</p>
        <h1 className="mt-3 font-heading text-xl font-bold text-slate-950">This page doesn&apos;t exist</h1>
        <p className="mt-2 text-slate-600">
          The page you&apos;re looking for may have moved. Head back to the homepage.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-amber px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-dark hover:text-white"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
