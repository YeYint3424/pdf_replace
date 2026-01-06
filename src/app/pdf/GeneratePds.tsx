"use client";

import dynamic from "next/dynamic";
import { PdsDocument } from "./PdsDocument";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
  }
);

const pdsData = {
  issueDate: "05/01/2026",
  planName: "e-Takaful Hayat",

  contribution: {
    amount: "12.90",
    mode: "Bulanan",
    lastPayingAge: 65,
  },

  benefits: {
    death: "100,000",
    accidentalDeath: "Tambahan 200%",
    illness: "1,000",
    surrender: "Lebihan DRP",
  },

  contact: {
    phone: "1-300-13-8888",
    email: "info@etiqa.com.my",
    website: "www.etiqa.com.my",
  },
};

export default function GeneratePds() {
  return (
    <PDFViewer width="100%" height="1000">
      <PdsDocument
        data={pdsData}
        // issueDate="05/01/2026"
        // contributionAmount="12.90"
        // contributionMode="Bulanan"
      />
    </PDFViewer>
  );
}
