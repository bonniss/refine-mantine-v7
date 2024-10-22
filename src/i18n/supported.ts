export const supportedLanguages = ['en', 'vi'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];
