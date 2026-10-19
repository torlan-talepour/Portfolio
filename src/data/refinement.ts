import type { Locale } from "./portfolio";
const en = {
  chooseScreen: "Choose a screen to explore",
  hello: "HELLO, I’M A",
  headline: "UI & UX",
  designer: "Designer.",
  intro:
    "I’m Torlan Talepour, a UI/UX designer passionate about creating intuitive, thoughtful experiences for web and mobile.",
  viewPortfolio: "View Portfolio",
  portfolio: "Portfolio",
  portfolioIntro:
    "A selection of interfaces and prototypes. Built with curiosity, shaped with care.",
  about: "About me",
  aboutIntro: "Thoughtful interfaces start with a curious mind.",
  expertise: "Expertise & tools",
  contact: "Contact",
  contactTitle: "Let’s start a conversation.",
  project: "View project",
  role: "My role",
  goal: "Project goal",
  overview: "Overview",
  screens: "Explore the screens",
  screenSequence: "The full picture",
  sequenceIntro:
    "Scroll through each original screen, or select an image to inspect the details.",
  back: "Back to Portfolio",
  next: "Next project",
  source: "Original project",
  unconfirmed: "Project details awaiting confirmation.",
  close: "Close image viewer",
  previousImage: "Previous screen",
  nextImage: "Next screen",
  enlarge: "Enlarge screen",
  swipe:
    "Switch screens using the buttons or swipe horizontally. Scroll within the preview to explore the whole design.",
  missing: "Screen exports pending",
  missingBody: "Genuine interface screenshots will appear here when available.",
  abstract: "An abstract composition of interface layers",
  pageLabel: "UI/UX DESIGN / SELECTED WORK",
  allScreens: "All screens",
  zoomHint: "Use the arrows to switch screens. Escape closes the viewer.",
};
type Content = typeof en;
const fa: Content = {
  chooseScreen: "یک صفحه را برای بررسی انتخاب کنید",
  hello: "سلام، من یک",
  headline: "طراح رابط",
  designer: "و تجربه کاربری",
  intro:
    "من طرلان طالع پور هستم؛ طراح رابط و تجربه کاربری، علاقه‌مند به ساخت تجربه‌های ساده و سنجیده برای وب و موبایل.",
  viewPortfolio: "مشاهده نمونه‌کارها",
  portfolio: "نمونه‌کارها",
  portfolioIntro:
    "منتخبی از رابط‌ها و پروتوتایپ‌ها؛ با ذهنی کنجکاو و توجه به جزئیات.",
  about: "درباره من",
  aboutIntro: "رابط‌های سنجیده، از ذهنی کنجکاو شروع می‌شوند.",
  expertise: "مهارت‌ها و ابزارها",
  contact: "تماس",
  contactTitle: "بیایید گفت‌وگو را شروع کنیم.",
  project: "مشاهده پروژه",
  role: "نقش من",
  goal: "هدف پروژه",
  overview: "معرفی پروژه",
  screens: "کاوش در صفحات",
  screenSequence: "تصویر کامل پروژه",
  sequenceIntro:
    "هر صفحه اصلی را با پیمایش ببینید یا برای بررسی جزئیات، تصویر را انتخاب کنید.",
  back: "بازگشت به نمونه‌کارها",
  next: "پروژه بعدی",
  source: "پروژه اصلی",
  unconfirmed: "جزئیات پروژه در انتظار تأیید است.",
  close: "بستن نمایشگر تصویر",
  previousImage: "صفحه قبلی",
  nextImage: "صفحه بعدی",
  enlarge: "بزرگ‌کردن تصویر",
  swipe:
    "با دکمه‌ها یا کشیدن افقی، صفحه را عوض کنید. برای دیدن تمام طراحی، داخل پیش‌نمایش پیمایش کنید.",
  missing: "در انتظار خروجی صفحات",
  missingBody:
    "تصاویر واقعی رابط کاربری، پس از آماده‌شدن در اینجا نمایش داده می‌شوند.",
  abstract: "ترکیب‌بندی انتزاعی از لایه‌های رابط کاربری",
  pageLabel: "طراحی رابط و تجربه کاربری / پروژه‌های منتخب",
  allScreens: "همه صفحات",
  zoomHint:
    "برای تغییر صفحه از کلیدهای جهت استفاده کنید. Escape نمایشگر را می‌بندد.",
};
export const refinement: Record<Locale, Content> = { en, fa };
