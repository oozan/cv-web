import { useState } from "react";

const Articles = () => {
  const articles = [
    {
      title: "Building a RESTful API with Go",
      description: `
        Go, often referred to as Golang, has established itself as one of the leading languages for creating robust backend systems. Its clean syntax, strong standard library, and native performance make it an excellent choice for building RESTful APIs.
    
        This article delves into the process of setting up a RESTful API using Go. The net/http package serves as the foundation for defining routes and managing middleware layers, which play a crucial role in logging, authentication, and request validation.
    
        Handling HTTP requests and encoding/decoding JSON are fundamental aspects of building an API. Go’s built-in support for these tasks ensures efficient and straightforward implementations. Middleware layers allow developers to address cross-cutting concerns while maintaining modularity.
    
        Error handling in Go is explicit, making it easier to trace issues during development and production. When combined with tools like Docker, deploying Go applications becomes a straightforward task that ensures scalability in real-world environments.
    
        Go’s concurrency model enables high-performance applications capable of handling thousands of requests simultaneously. This architecture makes it a practical choice for startups aiming for agility or enterprises seeking reliability. This guide provides a foundation for designing RESTful APIs that can integrate into larger, distributed systems.`,
      tags: ["Go", "API", "Backend"],
      date: "15 Dec 2022",
    },
    {
      title: "Getting Started with Clojure for Functional Programming",
      description: `
        Clojure is a modern Lisp dialect designed for the Java Virtual Machine (JVM). Its functional paradigm and focus on immutability offer developers a fresh perspective on solving complex problems. Clojure emphasizes simplicity and robustness, making it particularly appealing to those interested in functional programming.
    
        At the heart of Clojure is its use of immutable data structures, which simplify concurrency and reduce bugs associated with state changes. The interactive REPL (Read-Eval-Print Loop) enables developers to experiment and iterate quickly, making it an invaluable tool for exploring ideas in real time.
    
        Functional programming in Clojure revolves around concepts like higher-order functions, lazy evaluation, and pure functions. These principles promote cleaner, more predictable code. Tools like atoms, refs, and agents are provided for handling concurrency in ways that align with functional paradigms.
    
        With namespaces, Clojure encourages well-structured and modular codebases. Its interoperability with Java allows developers to leverage an extensive ecosystem of libraries, providing flexibility when building software solutions.
    
        Clojure’s concise syntax is approachable for beginners, yet its depth and flexibility can handle advanced use cases. Whether developing web applications, data transformation pipelines, or automation scripts, Clojure offers a unique blend of power and simplicity.`,
      tags: ["Clojure", "Functional Programming", "Lisp"],
      date: "20 Dec 2023",
    },
    {
      title: "Optimizing Performance with Next.js Middleware",
      description: `
        Next.js is a framework built for modern web applications, offering developers a streamlined way to create scalable, high-performance projects. Middleware, a core feature of Next.js, provides the ability to control requests and responses before they reach the final application logic.
    
        By strategically implementing middleware, developers can optimize performance through caching and pre-processing tasks. For instance, dynamic content can be tailored to user preferences or locations, reducing the workload on the main application.
    
        Middleware also enhances application security by validating requests and protecting sensitive data. Tasks like rate limiting, logging, and authentication can be managed in this layer, keeping the main application logic focused on business needs.
    
        When combined with API routes, middleware unlocks advanced capabilities such as custom workflows, automated redirects, and preprocessing of data for faster responses. These capabilities allow developers to design systems that are both efficient and maintainable.
    
        Whether you're building a content-heavy website, an e-commerce platform, or a SaaS product, leveraging middleware can significantly improve the user experience. It ensures that applications respond faster, remain secure, and handle scaling challenges with ease.`,
      tags: ["Next.js", "Performance", "Web Development"],
      date: "5 Jan 2023",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-700 to-gray-800 shadow-lg p-6 border border-gray-700 mt-[-1px]">
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Articles</h2>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            description={article.description}
            tags={article.tags}
            date={article.date}
          />
        ))}
      </div>
    </section>
  );
};

const Article = ({ title, description, tags, date }: ArticleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="flex flex-col bg-gray-800 shadow-md border border-gray-700 p-4 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Article Title */}
      <h3 className="text-lg font-semibold mb-2 text-blue-400">{title}</h3>

      {/* Article Description */}
      <div
        className={`text-gray-400 text-sm transition-all duration-300 ${
          isExpanded ? "max-h-screen" : "max-h-16 overflow-hidden"
        }`}
        style={{
          lineHeight: "1.8",
          maxWidth: "800px", // Limit text width
        }}
      >
        {description
          .trim()
          .split("\n\n")
          .map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap space-x-2 mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs text-gray-500 bg-gray-700 px-2 py-0.5 rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Date */}
      <div className="text-sm text-gray-500 mt-2">{date}</div>
    </div>
  );
};

interface ArticleProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
}

export default Articles;
