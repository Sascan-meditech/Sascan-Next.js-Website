import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CheckoutView from "../../components/shop/CheckoutView";

export const metadata = {
  title: "Checkout | Sascan Meditech",
  robots: { index: false },
};

export default function CheckoutPage() {
  return (
    <>
      <Header active="shop" />
      <main id="main" className="shop">
        <section className="shop-top">
          <div className="container">
            <ol className="shop-steps mono" aria-label="Checkout progress">
              <li className="is-done"><span>1</span>Cart</li>
              <li className="is-on" aria-current="step"><span>2</span>Details &amp; payment</li>
              <li><span>3</span>Done</li>
            </ol>
            <h1 className="shop-title">Checkout</h1>
            <CheckoutView />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
