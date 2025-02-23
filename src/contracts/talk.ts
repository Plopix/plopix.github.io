export type Talk = {
    title: string;
    description: string;
    event?: {
        name: string;
        url?: string;
    };
    location: string;
    date: string;
    slides?: string;
    video?: string;
    images: ImageMetadata[];
};
