import ProductPage, { SpecTable, TickList, WarrantyBadge } from "../../components/shop/ProductPage";

export const metadata = {
  title: "CureLaze Watch — Laser & Light Therapy Watch | Sascan Meditech",
  description:
    "CureLaze is a CE-certified semiconductor laser instrument worn on the wrist for continuous acupuncture point and blood irradiation using laser light.",
};

const IMAGES = [
  { src: "/assets/curelaze/curelaze-1.webp", w: 1024, h: 1045, alt: "CureLaze Watch worn on the wrist, its laser lights glowing red" },
  { src: "/assets/curelaze/curelaze-2.webp", w: 587, h: 558, alt: "CureLaze Watch on the wrist showing its timer display" },
];

/* Light sources at the base of the watch (verbatim from the product description) */
const LIGHTS = [
  {
    name: "Red laser",
    nm: "650 nm",
    color: "#E53935",
    text: "The red diode lasers (6 nos) emitting at 650 nm activate different enzymes to break down excess fat blood and increase the oxygen content in the blood. It promotes metabolism enhances the lipid peroxidation process and lowers cholesterol in blood vessels.",
  },
  {
    name: "Blue light",
    nm: "460–465 nm",
    color: "#1E6FE0",
    text: "The blue LED (2 nos) emitting at 460-465 nm stimulates the first complex of the respiratory chain (NADH dehydrogenase). It provides an anti-inflammatory effect, increases the production of NO3, and activates telomerase which helps in anti-aging.",
  },
  {
    name: "Green light",
    nm: "520–525 nm",
    color: "#43A047",
    text: "Green LED light (2 nos) emitting at 520-525 nm improves the function, behavior, cell elasticity, and oxygen supply of these cells. It also helps to improve oxygen affinity, decrease lactic acid, decrease blood flow, and repair, and stabilize the activation of the pathway. Greenlight stimulates the mitochondrial complex in all respiratory chains (cytochrome reductase).",
  },
  {
    name: "Yellow light",
    nm: "586–589 nm",
    color: "#F9A825",
    text: "586-589 nm Yellow LEDs (2 nos) promote the metabolism of serotonin and vitamin D and stimulate the complex II (cytochrome) of the mitochondrial respiratory chain.",
  },
  {
    name: "IR laser",
    nm: "808 nm",
    color: "#7B1F2B",
    text: "The near-IR Laser diode (1 no) emitting at 808 nm increases the production of reactive oxygen species, which stimulates mitochondrial oxidative phosphorylation. It can increase oxygen consumption and ATP production in human endothelial cells, extracted mitochondria, and eukaryotic unicellular organisms.",
  },
];

const FEATURES = [
  ["Purify blood, and improve blood flow and microcirculation."],
  ["Reduce high blood fat, high blood sugar, cholesterol, and blood viscosity."],
  ["Prevent arteriosclerosis, and stroke, and control diabetes."],
];

const SPECS = [
  ["Brand", "CureLaze"],
  ["Product Model", "SL-04"],
  ["LED & Laser Configuration", ["460–465nm Blue LED – 2 pcs", "520–525nm Green LED – 2 pcs", "586–589nm Yellow LED – 2 pcs", "650nm Laser Diodes – 6 pcs", "808nm Infrared Laser Diodes – 1 pc"]],
  ["Power Adapter Output Voltage", "DC 5.0V"],
  ["Operating Conditions", ["Ambient Temperature: 5 ~ 40℃", "Relative Humidity: ≤ 80%", "Atmospheric Pressure: 860 hPa – 1060 hPa"]],
  ["Battery Specifications", ["Battery Voltage: DC 3.7 ~ 4.2V", "Battery Capacity: 1580mAh"]],
];

const DETAILS = [
  {
    title: "Overview",
    icon: "overview",
    body: (
      <>
        <h3 className="cl-panel__title">Laser and light therapy at the wrist</h3>
        <p className="pb-p">The blood vessels and acupoints are irradiated by a low-intensity light source emitting at 650, 460, 520, 587, and 808 nm to reduce the blood viscosity through photochemical reaction so that the hemodynamic, blood lipid, blood glucose metabolism, and oxygen carrying capacity are improved. Surface irradiation of nasal mucosa using the nasal probe light improves the local blood circulation around the nasal cavity and the immunity of nasal mucosa.</p>
        <h3 className="cl-panel__title cl-panel__title--gap">Indications</h3>
        <p className="pb-p">It is suitable for hyperviscosity, hyperlipidemia, ischemic cardiovascular and cerebrovascular diseases, and auxiliary treatment of rhinitis.</p>
      </>
    ),
  },
  {
    title: "Description",
    icon: "description",
    body: (
      <>
        <h3 className="cl-panel__title">The CureLaze Watch has the following light sources at the base of the watch to illuminate the blood vessels.</h3>
        <ol className="cl-lights">
          {LIGHTS.map((l) => (
            <li key={l.name} className="cl-light" style={{ "--lc": l.color }}>
              <span className="cl-light__dot" aria-hidden="true" />
              <div>
                <h4 className="cl-light__name">{l.name} <span className="cl-light__nm mono">{l.nm}</span></h4>
                <p className="cl-light__text">{l.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <h3 className="cl-panel__title cl-panel__title--gap">Main Features</h3>
        <TickList items={FEATURES} />
      </>
    ),
  },
  { title: "Specifications", icon: "specs", body: <SpecTable rows={SPECS} /> },
  { title: "Warranty", icon: "warranty", body: <WarrantyBadge years={1} text="1-Year Warranty" /> },
];

export default function CureLazePage() {
  return (
    <ProductPage
      productId="curelaze-watch"
      category="Wellness · Blood circulation"
      subtitle="Wrist-worn laser and LED light therapy watch"
      intro={<><strong>CureLaze</strong> is a CE-certified semiconductor laser instrument, which when applied to the wrist provides simultaneous and continuous acupuncture point or blood irradiation using laser light.</>}
      chips={[["5", "light sources"], ["6 × 650nm", "laser diodes"], ["808nm", "infrared laser"], ["1580mAh", "battery"]]}
      images={IMAGES}
      details={DETAILS}
      related={["curelite", "curewrap"]}
    />
  );
}
