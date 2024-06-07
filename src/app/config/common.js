const common = {};

common.pageTitles = {
  "/": "Home",
};

common.logo = {
  path: "/",
  alt: "Logo",
};

common.navItems = [
  {
    name: "Home",
    path: "/",
  },
];

common.settingsConfig = {
  Profile: [
    {
      label: "Personal Information",
      path: "/account/settings/personal-information",
    },
    { label: "My Addresses", path: "/account/settings/my-addresses" },
    {
      label: "Account and Security",
      path: "/account/settings/account-and-security",
    },
  ],
  // App: [{ label: "Language", path: "/account/settings/language" }],
  Support: [
    { label: "Help Center", path: "/account/settings/help-center" },
    { label: "Kadiwa Policies", path: "/account/settings/kadiwa-policies" },
    { label: "About", path: "/account/settings/about" },
    {
      label: "Request Account Deletion",
      path: "/account/settings/request-account-deletion",
    },
  ],
};

export default common;
