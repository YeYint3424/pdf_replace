"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

type TextPosition = {
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
};

const TEXT_POSITIONS: Record<"name" | "age", TextPosition> = {
  name: {
    x: 160,
    y: 700,
    width: 250,
    height: 16,
    fontSize: 12,
  },
  age: {
    x: 160,
    y: 670,
    width: 80,
    height: 16,
    fontSize: 12,
  },
};

export default function PDFEditPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name") ?? "";
  const age = searchParams.get("age") ?? "";

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name || !age) {
      router.push("/");
      return;
    }

    const generatePdf = async () => {
      try {
        setLoading(true);

        const res = await fetch("/templates/user-template.pdf");
        if (!res.ok) throw new Error("Template not found");

        const pdfBytes = await res.arrayBuffer();
        const pdfDoc = await PDFDocument.load(pdfBytes);

        const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
        const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

        pdfDoc.getPages().forEach((page) => {
          const { height } = page.getSize();

          // 🔹 MASK name
          page.drawRectangle({
            x: TEXT_POSITIONS.name.x - 2,
            y: height - TEXT_POSITIONS.name.y - 2,
            width: TEXT_POSITIONS.name.width,
            height: TEXT_POSITIONS.name.height,
            color: rgb(1, 1, 1),
          });

          // 🔹 DRAW name
          page.drawText(name, {
            x: TEXT_POSITIONS.name.x,
            y: height - TEXT_POSITIONS.name.y,
            size: TEXT_POSITIONS.name.fontSize,
            font: fontBold,
            color: rgb(0, 0, 0),
          });

          // 🔹 MASK age
          page.drawRectangle({
            x: TEXT_POSITIONS.age.x - 2,
            y: height - TEXT_POSITIONS.age.y - 2,
            width: TEXT_POSITIONS.age.width,
            height: TEXT_POSITIONS.age.height,
            color: rgb(1, 1, 1),
          });

          // 🔹 DRAW age
          page.drawText(age, {
            x: TEXT_POSITIONS.age.x,
            y: height - TEXT_POSITIONS.age.y,
            size: TEXT_POSITIONS.age.fontSize,
            font: fontBold,
            color: rgb(0, 0, 0),
          });

          // 🔹 Footer
          page.drawText(`Generated on ${new Date().toLocaleString()}`, {
            x: 40,
            y: 30,
            size: 8,
            font: fontRegular,
            color: rgb(0.5, 0.5, 0.5),
          });
        });

        const pdfBytesModified = await pdfDoc.save();
        const blob = new Blob([pdfBytesModified], {
          type: "application/pdf",
        });

        setPdfUrl(URL.createObjectURL(blob));
      } catch (e) {
        console.error(e);
        setError("Failed to generate PDF");
      } finally {
        setLoading(false);
      }
    };

    generatePdf();

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [name, age, router]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Edited PDF Preview</h1>

        {loading && <p>Generating PDF…</p>}
        {error && <p className="text-red-600">{error}</p>}

        {pdfUrl && (
          <>
            <iframe src={pdfUrl} className="w-full h-[80vh] border" />

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => router.push("/")}
                className="px-4 py-2 bg-gray-600 text-white rounded"
              >
                Back
              </button>

              <a
                href={pdfUrl}
                download={`${name}_${age}.pdf`}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Download PDF
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
