export const currencyFormat = (amount: number, options: Intl.NumberFormatOptions) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'usd',
    maximumFractionDigits: 3,
    minimumFractionDigits: 0,
    ...options,
  }).format(amount);
};
