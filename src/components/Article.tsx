interface ArticleProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
}

const Article = ({ title, description, tags, date }: ArticleProps) => {
  return (
    <div className="flex items-start bg-gray-800 shadow-md border border-gray-700 p-4">
      {/* Article Icon */}
      <div className="w-12 h-12 bg-gray-700 flex items-center justify-center rounded-md mr-4">
        <span className="text-gray-500">📰</span>
      </div>

      {/* Article Details */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{description}</p>
        <div className="flex flex-wrap space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-gray-500 bg-gray-700 px-2 py-0.5 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article Date */}
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  );
};

export default Article;
