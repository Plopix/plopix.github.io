export type Certification = {
    title: string;
    issuer: string;
    issuedAt?: string;
    credential?: {
        id?: string;
        url?: string;
    };
    logo: ImageMetadata;
};
