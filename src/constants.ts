import type { AppView } from './routes/index.routes';

export const navigationList = [
  { value: 'planets', label: 'Planets' },
  {
    value: 'starships',
    label: 'Starships',
  },
] as { value: AppView; label: string }[];

export const apiResultLimit = 12;
