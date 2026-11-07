import ProductPage, { SpecTable, TickList, Warning, WarrantyBadge } from "../../components/shop/ProductPage";

export const metadata = {
  title: "CureLite — Low-Level Laser Therapy Device | Sascan Meditech",
  description:
    "CureLite is a class 3B, Low-Level Laser Therapy (LLLT) device for pain relief, arthritis, back, knee, leg, sciatic and joint pain.",
};

const IMAGES = [
  { src: "/assets/curelite/curelite-1.webp", w: 1024, h: 1045, alt: "CureLite handheld laser therapy device with its timer display" },
  { src: "/assets/curelite/curelite-2.webp", w: 1024, h: 1045, alt: "CureLite being used on the knee" },
  { src: "/assets/curelite/curelite-3.webp", w: 1024, h: 1045, alt: "CureLite being used on the wrist" },
];

const SPECS = [
  ["Battery Capacity", "Built-in 2600mAh lithium battery"],
  ["Laser Wavelength", ["808nm", "650nm"]],
  ["Terminal Laser Output", ["4 × 808nm laser beams", "12 × 650nm laser beams"]],
  ["Case Material", "ABS"],
  ["Lens Material", "Tempered Glass"],
  ["Working Mode", "Continuous Mode"],
  ["Time Settings", ["Adjustable from 5–30 minutes", "6 adjustable levels", "Each level increases by 5 minutes"]],
  ["Total Output Power", "660mW"],
  ["Display", "White LED Display"],
  ["Voice Function", ["Without voice broadcast.", "“Beep” sound alert available while pressing function buttons."]],
];

const ADVANTAGES = [
  ["No side effects", "Experience pain relief without worrying about side effects, making CureLite a safe and natural alternative to traditional medications."],
  ["Farewell to Medications", "Say goodbye to pain medications and their associated side effects, embracing a holistic approach to pain relief with CureLite."],
  ["Quick Charge Time", "A mere 2-hour charge time ensures that CureLite is always ready for use."],
  ["Extended Battery Life", "Equipped with a powerful 2600mAh lithium battery for convenience and sustainability. Enjoy an impressive 4 days of usage on a single full charge."],
];

const DETAILS = [
  {
    title: "Overview",
    icon: "overview",
    body: (
      <>
        <h3 className="cl-panel__title">Laser therapy for lasting pain relief</h3>
        <p className="pb-p">Our FDA-approved device is equipped with cutting-edge technology, featuring four 808nm and twelve 650nm laser diodes, boasting a total power of 660mW.</p>
        <p className="pb-p">Harnessing the power of LLLT, CureLite employs Photobiomodulation Therapy (PBMT) to stimulate cellular activity, ensuring long-lasting therapeutic benefits.</p>
        <p className="pb-p">CureLite offers swift anti-inflammation and pain relief for muscles and joints with 808nm lasers and excels in promoting rapid superficial wound healing using 650nm lasers. It is designed for contact use and minimizes treatment time, making it the perfect companion for professional and personal use. Operation is a breeze with our user-friendly design, including an ON/OFF button (also functioning as a start/pause button) and a timer button for personalized treatment sessions ranging from 0 to 30 minutes, with 5-minute intervals.</p>
      </>
    ),
  },
  { title: "Description", icon: "description", body: <><h3 className="cl-panel__title">Advantages</h3><TickList items={ADVANTAGES} /></> },
  { title: "Specifications", icon: "specs", body: <SpecTable rows={SPECS} /> },
  {
    title: "Safety Precautions",
    icon: "safety",
    body: <Warning>While using laser light sources in non-contact mode, away from the body, always use the laser safety goggles provided. Accidental exposure to direct laser light can damage your eyes and cause blindness.</Warning>,
  },
  { title: "Additional Information", icon: "info", body: <SpecTable rows={[["Dimensions", "18 × 14 × 9.4 cm"]]} /> },
  { title: "Warranty", icon: "warranty", body: <WarrantyBadge years={1} text="1-Year Warranty" /> },
];

export default function CureLitePage() {
  return (
    <ProductPage
      productId="curelite"
      category="Wellness · Pain relief"
      subtitle="Class 3B Low-Level Laser Therapy (LLLT) device"
      intro={<><strong>CureLite</strong> is a class 3B, Low-Level Laser Therapy (LLLT) device suitable for pain relief, arthritis, rheumatic back pain, knee pain, leg pain, sciatic pain, and all other joint pain through deep tissue penetration.</>}
      chips={[["4 × 808nm", "laser diodes"], ["12 × 650nm", "laser diodes"], ["660mW", "total power"], ["5–30 min", "timer"]]}
      images={IMAGES}
      details={DETAILS}
      related={["curelaze-watch", "curewrap"]}
    />
  );
}
