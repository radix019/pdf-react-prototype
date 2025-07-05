import { useState } from 'react';
import { MdZoomOut } from 'react-icons/md';
import { MdZoomIn } from 'react-icons/md';
import { Document, Page, pdfjs } from 'react-pdf';
import PDF_url from './World_Shipping.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import '../App.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
export default function ReactPdf() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1);
  };

  return (
    <div className={`pdf-viewer_container`}>
      <MdZoomIn size={25} onClick={handleZoomIn} />

      <MdZoomOut size={25} onClick={handleZoomOut} />

      <span style={{ color: 'black' }}>Scale {(scale * 100).toFixed(0)}%</span>

      <Document file={PDF_url} onLoadSuccess={onDocumentLoadSuccess}>
        {/* <Page pageNumber={pageNumber} /> */}
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={scale}
          />
        ))}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
