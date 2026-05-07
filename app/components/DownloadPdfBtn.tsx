"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DownloadPdfButton() {
  const pathname = usePathname();
  const [isDownloading, setIsDownloading] = useState(false);

  const assessmentId = pathname.split("/").filter(Boolean).at(-1);

  const handleDownloadPdf = async () => {
    if (!assessmentId) {
      alert("Assessment ID not found");
      return;
    }

    try {
      setIsDownloading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL_DEV}/reports/${assessmentId}/pdf`,
        {
          method: "GET",
        },
      );

      if (!res.ok) {
        throw new Error("Failed to download PDF");
      }

      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `assessment-report-${assessmentId}.pdf`;

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF download error:", error);
      alert("Failed to download PDF");
    } finally {
      setIsDownloading(false);
    }
  };

  const isResultPage = pathname.startsWith("/result/");

  if (!isResultPage) return null;

  return (
    <button
      onClick={handleDownloadPdf}
      disabled={isDownloading}
      className="px-3 lg:px-5 py-2.5 border border-[#F09425] text-[#F09425] hover:bg-[#F09425] hover:text-white text-xs lg:text-sm font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer rounded-[4px] disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isDownloading ? "Downloading..." : "Download PDF"}
    </button>
  );
}
