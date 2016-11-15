// Default Helmet values
export const app = {
  title: 'Universal React',
  defaultTemplate: 'Universal React',
  htmlAttributes: { lang: 'en', amp: undefined },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Some description' }
  ],
  link: [
    { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }
  ]
};

// Page specific Helmet values
export const account = {
  title: 'Universal React'
};

export const profile = {
  title: 'Universal React | Profile'
};

export const notFound = {
  title: 'Universal React | Not Found'
};
