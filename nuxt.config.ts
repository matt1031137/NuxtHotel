// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-keen-slider',
  ],
  i18n: {
    defaultLocale: 'tw',
    strategy: 'prefix_except_default', // <<< 加這個
    locales: [
      { code: 'tw',iso: 'zh-TW',name: '繁體中文', file: 'tw.json' },
      { code: 'jp',iso: 'ja-JP', name: '日本語', file: 'jp.json' },
      { code: 'en',iso: 'en-US', name: 'English', file: 'en.json' },
    ],
    lazy: true,  // << 要加這個 lazy
    langDir: 'locales/', // 你的語系檔案放的資料夾
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'Lang',
      redirectOn: 'root',
    },
  },
  css: ['~/assets/scss/main.scss'],
})