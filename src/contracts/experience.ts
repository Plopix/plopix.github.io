export type Experience = {
    company: {
        name: string;
        url?: string;
        logo: string | ImageMetadata;
    };
    positions: WorkPosition[];
};

export type WorkPosition = {
    title: string;
    location: string;
    type: string;
    range: {
        from: string;
        to?: string;
    };
    description?: string;
    bullets: string[];
};
