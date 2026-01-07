"use client";
import { useState } from "react";
import GeneratePds from "./GeneratePds";

export default function PdfPage() {
  const [lan, setLan] = useState("en");
  return <GeneratePds lan={lan} />;
}
