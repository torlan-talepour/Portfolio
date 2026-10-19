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
  label?: Localized;
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
  role?: Localized;
  goal?: Localized;
  cover?: string;
};
export const projects: Project[] = [
  {
    slug: "learnify",
    role: { en: "UI/UX Designer", fa: "طراح رابط و تجربه کاربری" },
    goal: {
      en: "Help learners discover and purchase courses based on their interests and learning goals. The multi-page experience connects course discovery and details with checkout, payment confirmation, and learning access.",
      fa: "کمک به یادگیرندگان برای کشف و خرید دوره‌ها بر اساس علایق و اهداف یادگیری‌شان. این تجربه چندصفحه‌ای، کشف و جزئیات دوره را به پرداخت، تأیید پرداخت و دسترسی به آموزش پیوند می‌دهد.",
    },
    cover: "/projects/learnify-landing.png",
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
      en: "Learnify is an e-learning platform design in Figma. The available desktop screens cover course discovery, course details, watching lessons, checkout, and confirmation. This selection presents the actual interface designs from the project.",
      fa: "لرنیفای، طراحی یک پلتفرم آموزش آنلاین در فیگماست. صفحات دسکتاپ موجود شامل جست‌وجوی دوره، جزئیات دوره، تماشای درس، پرداخت و تأیید سفارش است. این مجموعه، طراحی‌های واقعی رابط کاربری پروژه را نمایش می‌دهد.",
    },
    tool: { en: "Figma", fa: "فیگما" },
    format: { en: "Web interface", fa: "رابط وب" },
    link: "https://www.figma.com/design/3qicXIKwpa1awG1hO4CZie/E-Learning-Platform?node-id=1-3&t=FeaHe7z0lk0DFc3b-1",
    accent: "gold",
    images: [
      {
        src: "/projects/learnify-landing.png",
        label: { en: "Landing", fa: "صفحه اصلی" },
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
        label: { en: "Courses", fa: "دوره‌ها" },
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
        src: "/projects/learnify-course-details.png",
        label: {
          en: "Course details",
          fa: "جزئیات دوره",
        },
        width: 1046,
        height: 4096,
        alt: {
          en: "Learnify course details with course preview, curriculum, instructor information, reviews, and purchase options",
          fa: "جزئیات دوره با پیش‌نمایش، سرفصل‌ها، اطلاعات مدرس، دیدگاه‌ها و گزینه‌های خرید",
        },
        caption: {
          en: "03 / Course details — original Figma screen",
          fa: "۰۳ / جزئیات دوره — خروجی اصلی فیگما",
        },
      },
      {
        src: "/projects/learnify-checkout.png",
        label: { en: "Checkout", fa: "پرداخت" },
        width: 1440,
        height: 1416,
        alt: {
          en: "Learnify checkout with billing details, payment fields, and order summary",
          fa: "صفحه پرداخت لرنیفای با اطلاعات صورتحساب، فیلدهای پرداخت و خلاصه سفارش",
        },
        caption: {
          en: "04 / Checkout — billing, payment, and order summary",
          fa: "۰۴ / پرداخت — صورتحساب، پرداخت و خلاصه سفارش",
        },
      },
      {
        src: "/projects/learnify-confirmation.png",
        label: {
          en: "Confirmation",
          fa: "تأیید پرداخت",
        },
        width: 1440,
        height: 1408,
        alt: {
          en: "Learnify order confirmation with payment status, course summary, receipt details, and learning access",
          fa: "تأیید سفارش با وضعیت پرداخت، خلاصه دوره، جزئیات رسید و دسترسی به آموزش",
        },
        caption: {
          en: "05 / Confirmation — original Figma screen",
          fa: "۰۵ / تأیید پرداخت — خروجی اصلی فیگما",
        },
      },
      {
        src: "/projects/learnify-watch-course.png",
        label: {
          en: "Watch course",
          fa: "تماشای دوره",
        },
        width: 1440,
        height: 3625,
        alt: {
          en: "Learnify lesson-viewing interface with video player, course contents, lecture notes, attachments, and comments",
          fa: "رابط تماشای درس با پخش‌کننده ویدئو، محتوای دوره، یادداشت‌ها، فایل‌های پیوست و دیدگاه‌ها",
        },
        caption: {
          en: "06 / Watch course — original Figma screen",
          fa: "۰۶ / تماشای دوره — خروجی اصلی فیگما",
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
    role: {
      en: "UI/UX Designer · AI-assisted prototyping",
      fa: "طراح رابط و تجربه کاربری · پروتوتایپ‌سازی با کمک هوش مصنوعی",
    },
    goal: {
      en: "Help teams manage leads, track sales pipeline progress, and monitor business performance. Leads, Sales Pipeline, and Reports & Analytics provide a centralized view of customers and sales activities to support efficient follow-ups and data-informed decisions.",
      fa: "کمک به تیم‌ها برای مدیریت سرنخ‌ها، پیگیری پیشرفت قیف فروش و پایش عملکرد کسب‌وکار. صفحات سرنخ‌ها، قیف فروش و گزارش‌ها و تحلیل‌ها، نمایی یکپارچه از مشتریان و فعالیت‌های فروش برای پیگیری مؤثر و تصمیم‌گیری مبتنی بر داده فراهم می‌کنند.",
    },
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
      en: "CRM Platform is an AI-assisted interactive concept prototype created using Figma Make. It explores a centralized workspace for customer management and sales activities.",
      fa: "پلتفرم CRM، پروتوتایپی تعاملی و مفهومی است که با کمک هوش مصنوعی در فیگما میک ساخته شده است. این پروژه، فضایی یکپارچه برای مدیریت مشتریان و فعالیت‌های فروش را بررسی می‌کند.",
    },
    tool: { en: "Figma Make", fa: "فیگما میک" },
    format: { en: "Interactive prototype", fa: "پروتوتایپ تعاملی" },
    link: "https://www.figma.com/make/JeUCCQZ2eR5g2hZNx0TvTO/CRM-Platform-Design?t=LMcAMDXKN0P8Q7dx-20&fullscreen=1",
    accent: "blue",
    cover: "/projects/crm/dashboard-desktop.jpg",
    images: [
      {
        src: "/projects/crm/dashboard-desktop.jpg",
        width: 1440,
        height: 1051,
        label: { en: "Dashboard", fa: "داشبورد" },
        alt: {
          en: "CRM concept prototype — Dashboard at a desktop viewport, showing sample data",
          fa: "پروتوتایپ مفهومی CRM — داشبورد در نمای دسکتاپ با داده‌های نمونه",
        },
        caption: {
          en: "Dashboard — original desktop viewport capture",
          fa: "داشبورد — ثبت واقعی نمای دسکتاپ",
        },
      },
      {
        src: "/projects/crm/leads-desktop.jpg",
        width: 1440,
        height: 1051,
        label: { en: "Leads", fa: "سرنخ‌ها" },
        alt: {
          en: "CRM concept prototype — Leads at a desktop viewport, showing sample data",
          fa: "پروتوتایپ مفهومی CRM — سرنخ‌ها در نمای دسکتاپ با داده‌های نمونه",
        },
        caption: {
          en: "Leads — original desktop viewport capture",
          fa: "سرنخ‌ها — ثبت واقعی نمای دسکتاپ",
        },
      },
      {
        src: "/projects/crm/pipeline-desktop.jpg",
        width: 1440,
        height: 1051,
        label: { en: "Sales pipeline", fa: "قیف فروش" },
        alt: {
          en: "CRM concept prototype — Sales pipeline at a desktop viewport, showing sample data",
          fa: "پروتوتایپ مفهومی CRM — قیف فروش در نمای دسکتاپ با داده‌های نمونه",
        },
        caption: {
          en: "Sales pipeline — original desktop viewport capture",
          fa: "قیف فروش — ثبت واقعی نمای دسکتاپ",
        },
      },
      {
        src: "/projects/crm/reports-desktop.jpg",
        width: 1440,
        height: 1051,
        label: { en: "Reports & analytics", fa: "گزارش‌ها و تحلیل‌ها" },
        alt: {
          en: "CRM concept prototype — Reports & analytics at a desktop viewport, showing sample data",
          fa: "پروتوتایپ مفهومی CRM — گزارش‌ها و تحلیل‌ها در نمای دسکتاپ با داده‌های نمونه",
        },
        caption: {
          en: "Reports & analytics — original desktop viewport capture",
          fa: "گزارش‌ها و تحلیل‌ها — ثبت واقعی نمای دسکتاپ",
        },
      },
    ],
    sections: [
      {
        title: { en: "About these screens", fa: "درباره این تصاویر" },
        body: {
          en: "These are genuine desktop viewport captures from the original Figma Make concept prototype, rendered at 1440px wide. Each image shows the visible interface, including its desktop navigation and layout. Names, contact information, and sales figures are demonstration data in the prototype, not client records or measured project outcomes.",
          fa: "این تصاویر، ثبت واقعی نمای دسکتاپ پروتوتایپ مفهومی در فیگما میک هستند. هر تصویر، بخش قابل‌مشاهده صفحه را نشان می‌دهد و خروجی کامل دسکتاپ نیست. نام‌ها، اطلاعات تماس و ارقام فروش، داده‌های نمایشی پروتوتایپ هستند؛ نه اطلاعات مشتریان واقعی یا نتایج اندازه‌گیری‌شده پروژه.",
        },
      },
    ],
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
