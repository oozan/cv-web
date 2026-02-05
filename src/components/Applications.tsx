interface ApplicationItem {
  name: string;
  subtitle: string;
  description: string;
  link: string;
  tags: string[];
}

const applications: ApplicationItem[] = [
  {
    name: "TrafiAuth",
    subtitle: "Secure gateway for microservices",
    description:
      "Reverse proxy with Traefik and a Go authentication service. Built to demonstrate secure routing, identity checks, and Docker-based deployments.",
    link: "https://github.com/oozan/TrafiAuth",
    tags: ["Go", "Traefik", "Docker"],
  },
  {
    name: "News-feed",
    subtitle: "Lightweight publishing flow",
    description:
      "A simple news reading and updating app that keeps teams informed with fast publishing and easy browsing.",
    link: "https://github.com/oozan/news-feed",
    tags: ["Web App", "Content", "Updates"],
  },
  {
    name: "MyVet",
    subtitle: "Clinic operations suite",
    description:
      "Veterinary clinic app designed to manage appointments, immunizations, and medical records in one streamlined workspace.",
    link: "https://github.com/oozan/myvet",
    tags: ["Scheduling", "Healthcare", "Records"],
  },
];

interface ApplicationsProps {
  showHeader?: boolean;
}

const Applications = ({ showHeader = true }: ApplicationsProps) => {
  return (
    <section className="space-y-6">
      {showHeader && (
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-display md:text-4xl">
              Applications
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            A curated set of projects focused on clarity, scalability, and
            meaningful user outcomes.
          </p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {applications.map((app, index) => (
          <article
            key={app.name}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-soft transition hover:border-gold/40"
          >
            <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.3em] text-muted">
              <span>{app.subtitle}</span>
              <span>0{index + 1}</span>
            </div>
            <h3 className="mt-4 text-2xl font-display text-ink">
              {app.name}
            </h3>
            <p className="mt-3 text-sm text-muted">{app.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-gold/80 transition hover:text-gold"
            >
              View Repository
              <span aria-hidden="true">→</span>
            </a>
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(214,179,106,0.2),transparent_70%)] opacity-0 blur-2xl transition group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Applications;
