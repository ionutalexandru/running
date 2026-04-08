import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'es', 'ro'],
  defaultLocale: 'en',
});
