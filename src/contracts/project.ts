export type Project = {
    title: string;
    repositoryName: string;
    repositoryOrganization: {
        name: string;
        type: 'github' | 'gitlab';
    };
    packagePlatform: 'github' | 'npm' | 'composer';
    packagePlatformId: string;
    baseline: string;
    description: string;
    urlDocumentation?: string;
    sponsors: {
        name: string;
        url: string;
    }[];
    roles: ('Creator' | 'Contributor' | 'Maintainer')[];
    isReleased?: boolean;
};
