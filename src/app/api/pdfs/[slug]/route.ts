//recieves the PDF slug, checks whether PDF exists and whether user is allowed to access it
//returns a temp presigned S3 URL

import { NextRequest, NextReponse } from 'next/server';

import { createPresignedPdfUrl } from '../../../../lib/s3';
import { pdfs } from '../../../../lib/pdfs';

