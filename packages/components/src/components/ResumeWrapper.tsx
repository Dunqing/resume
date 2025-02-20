'use client'

import { type ReactNode } from 'react'

export default function ResumeWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="resume-content">
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          body {
            font-family: var(--font-noto-sans-sc), "PingFang SC", "Microsoft YaHei", "SimSun", system-ui, -apple-system, sans-serif;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0;
            padding: 0;
          }

          .resume-content {
            width: 210mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {children}
    </div>
  )
}
