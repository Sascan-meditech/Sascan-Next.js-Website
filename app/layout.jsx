import { IBM_Plex_Sans } from "next/font/google";
import SiteEffects from "../components/SiteEffects";
import DemoModal from "../components/DemoModal";
import "./globals.css";

// Fonts are downloaded at build time and served with the site (no request to Google when a page loads)
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex", display: "swap" });

export const metadata = {
  title: "Sascan Meditech | Early detection saves lives",
  description:
    "At Sascan we utilize a multispectral imaging technology platform for multimodal screening and early detection of potentially malignant lesions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={plex.variable} data-scroll-behavior="smooth">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="grid-bg" aria-hidden="true"></div>
        <div className="guides" aria-hidden="true"></div>
        {children}
        <SiteEffects />
        <DemoModal />
      </body>
    </html>
  );
}
