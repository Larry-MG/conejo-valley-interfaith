import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-serif text-sage/30 mb-4">404</p>
        <h1 className="font-serif text-3xl text-charcoal mb-4">
          Page Not Found
        </h1>
        <p className="text-warm-gray mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-sage hover:bg-deep-forest rounded-full transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
