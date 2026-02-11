import Image from "next/image";

const Profile = () => {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft md:p-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-6 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(214,179,106,0.25),transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(120,142,132,0.2),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold/80">
            Software Engineer
          </p>
          <h1 className="mt-4 text-4xl font-display md:text-6xl">
            Ozan Özayranci
          </h1>
          <p className="mt-4 text-lg text-muted">
            I build modern web apps that combine clean engineering with a calm,
            premium user experience. I enjoy solving complex problems, creating
            intuitive interfaces, and shipping solutions that scale.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["Full-stack", "Web Apps", "Problem Solver"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-muted"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:oozayranci@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold transition hover:border-gold/80 hover:text-ink"
            >
              Let&apos;s Talk
            </a>
            <a
              href="/OzanOzayranciResume.pdf"
              download="OzanOzayranciResume.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.3em] text-muted transition hover:border-gold/40 hover:text-ink"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 grid gap-4 text-sm text-muted sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/70">
                Location
              </p>
              <p className="mt-2 text-base text-ink">Helsinki, Finland</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/70">
                Contact
              </p>
              <p className="mt-2 text-base text-ink">+358 41 488 9262</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/15 shadow-soft">
            <Image
              src="/Ozan.jpeg"
              alt="Portrait of Ozan Özayranci"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted">
            <a
              href="https://github.com/oozan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-ink"
            >
              GitHub
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
              href="mailto:oozayranci@gmail.com"
              className="transition hover:text-ink"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
