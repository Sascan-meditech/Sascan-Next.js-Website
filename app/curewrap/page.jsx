import ProductPage, { SpecTable, TickList, Warning, WarrantyBadge } from "../../components/shop/ProductPage";

export const metadata = {
  title: "CureWrap — Red & Near-Infrared Light Therapy Wrap | Sascan Meditech",
  description:
    "CureWrap is a wearable light therapy device with 660nm red and 850nm near-infrared LEDs for pain relief, inflammation reduction and skin rejuvenation.",
};

const IMAGES = [
  { src: "/assets/curewrap/curewrap-1.webp", w: 1100, h: 1100, alt: "CureWrap light therapy wrap worn around the waist" },
  { src: "/assets/curewrap/curewrap-2.webp", w: 1100, h: 1100, alt: "CureWrap wrapped around the thigh with its red LEDs glowing" },
];

const FEATURES = [
  ["The device works cordless with Type-C port built in power bank battery (5V 2A). Can walk around during therapy."],
  ["For best results, place the pad close to the body with the LED in close proximity to the body part seeking relief. Take care not to wrap the pad not too tight to the body with elastic band provided."],
  ["Use device 1-2 times per day for at least 1-4 weeks, depending on the severity of the disease. Keep the device in one treatment area for 15 minutes before moving on to the next treatment area."],
];

const SPECS = [
  ["Rated Power", "60W"],
  ["Actual Power", "16W"],
  ["Product Size", "400 x 200 x 4.95 mm"],
  ["No. of LEDs", "120"],
  ["No. of LED Chips", "360 chips"],
  ["Wavelengths Emitted", "1 x 660 nm and 2 x 850 nm"],
  ["Irradiance", "150mW/cm² at the surface"],
  ["Timer", "15 minutes"],
  ["Battery Spec", "3600 mAh"],
];

const PRECAUTIONS = [
  "Not intended for the use by children and pregnant women.",
  "Do not exceed 30 min of irradiation of the same treatment area.",
  "Don’t stare directly at the light as it can cause blindness.",
  "Please follow doctor’s advice for any medical questions.",
  "Don’t lie down on the pad or apply excess pressure on the pad while using elastic strap provided.",
  "Don’t charge the battery while the device is being operated.",
];

const DETAILS = [
  {
    title: "Overview",
    icon: "overview",
    body: (
      <>
        <h3 className="cl-panel__title">Light therapy you can wear</h3>
        <p className="pb-p">It has an array of LEDs with light emitting at 660nm red light and 850nm, to stimulate cellular processes and promote healing and rejuvenation through increased production of ATP. This device works on the principle of Photobiomodulation (PBM) or LLLT to provide targeted light therapy to specific areas of the body, aiding in conditions such as arthritis, muscle and joint pain, skin toning, and inflammation.</p>
      </>
    ),
  },
  {
    title: "Description",
    icon: "description",
    body: (
      <>
        <h3 className="cl-panel__title">How to use</h3>
        <p className="pb-p">CureWrap is easy to use. Can be wrapped around the affected area with the help of the elastic band provided. The inbuilt rechargeable battery needs to be charged using the C-type charging cable provided on a slow charging mobile phone adapter. After full of charge, simply press the on/off switch to activate device. With built in a timer, it will automatically turn off after 15 minutes of operation. If the device runs out of battery, simply charge it up again and use. While charging, the red light of the on/off switch will flash and when fully charged in around 8 hours, the switch will turn to solid red colour.</p>
        <p className="pb-p">With a slight press of the on/off button both the Red (660nm) and near IR (850nm) LED lights will come on. With one more press the 660 nm red light will be on and with one more press the near-IR (850nm) invisible LED will come on. When the switch is pressed again, the device will switch off completely. The device can also be operated in both pulsed and continuous wave (cw) modes using the same power button. A deep press of the power button takes the device to the pulsed mode and in the pulsed mode also the same sequence of operation of the switch takes the device through different wavelength options.</p>
        <h3 className="cl-panel__title cl-panel__title--gap">Salient features of the device are:</h3>
        <TickList items={FEATURES} />
      </>
    ),
  },
  { title: "Specifications", icon: "specs", body: <SpecTable rows={SPECS} /> },
  { title: "Precautions", icon: "safety", body: <Warning items={PRECAUTIONS} /> },
  {
    title: "Care & Storage",
    icon: "care",
    body: (
      <>
        <h3 className="cl-panel__title">Maintenance Instructions</h3>
        <p className="pb-p">For cleaning we recommended using a damp towel or toothbrush to slightly clean your wrap and elastic strap. Make sure the device is unplugged from the power cord, disconnected and turned off. Clean the fabric portion of the wrap only and not the LED diodes directly. Do not submerge the wrap in water. Allow the wrap to air dry and make sure to keep it out of reach of children and direct sunlight. Do not allow the light to fall on the eye, as it can damage the retina and cause blindness.</p>
        <h3 className="cl-panel__title cl-panel__title--gap">Storage Guidelines</h3>
        <p className="pb-p">Please don’t fold the red light therapy wrap as it may cause LED diodes to disconnect from the power source. Please keep the LED pad folded as in the box provided. Store the device in a cool dry area after use.</p>
      </>
    ),
  },
  { title: "Warranty", icon: "warranty", body: <WarrantyBadge years={1} text="1-Year Warranty" /> },
];

export default function CureWrapPage() {
  return (
    <ProductPage
      productId="curewrap"
      category="Wellness · Pain relief"
      subtitle="Wearable red and near-infrared LED light therapy wrap"
      intro={<><strong>CureWrap</strong> is a therapeutic device that harnesses the power of light for various therapeutic applications such as pain relief, inflammation reduction, anti-aging of skin, wrinkle removal and weight loss through increased blood circulation, removal of toxins, stimulation of fibroblasts to produce collagen and elastin.</>}
      chips={[["120", "LEDs"], ["660 + 850nm", "red & near-IR"], ["15 min", "auto timer"], ["3600mAh", "battery"]]}
      images={IMAGES}
      details={DETAILS}
      related={["curelite", "curelaze-watch"]}
    />
  );
}
