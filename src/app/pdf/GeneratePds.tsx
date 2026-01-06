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
  issueDate: "25082025",
  contribution: {
    amount: "100",
    mode: "bulanan",
    lastPayingAge: "70",
  },
  benefits: {
    death: "50,000",
    accidentalDeath: "200% tambahan",
    illness: "1,000",
    surrender: "Lebihan DRP terkumpul",
  },
  fees: {
    wakalah: "25.00",
  },
  contact: {
    phone: "1-300-13-8888",
    email: "info@etiqa.com.my",
    website: "https://www.etiqa.com.my",
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
