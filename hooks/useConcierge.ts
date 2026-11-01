import { useState } from "react";
import { conciergeService } from "@/service/conciergeService";

export function useConcierge() {
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientContact.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await conciergeService.submitInquiry({
        name: clientName,
        contact: clientContact,
        message: clientMessage,
      });

      if (response.success) {
        setInquirySent(true);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Terjadi kesalahan saat mengirim transmisi.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setInquirySent(false);
    setClientName("");
    setClientContact("");
    setClientMessage("");
    setErrorMessage(null);
  };

  return {
    clientName,
    setClientName,
    clientContact,
    setClientContact,
    clientMessage,
    setClientMessage,
    isSubmitting,
    inquirySent,
    errorMessage,
    handleSubmit,
    resetForm,
  };
}

