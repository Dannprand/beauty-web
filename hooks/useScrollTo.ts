import { useCallback } from "react";

export function useScrollTo() {
  const scrollTo = useCallback((id: string, focusId?: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (focusId) {
        setTimeout(() => {
          const focusElement = document.getElementById(focusId);
          if (focusElement) {
            focusElement.focus();
          }
        }, 500);
      }
    }
  }, []);

  return { scrollTo };
}

