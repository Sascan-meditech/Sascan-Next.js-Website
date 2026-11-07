import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartView from "../../components/shop/CartView";

export const metadata = {
  title: "Cart | Sascan Meditech",
  robots: { index: false },
};

export default function CartPage() {
  return (
    <>
      <Header active="shop" />
      <main id="main" className="shop">
        <section className="shop-top">
          <div className="container">
            <ol className="shop-steps mono" aria-label="Checkout progress">
              <li className="is-on" aria-current="step"><span>1</span>Cart</li>
              <li><span>2</span>Details &amp; payment</li>
              <li><span>3</span>Done</li>
            </ol>
            <h1 className="shop-title">Your cart</h1>
            <CartView />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
