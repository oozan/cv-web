interface ArticleProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
}

const Article = ({ title, description, tags, date }: ArticleProps) => {
  return (
    <article className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted">
            {date}
          </p>
          <h3 className="mt-2 text-xl font-display text-ink">{title}</h3>
        </div>
        <span className="rounded-full border border-white/15 px-3 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-muted">
          Article
        </span>
      </div>
      <p className="mt-4 text-sm text-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default Article;
