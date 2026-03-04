export const siteConfig = {
  name: "Conejo Valley Interfaith Association",
  shortName: "CVIA",
  tagline: "Partnering Together To Serve Our Community",
  greeting: "Shalom, Salaam, Shanti, Peace & Blessings",
  motto:
    "One should treat others as one would like others to treat them.",
  description:
    "CVIA creates a sacred space where people of all beliefs can come together, fostering understanding, peace, and harmony through interfaith dialogue and community service.",
  facebook: "https://www.facebook.com/ConejoValleyInterfaith/",
  emails: {
    cvia: "conejo.interfaith@gmail.com",
    win: "winconejoinfo@gmail.com",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Organizations", href: "/organizations" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const servicePartners = [
  "Harbor House",
  "Loaves and Fishes",
  "Manna Conejo Valley Food Bank",
  "The Conejo Closet",
  "James Storehouse",
  "Conejo Community Outreach",
  "Westminster Free Clinic",
  "Adelante Comunidad Conejo",
  "Safe Passage Youth",
  "Many Mansions",
  "Interface Children and Family Services",
  "Conejo Interfaith Refugee Team",
  "Casa Pacifica",
] as const;

export const colors = {
  sage: "#7C8C6E",
  warmStone: "#A69882",
  sand: "#D4C5B2",
  cream: "#F5F0EB",
  warmWhite: "#FDFBF8",
  charcoal: "#2D2926",
  warmGray: "#6B635B",
  terracotta: "#C17D54",
  deepForest: "#3D4F3D",
} as const;
