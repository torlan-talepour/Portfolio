export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];
export type Localized<T = string> = Record<Locale, T>;
export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);
export const person = {
  name: { en: "Torlan Talepour", fa: "طرلان طالع پور" },
  email: "torlan.1994@gmail.com",
  role: { en: "UI/UX Designer", fa: "طراح رابط و تجربه کاربری" },
};
export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: Localized;
  caption: Localized;
};
export type ProjectSection = { title: Localized; body: Localized };
export type Project = {
  slug: string;
  title: Localized;
  category: Localized;
  short: Localized;
  overview: Localized;
  tool: Localized;
  format: Localized;
  link: string;
  accent: "gold" | "blue";
  images: ProjectImage[];
  sections: ProjectSection[];
  embedUrl?: string;
};
export const projects: Project[] = [
  {
    slug: "learnify",
    title: { en: "Learnify", fa: "لرنیفای" },
    category: {
      en: "E-learning platform · UI/UX design",
      fa: "پلتفرم آموزش آنلاین · طراحی رابط و تجربه کاربری",
    },
    short: {
      en: "A multi-page learning experience, from discovering a course to taking the next step.",
      fa: "تجربه‌ای چندصفحه‌ای برای یادگیری؛ از کشف دوره تا برداشتن قدم بعدی.",
    },
    overview: {
      en: "Learnify is an e-learning platform design in Figma. The available desktop screens cover course discovery, course details, watching lessons, checkout, and confirmation, alongside account and editorial pages. This selection presents the actual interface designs from the project.",
      fa: "لرنیفای، طراحی یک پلتفرم آموزش آنلاین در فیگماست. صفحات دسکتاپ موجود شامل جست‌وجوی دوره، جزئیات دوره، تماشای درس، پرداخت و تأیید سفارش، در کنار صفحات حساب کاربری و محتوایی است. این مجموعه، طراحی‌های واقعی رابط کاربری پروژه را نمایش می‌دهد.",
    },
    tool: { en: "Figma", fa: "فیگما" },
    format: { en: "Web interface", fa: "رابط وب" },
    link: "https://www.figma.com/design/3qicXIKwpa1awG1hO4CZie/E-Learning-Platform?node-id=1-3&t=FeaHe7z0lk0DFc3b-1",
    accent: "gold",
    images: [
      {
        src: "/projects/learnify-landing.png",
        width: 1440,
        height: 3249,
        alt: {
          en: "Learnify landing page with course search, course cards, tutors, and recent articles",
          fa: "صفحه اصلی لرنیفای با جست‌وجوی دوره، کارت‌های دوره، مدرسان و مقاله‌های تازه",
        },
        caption: {
          en: "01 / Landing page — course discovery and editorial content",
          fa: "۰۱ / صفحه اصلی — کشف دوره و محتوای آموزشی",
        },
      },
      {
        src: "/projects/learnify-courses.png",
        width: 1440,
        height: 2965,
        alt: {
          en: "Learnify course catalog with filter sidebar and a grid of course cards",
          fa: "فهرست دوره‌های لرنیفای با نوار فیلتر و کارت‌های دوره",
        },
        caption: {
          en: "02 / Course catalog — filters and a consistent card system",
          fa: "۰۲ / فهرست دوره‌ها — فیلترها و ساختار هماهنگ کارت‌ها",
        },
      },
      {
        src: "/projects/learnify-checkout.png",
        width: 1440,
        height: 1416,
        alt: {
          en: "Learnify checkout with billing details, payment fields, and order summary",
          fa: "صفحه پرداخت لرنیفای با اطلاعات صورتحساب، فیلدهای پرداخت و خلاصه سفارش",
        },
        caption: {
          en: "03 / Checkout — billing, payment, and order summary",
          fa: "۰۳ / پرداخت — صورتحساب، پرداخت و خلاصه سفارش",
        },
      },
    ],
    sections: [
      {
        title: {
          en: "A connected set of screens",
          fa: "مجموعه‌ای از صفحات مرتبط",
        },
        body: {
          en: "The Figma file includes a landing page, course catalog, course detail, lesson-viewing screen, checkout, and order confirmation. Shared navigation and repeated course cards give these pages a consistent visual structure.",
          fa: "فایل فیگما شامل صفحه اصلی، فهرست دوره‌ها، جزئیات دوره، تماشای درس، پرداخت و تأیید سفارش است. ناوبری مشترک و کارت‌های تکرارشونده دوره، به این صفحات ساختاری بصری و هماهنگ می‌دهند.",
        },
      },
      {
        title: { en: "Visual language", fa: "زبان بصری" },
        body: {
          en: "The interface pairs deep navy with golden yellow accents. Light surfaces, clear section headings, and image-led course cards organize a content-rich learning platform.",
          fa: "رابط کاربری از ترکیب سرمه‌ای تیره و زرد طلایی استفاده می‌کند. سطوح روشن، عنوان‌های مشخص و کارت‌های تصویری دوره، محتوای متنوع پلتفرم آموزشی را سازمان می‌دهند.",
        },
      },
    ],
  },
  {
    slug: "crm-platform",
    title: { en: "CRM Platform", fa: "پلتفرم CRM" },
    category: {
      en: "CRM platform · Figma Make prototype",
      fa: "مدیریت ارتباط با مشتری · پروتوتایپ فیگما میک",
    },
    short: {
      en: "An exploration of a customer relationship management platform, built with Figma Make.",
      fa: "کاوشی در طراحی پلتفرم مدیریت ارتباط با مشتری، ساخته‌شده با فیگما میک.",
    },
    overview: {
      en: "CRM Platform is a customer relationship management prototype created with Figma Make. Open the original project to explore the prototype. Screen exports and a detailed account of the design process will be added when available.",
      fa: "پلتفرم CRM، پروتوتایپی برای مدیریت ارتباط با مشتری است که با فیگما میک ساخته شده است. برای بررسی پروتوتایپ، پروژه اصلی را باز کنید. خروجی صفحات و توضیحات کامل فرایند طراحی، پس از آماده‌شدن اضافه می‌شوند.",
    },
    tool: { en: "Figma Make", fa: "فیگما میک" },
    format: { en: "Interactive prototype", fa: "پروتوتایپ تعاملی" },
    link: "https://www.figma.com/make/JeUCCQZ2eR5g2hZNx0TvTO/CRM-Platform-Design?t=LMcAMDXKN0P8Q7dx-20&fullscreen=1",
    accent: "blue",
    images: [],
    sections: [],
  },
];
export const skills: {
  title: Localized;
  description: Localized;
  items: Localized<string[]>;
}[] = [
  {
    title: { en: "Interface & experience", fa: "رابط و تجربه" },
    description: {
      en: "Thoughtful interfaces across screens, sizes, and user journeys.",
      fa: "رابط‌هایی سنجیده برای صفحه‌ها، اندازه‌ها و مسیرهای مختلف کاربر.",
    },
    items: {
      en: [
        "UI & UX design",
        "Responsive layouts",
        "Web & mobile interfaces",
        "Multi-page experiences",
      ],
      fa: [
        "طراحی رابط و تجربه کاربری",
        "چیدمان واکنش‌گرا",
        "رابط‌های وب و موبایل",
        "تجربه‌های چندصفحه‌ای",
      ],
    },
  },
  {
    title: { en: "Systems & prototypes", fa: "سیستم‌ها و پروتوتایپ‌ها" },
    description: {
      en: "Flexible Figma foundations that bring consistency to an idea.",
      fa: "ساختارهای منعطف در فیگما برای شکل‌دادن به ایده‌ای منسجم.",
    },
    items: {
      en: [
        "Figma",
        "Auto Layout",
        "Components & variants",
        "Interactive prototyping",
      ],
      fa: [
        "فیگما",
        "چیدمان خودکار (Auto Layout)",
        "کامپوننت‌ها و واریانت‌ها",
        "پروتوتایپ تعاملی",
      ],
    },
  },
  {
    title: { en: "AI-assisted exploration", fa: "کاوش با کمک هوش مصنوعی" },
    description: {
      en: "New tools for exploring concepts and making ideas tangible.",
      fa: "ابزارهای تازه برای بررسی مفاهیم و ملموس‌کردن ایده‌ها.",
    },
    items: {
      en: ["ChatGPT", "Lovable", "Bolt", "Figma Make"],
      fa: ["ChatGPT", "Lovable", "Bolt", "Figma Make"],
    },
  },
];
