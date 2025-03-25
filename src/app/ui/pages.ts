type Page = {
  path: string;
  name: string;
  translationKey: string;
};

const pages: Page[] = [
  {
    path: "/",
    name: "Home",
    translationKey: "Menu.home",
  },
  {
    path: "/privacy_policy",
    name: "Privacy Policy",
    translationKey: "Menu.privacy_policy",
  },
  {
    path: "/use_conditions",
    name: "Use conditions",
    translationKey: "Menu.use_conditions",
  },
];

export default pages;
