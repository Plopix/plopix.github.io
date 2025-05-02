import type { Project } from '../contracts/project';

const Novactive: Project['sponsors'][number] = { name: 'Novactive', url: 'https://www.novactive.com' };
const Ibexa: Project['sponsors'][number] = { name: 'Ibexa', url: 'https://ibexa.co' };
const Crystallize: Project['sponsors'][number] = { name: 'Crystallize', url: 'https://crystallize.com' };

const NovactiveOrg: Project['repositoryOrganization'] = { name: 'Novactive', type: 'github' };
const CrystallizeOrg: Project['repositoryOrganization'] = { name: 'CrystallizeApi', type: 'github' };
const eZSystemsOrg: Project['repositoryOrganization'] = { name: 'eZSystems', type: 'github' };
const PlopixOrg: Project['repositoryOrganization'] = { name: 'plopix', type: 'github' };
const MissiveJsOrg: Project['repositoryOrganization'] = { name: 'missive-js', type: 'github' };

export const currentProjects: Project[] = [
    {
        title: 'Missive.js',
        repositoryName: 'missive.js',
        packagePlatform: 'npm',
        packagePlatformId: 'missive.js',
        baseline: 'The Service Bus that you needed.',
        description: 'Fully-typed Service Bus for Node.js fueled by fancy Middlewares, Envelopes and Stamps.',
        urlDocumentation: 'https://missive-js.github.io/missive.js/',
        roles: ['Creator', 'Maintainer'],
        repositoryOrganization: MissiveJsOrg,
        sponsors: [],
        isReleased: true,
    },
    {
        title: 'Crystallize JS Api Client',
        repositoryName: 'js-api-client',
        packagePlatform: 'npm',
        packagePlatformId: '@crystallize/js-api-client',
        baseline: 'Crystallize (Java|Type) script Client',
        description: 'Provides simplifications and helpers to easily fetch data from your Crystallize tenant.',
        urlDocumentation: 'https://crystallize.com/learn/open-source/sdks-and-libraries/js-api-client',
        roles: ['Creator', 'Maintainer'],
        repositoryOrganization: CrystallizeOrg,
        sponsors: [Crystallize],
        isReleased: true,
    },
    {
        title: 'CLIffhanger',
        repositoryName: 'cliffhanger',
        packagePlatform: 'github',
        packagePlatformId: 'cliffhanger',
        baseline: 'Scripts to MCP Server tool in an instant.',
        description:
            'A CLI that runs your scripts and exposes them as tools through a built-in, extensible MCP server.',
        urlDocumentation: 'https://cliffhanger.dev',
        roles: ['Creator', 'Maintainer'],
        repositoryOrganization: PlopixOrg,
        sponsors: [],
        isReleased: true,
    },
];

export const legacyProjects: Project[] = [
    {
        title: 'Nova eZ SEO Bundle',
        repositoryName: 'NovaeZSEOBundle',
        packagePlatform: 'composer',
        packagePlatformId: 'novactive/ezseobundle',
        baseline: 'Optimized SEO management for eZ Platform',
        description: 'Bundle that simplifies your SEO management, metas, sitemaps, robots.txt, etc.',
        urlDocumentation: 'https://novactive.github.io/NovaeZSEOBundle',
        roles: ['Creator'],
        repositoryOrganization: NovactiveOrg,
        sponsors: [Novactive],
        isReleased: true,
    },
    {
        title: 'eZ Launchpad',
        repositoryName: 'launchpad',
        packagePlatform: 'github',
        packagePlatformId: 'ezsystems/launchpad',
        baseline: 'CLI tool to bootstrap an eZ Platform project Docker stack',
        description: 'A tool that will help you build an eZ Platform project on top of Docker in less than 5 minutes.',
        urlDocumentation: 'https://ezsystems.github.io/launchpad/',
        roles: ['Creator', 'Maintainer'],
        repositoryOrganization: eZSystemsOrg,
        sponsors: [Ibexa],
        isReleased: true,
    },
    {
        title: 'Nova eZ Slack Bundle',
        repositoryName: 'NovaeZSlackBundle',
        packagePlatform: 'composer',
        packagePlatformId: 'novactive/ezslackbundle',
        baseline: 'Drive your CMS with this complete Slack integration',
        description:
            'Bundle that allows a 2-way communication between your Slack workspace and your eZ Content Repository. Build custom publication workflow and use them from your mobile.',
        roles: ['Creator'],
        repositoryOrganization: NovactiveOrg,
        sponsors: [Ibexa, Novactive],
        isReleased: true,
    },
    {
        title: 'Nova eZ 2FA Bundle',
        repositoryName: 'NovaeZ2FABundle',
        packagePlatform: 'composer',
        packagePlatformId: 'novactive/ez2fabundle',
        baseline: 'Security first!',
        description:
            'Novactive eZ 2FA Bundle is an eZ Platform bundle that provides two-factor authentication for your project.',
        roles: ['Creator'],
        repositoryOrganization: NovactiveOrg,
        sponsors: [Novactive],
    },
    {
        title: 'Nova eZ Cloudinary Bundle',
        repositoryName: 'NovaeZCloudinaryBundle',
        packagePlatform: 'composer',
        packagePlatformId: 'novactive/ezcloudinarybundle',
        baseline: 'Images optimizations and manipulations by Cloudinary on top of variations',
        description: 'Bundle that brings the power of Cloudinary in your eZ Platform project.',
        roles: ['Creator'],
        repositoryOrganization: NovactiveOrg,
        sponsors: [Novactive],
        isReleased: true,
    },
    {
        title: 'Nova eZ Fastly Image Optimizer Bundle',
        repositoryName: 'NovaeZFastlyImageOptimizerBundle',
        packagePlatform: 'composer',
        packagePlatformId: 'novactive/ezfastlyiobundle',
        baseline: 'Images optimizations and manipulations by Fastly on top of variations',
        description: 'Bundle that brings the power of Fastly in your eZ Platform project.',
        roles: ['Creator'],
        repositoryOrganization: NovactiveOrg,
        sponsors: [Novactive],
        isReleased: true,
    },
    {
        title: 'Nova eZ Protected Content Bundle',
        repositoryName: 'NovaeZProtectedContentBundle',
        packagePlatform: 'composer',
        packagePlatformId: 'novactive/ezprotectedcontentbundle',
        baseline: 'Protect contents via a simple password with changing the Content Type',
        description:
            'Simplest paywall-like mechanism to protect a content using a password. It just works and no session used!',
        roles: ['Creator'],
        repositoryOrganization: NovactiveOrg,
        sponsors: [Novactive],
        isReleased: true,
    },

    {
        title: 'Plopix JS Console',
        repositoryName: 'js-console-wrapper',
        packagePlatform: 'npm',
        packagePlatformId: '@plopix/js-console',
        baseline: 'A beautiful Console.log wrapper',
        description:
            'Wrapper of console.log that enables output depending on a Verbosity level. It also brings color and manage compatibility.',
        roles: ['Creator', 'Maintainer'],
        repositoryOrganization: PlopixOrg,
        sponsors: [],
        isReleased: true,
    },
];
