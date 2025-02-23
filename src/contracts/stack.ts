export type Stack = {
    title: string;

    description: string;
    technologies: {
        name: string;
        about: string;
        icon: ImageMetadata;
        description: string;
    }[];
};
