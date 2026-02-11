import type { NextPage } from "next";
import Link from "next/link";
import Profile from "@/components/Profile";
import Applications from "@/components/Applications";
import Articles from "@/components/Articles";

const principles = [
  {
    title: "Clarity",
    description:
      "Designs that feel calm, confident, and easy to navigate from the first glance.",
  },
  {
    title: "Reliability",
    description:
      "Thoughtful engineering that prioritizes performance, maintainability, and trust.",
  },
  {
    title: "Craft",
    description:
      "Refined details, from typography to motion, that elevate the overall experience.",
  },
];

const Home: NextPage = () => {
  return (
    <div className="space-y-16">
      <Profile />

      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
              Principles
            </p>
            <h2 className="mt-3 text-3xl font-display md:text-4xl">
              The Work Ethos
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            A luxury experience comes from restraint, consistency, and precision
            in the details.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-soft"
            >
              <h3 className="text-xl font-display text-ink">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm text-muted">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Applications />
      <Articles />

      <section className="rounded-[32px] border border-gold/20 bg-[linear-gradient(135deg,rgba(214,179,106,0.12),rgba(255,255,255,0.03))] p-8 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">
              Let&apos;s Build
            </p>
            <h2 className="mt-3 text-3xl font-display md:text-4xl">
              Ready to craft something exceptional?
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted">
              I&apos;m available for select collaborations, consulting, and product
              builds. Reach out to start the conversation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:oozayranci@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold transition hover:border-gold/80 hover:text-ink"
            >
              Email Me
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.3em] text-muted transition hover:border-gold/40 hover:text-ink"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
