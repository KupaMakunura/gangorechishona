interface Link {
  title: string;
  href: string;
}

interface Service {
  title: string;
  href: string;
}
export const Links: Link[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "Contact Us",
    href: "/#contact-us",
  },
];

export const Services: Service[] = [
  {
    title: "Language Learning",
    href: "/#language-learning",
  },
  {
    title: "Translation",
    href: "/#translation",
  },
  {
    title: "Interpretation",
    href: "/#interpretation",
  },
  {
    title: "Consultancy",
    href: "/#consultancy",
  },
];

export const TeamList = [
  { name: "Florence Mungure", role: "CEO & Instructor", img: "./team-1.jpg" },
  {
    name: "Moreblessing Muchemwa",
    role: "CEO & Instructor",
    img: "./team-2.jpg",
  },
  { name: "Sunungukai Murove", role: "CEO & Instructor", img: "./team-3.jpg" },
];

interface PMethods {
  name: string;
  value: string;
  active: boolean;
}
export const PaymentMethods: PMethods[] = [
  {
    name: "VISA/MasterCard",
    value: "visa",
    active: false,
  },
  {
    name: "Ecocash",
    value: "ecocash",
    active: true,
  },
  {
    name: "Innbucks",
    value: "innbucks",
    active: true,
  },
  {
    name: "OneMoney",
    value: "onemoney",
    active: true,
  },
  {
    name: "Zimswitch",
    value: "zimswitch",
    active: false,
  },
  {
    name: "PayGo",
    value: "paygo",
    active: false,
  },
];

export const lessonImages = [
  "./lesson-1.jpg",
  "./lesson-2.jpg",
  "./lesson-3.jpg",
];

interface UserLink {
  title: string;
  href: string;
}

export const UserLinks: UserLink[] = [
  { title: "Classes", href: "classes" },
  { title: "Payments", href: "payments" },
  { title: "Settings", href: "settings" },
];
