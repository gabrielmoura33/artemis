import { differenceInBusinessDays, parseISO } from 'date-fns';
function CountDaysFromDate(date: string) {
  const dateFormatted = parseISO(date);
  const now = new Date();

  const diff = differenceInBusinessDays(now, dateFormatted);

  if (diff === 0) return 'Hoje';

  if (diff === 1) return 'Ontem';

  return `Há ${diff} dias atrás`;
}

export { CountDaysFromDate };
