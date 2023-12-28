export const sanitizeHTML = (html: string): { __html: string } => {
  // Check if DOMParser is available (client-side)
  if (typeof DOMParser !== "undefined") {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const sanitizedHtml = doc.body.textContent || "";
    return { __html: sanitizedHtml };
  }

  // Fallback for server-side rendering
  return { __html: html };
};
