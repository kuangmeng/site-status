import zh from "./locales/zh-CN.json";
import en from "./locales/en-US.json";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh-CN",
  messages: { "zh-CN": zh, en},
  fallbackLocale: "zh-CN",
  // 语言偏好
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    alwaysRedirect: true,
    fallbackLocale: "zh-CN",
    redirectOn: "root",
  },
}));
