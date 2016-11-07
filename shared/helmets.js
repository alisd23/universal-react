// Default Helmet values
export const app = {
  title: 'RevYou',
  defaultTemplate: 'RevYou',
  htmlAttributes: { lang: 'en', amp: undefined },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Cut the bulls**t' }
  ],
  link: [
    { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }
  ]
};

// Page specific Helmet values
export const account = {
  title: 'My RevYou'
};

export const profile = {
  title: 'My RevYou | Profile'
};

export const notFound = {
  title: 'Universal | Not Found'
};
