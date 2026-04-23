//recieves the PDF slug, checks whether PDF exists and whether user is allowed to access it
//returns a temp presigned S3 URL

import { NextRequest, NextReponse } from 'next/server';

import { createPresignedPdfUrl } from '../../../../lib/s3';
import { pdfs } from '../../../../lib/pdfs';
import { MEMBERS_ACCESS_COOKIE } from '../../../../lib/membersAccess';


//will define the expected shape of the route 
type RouteContext = {
    params: Promise<{
        slug: string;
    }>;
};


//handle GET requests to api/pdfs/[slug]
export async function GET(request: NextRequest, context: RouteContext) {
  try {
    //extract slug from URL
    const { slug } = await context.params;

    //find matching PDF from registry
    const pdf = pdfs.find((entry) => entry.slug === slug);

    //return 404 if PDF not exist
    if (!pdf) {
      return NextResponse.json(
        { error: 'PDF not found.' },
        { status: 404 }
      );
    }

    //check access for gated PDFs
    if (pdf.access === 'quiz') {
      const hasAccessCookie =
        request.cookies.get(MEMBERS_ACCESS_COOKIE)?.value === 'true';

      if (!hasAccessCookie) {
        return NextResponse.json(
          { error: 'You are not allowed to access this PDF.' },
          { status: 403 }
        );
      }
    }

    //generate presigned S3 URL
    const signedUrl = await createPresignedPdfUrl({
      key: pdf.key,
      disposition: pdf.disposition,
      fileName: pdf.fileName,
    });

    //return URL to frontend
    return NextResponse.json({ url: signedUrl });

  } catch (error) {
    //handles unexpected server errors
    console.error('Error generating presigned PDF URL:', error);

    return NextResponse.json(
      { error: 'Something went wrong while generating the PDF URL.' },
      { status: 500 }
    );
  }
}