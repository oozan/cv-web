// _app.tsx
import "../styles/globals.css"; // Include Tailwind CSS styles
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <SpeedInsights />
    </div>
  );
}

export default MyApp;
