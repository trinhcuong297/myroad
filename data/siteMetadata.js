const siteMetadata = {
  title: 'MyRoad - blog cá nhân',
  author: 'Trịnh Cao Cường',
  headerTitle: 'MyRoad',
  description:
    'Chào các bạn, mình là Trịnh Cao Cường - một người thích khám phá thế giới của câu lệnh. Blog này là nơi mình chia sẻ những kiến thức và trải nghiệm của mình.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://myroad.vercel.app',
  siteRepo: 'https://github.com/trinhcuong297/blogcuacuong',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'trinhcuong297@gmail.com',
  github: 'https://github.com/trinhcuong297',
  twitter: 'https://twitter.com/CngTrnh88606298',
  facebook: 'https://www.facebook.com/profile.php?id=100075795116843',
  youtube: 'https://www.youtube.com/channel/UCbJhVG6t2ySBqdOmSF4bzqg',
  linkedin: 'https://www.linkedin.com/in/c%C6%B0%E1%BB%9Dng-tr%E1%BB%8Bnh-7451b2233/',
  discord: 'https://discord.gg/yNhcEWK7Dy',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. myroad.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: 'trinhcuong297/blogcuacuong',
      repositoryId: 'R_kgDOHB4z_Q',
      category: 'Announcements',
      categoryId: 'DIC_kwDOHB4z_c4CPIZP',
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '1',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: 'custom',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: 'trinhcuong297/blogcuacuong',
      issueTerm: 'pathname', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: 'github-light',
      // theme when dark mode
      darkTheme: 'icy-dark',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
