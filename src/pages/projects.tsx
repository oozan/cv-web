import Applications from "@/components/Applications";

export default function Projects() {
  return (
    <section className="space-y-10">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft md:p-12">
        <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
          Projects
        </p>
        <h1 className="mt-4 text-4xl font-display md:text-5xl">
          Selected Work
        </h1>
        <p className="mt-6 text-lg text-muted">
          A focused collection of applications built for clarity, reliability,
          and real-world impact.
        </p>
      </div>
      <Applications showHeader={false} />
    </section>
  );
}
