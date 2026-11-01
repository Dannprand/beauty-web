import { useState, useMemo } from "react";
import { UNIT_PRICE } from "@/constants/product";

export function useOrderQuantity(initialQuantity: number = 1, min: number = 1, max: number = 10) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    setQuantity((prev) => Math.min(max, prev + 1));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(min, prev - 1));
  };

  const totalPrice = useMemo(() => quantity * UNIT_PRICE, [quantity]);

  return {
    quantity,
    setQuantity,
    increment,
    decrement,
    unitPrice: UNIT_PRICE,
    totalPrice,
  };
}
