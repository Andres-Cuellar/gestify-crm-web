import { ui } from './ui';
import type { Lang } from './ui';

export function useTranslations(lang: Lang) {
  return ui[lang];
}