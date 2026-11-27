import type { Metadata } from "next"
import AudiogramTool from "./AudiogramTool"

export const metadata: Metadata = {
  title: "Audiogram Tool | Ralas",
  description: "Internal staff tool for generating audiological evaluation reports.",
  robots: { index: false, follow: false },
}

export default function AudiogramPage() {
  return <AudiogramTool />
}
