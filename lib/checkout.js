/* Checkout form rules, shared by the checkout page and the payment server. */

export const STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

export const FIELDS = ["name", "phone", "email", "address1", "address2", "city", "state", "pin", "notes"];

const str = (v, max) => (typeof v === "string" ? v.trim().replace(/\s+/g, " ").slice(0, max) : "");

/* Returns { value, errors } — errors is empty when the details are usable. */
export function validateCustomer(input = {}) {
  const value = {
    name: str(input.name, 80),
    phone: str(input.phone, 20).replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, ""),
    email: str(input.email, 120).toLowerCase(),
    address1: str(input.address1, 160),
    address2: str(input.address2, 160),
    city: str(input.city, 60),
    state: str(input.state, 60),
    pin: str(input.pin, 10).replace(/\s/g, ""),
    notes: str(input.notes, 240),
  };
  const errors = {};
  if (value.name.length < 2) errors.name = "Enter your full name.";
  if (!/^[6-9]\d{9}$/.test(value.phone)) errors.phone = "Enter a 10-digit mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.email)) errors.email = "Enter a valid email address.";
  if (value.address1.length < 5) errors.address1 = "Enter your house / street address.";
  if (value.city.length < 2) errors.city = "Enter your city or town.";
  if (!STATES.includes(value.state)) errors.state = "Choose your state.";
  if (!/^[1-9]\d{5}$/.test(value.pin)) errors.pin = "Enter a 6-digit PIN code.";
  return { value, errors };
}
