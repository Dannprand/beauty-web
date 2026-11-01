export const formatCurrency = (amount: number): string => {
  return `Rp ${amount.toLocaleString("id-ID")}`;
};

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\d{2})(\d{3})(\d{4})(\d+)/, "+$1 $2-$3-$4");
};
