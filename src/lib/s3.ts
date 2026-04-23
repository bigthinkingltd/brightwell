//Server only
//Handles communication with S3 and generates presigned URL, allowing browser temorary access to PDFs

import 'server-only';

import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import type { PdfDisposition } from './pdfs';

//will read required AWS config from environment variables 
const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_S3_Bucket_Name;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

//failures for missing environment variables 
//config problems arrise as soon as server starts
if (!region) {
    throw new Error('Missing environment variable: AWS_REGION');
}

if (!bucketName) {
    throw new Error('Missing environment variable: AWS_S3_BUCKET_NAME');
}

if (!accessKeyId) {
    throw new Error('Missing environment variable: AWS_ACCESS_KEY_ID');
}

if (!secretAccessKey) {
    throw new Error('Missing enviroment variable: AWS_SECRET_ACCESS_KEY');
}


//reusable S3 client for server side use
//Will CURRENTLY use access keys from env variables 

const s3 = new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
});

//exports the buket name so other serverside files can use one source of truth
export function getS3BucketName() string {
    return bucketName;
}

//content disposition header value
// inline: lets the PDF open in the browser if supported
// attachment: forces the browsee to download the file

function buildContentDisposition(
    disposition: PdfDisposition,
    fileName?: string,
): string {
    if (disposition === 'download') {
        return fileName
            ? 'attachment; filename="$(filename)"'
            : 'attachment';
    }

    return fileName
        ? 'inline; filename="${fileName}" '
        : 'inline';
}


//generates a presigned URL for a PDF in S3
// URL is temporary and safe to return to the browser
export async function createPresignedPdfUrl({
  key,
  disposition,
  fileName,
  expiresIn = 60,
}: {
  key: string;
  disposition: PdfDisposition;
  fileName?: string;
  expiresIn?: number;
}): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: key,
    ResponseContentType: 'application/pdf',
    ResponseContentDisposition: buildContentDisposition(disposition, fileName),
  });

  const signedUrl = await getSignedUrl(s3, command, {
    expiresIn,
  });

  return signedUrl;
}
