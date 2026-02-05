/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <section className="space-y-10">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft md:p-12">
        <p className="text-xs uppercase tracking-[0.4em] text-gold/70">About</p>
        <h1 className="mt-4 text-4xl font-display md:text-5xl">About Me</h1>
        <p className="mt-6 text-lg text-muted">
          Hello! I'm Ozan Özayranci, a passionate software developer
          specializing in frontend and full-stack development.
        </p>
        <p className="mt-4 text-lg text-muted">
          I love creating elegant, user-friendly interfaces and innovative
          solutions that make teams feel confident in what they ship.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Thoughtful Interfaces",
            description:
              "Designing experiences that feel intuitive, balanced, and intentional.",
          },
          {
            title: "Modern Engineering",
            description:
              "Building with performance, accessibility, and long-term quality in mind.",
          },
          {
            title: "Collaborative Energy",
            description:
              "Partnering with teams to craft solutions that are both elegant and durable.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-soft"
          >
            <h2 className="text-xl font-display text-ink">{item.title}</h2>
            <p className="mt-3 text-sm text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
