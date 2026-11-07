import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = { title: "Page not found | Sascan Meditech" };

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="sp-hero">
          <div className="container">
            <h1 className="sp-title">Page not found</h1>
            <p className="sp-lead"><Link href="/">Back to the home page</Link></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
