import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  format,
  parseISO,
} from 'date-fns';

function calculateDiferenceInYears(
  initialDate: string,
  finalDate = new Date()
) {
  const initialDateFormatted = parseISO(initialDate) || new Date();
  const diff = differenceInYears(finalDate, initialDateFormatted);

  if (diff === 0) {
    const diffInMonths = +differenceInMonths(finalDate, initialDateFormatted);

    if (diffInMonths <= 1) {
      const differenceInDaysValue = differenceInDays(
        finalDate,
        initialDateFormatted
      );
      return 'Há ' + differenceInDaysValue + ' dias';
    }
    return 'Há ' + diffInMonths + ' meses';
  }

  return format(initialDateFormatted, 'dd/MM/yyyy');
}
export { calculateDiferenceInYears };
