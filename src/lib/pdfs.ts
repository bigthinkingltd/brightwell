//This filw will be the central PDF registry for the app
//defines what PDFs exist, how they behave and who can access them

export type PdfAccess = 'public' | 'quiz';
export type PdfDisposition = 'inline' | 'download';


//Waht the PDF object looks like
export type PdfDefinition = {
  key: string;                  //where it lives in S3
  disposition: PdfDisposition;  // how it behaves
  access: PdfAccess;            //who can access 
};

//essentially the map
export const pdfRegistry: Record<string, PdfDefinition> = {
  'recommended-text-1': {
    key: 'pdfs/recommended/recommended-text-1.pdf',
    disposition: 'download', //downloadable
    access: 'public',
  },
  'recommended-text-2': {
    key: 'pdfs/recommended/recommended-text-2.pdf',
    disposition: 'download', //downloadable
    access: 'public',
  },
  'xi-pdf-1': {
    key: 'pdfs/xi/xi-pdf-1.pdf',
    disposition: 'inline', //viewable
    access: 'quiz',
  },
  'xi-pdf-2': {
    key: 'pdfs/xi/xi-pdf-2.pdf',
    disposition: 'inline', //viewable
    access: 'quiz',
  },
};

export function getPdfBySlug(slug: string): PdfDefinition | undefined {
  return pdfRegistry[slug];
}