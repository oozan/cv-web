import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter();

  return (
    <div className="relative min-h-screen bg-background text-ink">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(214,179,106,0.28),transparent_70%)] blur-3xl" />
        <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(120,142,132,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(130,120,100,0.18),transparent_70%)] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_40%,rgba(255,255,255,0.02)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6">
        <header className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-base">
              OO
            </span>
            Ozan Özayranci
          </Link>

          <nav className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.3em]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition ${
                    isActive ? "text-gold" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/OzanOzayranciResume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-gold transition hover:border-gold/70 hover:text-ink"
              download="OzanOzayranciResume.pdf"
            >
              Resume
              <span className="text-[0.6rem]">PDF</span>
            </a>
          </nav>
        </header>

        <main className="flex-1 pb-16">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
