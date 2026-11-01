import { WHATSAPP_NUMBER } from "@/constants/contact";
import { formatCurrency } from "@/utils/formatters";

export const getGeneralWhatsAppUrl = (): string => {
  const text =
    "Hello Beauty Lotion Concierge, I would like to inquire about the Beauty Lotion formulation and allocation.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const getOrderWhatsAppUrl = (quantity: number, unitPrice: number): string => {
  const total = formatCurrency(quantity * unitPrice);
  const text = `Hello Beauty Lotion Concierge, I would like to acquire ${quantity} bottle(s) of Beauty Lotion (150ml). Total allocation: ${total}. Please advise on express delivery.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

