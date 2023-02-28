const siteMetadata = {
  title: 'okcleff',
  author: 'Woncheol Ok',
  headerTitle: "Woncheol's web",
  description: 'Web Developer at Onionfive in Korea',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://dalelarroder.com',
  siteRepo: 'https://github.com/dlarroder/dalelarroder-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'okcleff@gmail.com',
  github: 'https://github.com/okcleff',
  // twitter: 'https://twitter.com/dalelarroder',
  // facebook: 'https://facebook.com/dlarroder',
  // linkedin: 'https://www.linkedin.com/in/dale-larroder/',
  // spotify: 'https://open.spotify.com/user/12162121994?si=e685b3546f414967',
  // steam: 'https://steamcommunity.com/id/dlarroder/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
