export default function Contact() {
  return (
    <section className="space-y-10">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft md:p-12">
        <p className="text-xs uppercase tracking-[0.4em] text-gold/70">Contact</p>
        <h1 className="mt-4 text-4xl font-display md:text-5xl">
          Let&apos;s Connect
        </h1>
        <p className="mt-6 text-lg text-muted">
          Feel free to reach out for collaborations, consulting, or product
          conversations. I&apos;m always happy to meet new teams and ideas.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-soft">
          <h2 className="text-2xl font-display text-ink">Direct Lines</h2>
          <p className="mt-4 text-sm text-muted">
            The quickest way to reach me is via email or phone. I&apos;ll respond as
            soon as I&apos;m able.
          </p>
          <div className="mt-6 space-y-3 text-sm text-ink">
            <p>oozayranci@gmail.com</p>
            <p>+358 41 488 9262</p>
            <p>Helsinki, Finland</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-soft">
          <h2 className="text-2xl font-display text-ink">Elsewhere</h2>
          <p className="mt-4 text-sm text-muted">
            Follow along for updates, open-source work, and new releases.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-[0.7rem] uppercase tracking-[0.3em] text-muted">
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
      </div>
    </section>
  );
}
