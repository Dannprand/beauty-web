import { ConciergeFormData, ConciergeApiResponse } from "@/types/concierge";

export const conciergeService = {
  /**
   * Mengirim form konsultasi/inquiry ke backend API
   */
  async submitInquiry(data: ConciergeFormData): Promise<ConciergeApiResponse> {
    // Simulasi panggilan endpoint API asinkron
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Validasi payload
    if (!data.name.trim() || !data.contact.trim()) {
      throw new Error("Nama dan kontak wajib diisi.");
    }

    // Ketika backend API endpoint siap, integrasikan dengan:
    // const res = await fetch("/api/concierge", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    // return res.json();

    return {
      success: true,
      message: "Transmission received. A dedicated advisor will reply shortly.",
    };
  },
};
