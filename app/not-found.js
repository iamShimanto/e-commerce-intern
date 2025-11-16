import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-7xl font-bold text-primary_color mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-black_main mb-3">
        Page Not Found
      </h2>
      <p className="text-secondary_color mb-8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>

      <Link
        href="/"
        className="px-8 py-3 rounded-full bg-primary_color text-white font-medium hover:bg-hardprimary transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
