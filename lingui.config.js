
module.exports = {
  locales: ['en', 'el', 'pseudo'],
  pseudoLocale: 'pseudo',
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en'
  },
  catalogs: [
    {
      path: 'src/translations/locales/{locale}/messages',
      include: ['src/pages', 'src/components', 'src/layouts']
    }
  ],
  format: 'po'
}
