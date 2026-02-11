export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm text-muted">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
            Let&apos;s Build
          </p>
          <p className="mt-3 text-2xl font-display text-ink">
            Open for thoughtful collaborations and product work.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-[0.65rem] uppercase tracking-[0.3em]">
            <a
              href="mailto:oozayranci@gmail.com"
              className="transition hover:text-ink"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/oozan/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/oozan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-ink"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-ink">+358 41 488 9262</p>
          <p className="text-ink">oozayranci@gmail.com</p>
          <p>Helsinki, Finland</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[0.65rem] uppercase tracking-[0.3em] text-muted md:flex-row md:items-center">
        <span>© {year} Ozan Özayranci</span>
        <span>Crafted with Next.js and Tailwind</span>
      </div>
    </footer>
  );
}
