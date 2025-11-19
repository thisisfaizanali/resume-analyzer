// src/types/pdfjs-dist.d.ts

declare module 'pdfjs-dist/build/pdf.mjs' {
  // minimal shape we use; mark as `any` so you don't get leftover errors
  const pdfjs: any;
  export = pdfjs;
}

declare module 'pdfjs-dist/build/pdf.worker.min.mjs?url' {
  // Vite returns an object with a default string URL for `?url` imports
  const workerUrl: string;
  export default workerUrl;
}
