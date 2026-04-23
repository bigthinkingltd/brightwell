//Server only
//Handles communication with S3 and generates presigned URL, allowing browser temorary access to PDFs

import 'server-only';

import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';