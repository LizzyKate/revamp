/* eslint-disable prettier/prettier */
import S3 from 'aws-s3'

const config = {
    bucketName: 'elizabeths-bucket-123435',
    accessKeyId: 'AKIAUR2D2EDQ6HIEMTMM',
    region: 'us-east-2',
    secretAccessKey: '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',
    s3Url: 'https://elizabeths-bucket-123435.s3.amazonaws.com',
}

const S3Client = new S3(config)

export default { S3Client }
