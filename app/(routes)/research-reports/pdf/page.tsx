'use client';

import { useState } from 'react';
import { Download, FileText, Maximize2, Minimize2 } from 'lucide-react';

interface PdfViewerProps {
  pdfPath: string;
  title?: string;
  height?: string;
}

export default function PdfViewer({
  pdfPath,
  title = "PDF Viewer",
  height = "700px",
}: PdfViewerProps) {
  const [fullscreen, setFullscreen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfPath.split('/').pop() || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`max-w-[1200px] mx-auto rounded-2xl mb-20 overflow-hidden border border-[#625FD0]/20 bg-white transition-all duration-300 ${
        fullscreen
          ? 'fixed inset-4 z-50 max-w-none shadow-2xl'
          : 'shadow-lg hover:shadow-xl hover:border-[#625FD0]/40'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-[#625FD0]/15">
        {/* Left: icon + title */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#625FD0] flex items-center justify-center shrink-0">
            <FileText size={15} className="text-white" />
          </div>
          <span className="text-sm font-semibold text-black truncate max-w-[480px]">
            {title}
          </span>
          <span className="text-[10px] font-bold text-[#625FD0] bg-[#625FD0]/10 px-2 py-0.5 rounded-full shrink-0">
            PDF
          </span>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#625FD0] bg-[#625FD0]/8 hover:bg-[#625FD0]/15 border border-[#625FD0]/25 rounded-lg transition-all duration-200 active:scale-95"
          >
            <Download size={13} />
            Download
          </button>

          <button
            onClick={() => setFullscreen((f) => !f)}
            className="p-1.5 rounded-lg border border-gray-200 hover:border-[#625FD0]/40 hover:bg-[#625FD0]/5 text-gray-500 hover:text-[#625FD0] transition-all duration-200"
            aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {fullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
        </div>
      </div>

      {/* Progress accent line */}
      <div className="h-[2px] bg-[#625FD0]" />

      {/* Viewer */}
      <div
        style={{ height: fullscreen ? 'calc(100% - 56px)' : height }}
        className="relative w-full bg-gray-50"
      >
        <iframe
          src={pdfPath}
          title={title}
          className="absolute inset-0 w-full h-full border-0"
          allow="fullscreen"
        />
      </div>
    </div>
  );
}