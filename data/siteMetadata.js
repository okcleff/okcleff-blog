const siteMetadata = {
  title: 'Woncheol Ok',
  author: 'Woncheol Ok',
  headerTitle: "Woncheol's blog",
  description: 'Web Developer in Korea',
  language: 'en',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://okcleff-blog.vercel.app/',
  siteRepo: 'https://github.com/okcleff/okcleff-blog',
  siteLogo: '',
  image: '',
  socialBanner: '',
  email: 'okcleff@gmail.com',
  github: 'https://github.com/okcleff',
  twitter: '',
  facebook: '',
  linkedin: '',
  spotify: '',
  steam: '',
  locale: 'ko',
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
