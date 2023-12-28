// _app.tsx
import "../styles/globals.css"; // Include Tailwind CSS styles
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
