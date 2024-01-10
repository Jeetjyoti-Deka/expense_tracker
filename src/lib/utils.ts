export const capitalizeString = (str: string) => {
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);

  return str2;
};

export function formatMoney(
  amount: string | number,
  currencySymbol: string = "₹"
): string {
  // Convert input to a number if it's a string
  const numericAmount: number =
    typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numericAmount)) {
    throw new Error(
      "Invalid input. Please provide a valid number or numeric string."
    );
  }

  const formattedAmount: string = numericAmount
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return `${currencySymbol}${formattedAmount}`;
}
