import type { Certification } from '../contracts/certification';
import Github from '../assets/company-logo/github.jpeg';
import Symfony from '../assets/company-logo/symfony.jpeg';
import Slack from '../assets/company-logo/slack.jpeg';
import Contentful from '../assets/company-logo/contentful.jpeg';
import Ibexa from '../assets/company-logo/ibexa.jpeg';
import EZ from '../assets/company-logo/ez.jpeg';
import Varnish from '../assets/company-logo/varnish.jpeg';

export const certifications: Certification[] = [
    {
        title: 'Github Foundations',
        issuer: 'Github',
        issuedAt: 'Mar 2024',
        logo: Github,
        credential: {
            url: 'https://www.credly.com/badges/97455fcd-ae30-44f6-a159-ac03c844dc34/public_url',
        },
    },
    {
        title: 'Symfony 5 Certified Developer (Advanced)',
        issuer: 'Symfony',
        issuedAt: 'Dec 2021',
        logo: Symfony,
        credential: {
            url: 'https://connect.symfony.com/profile/plopix',
        },
    },
    {
        title: 'Slack Certified Developer',
        issuer: 'Slack',
        issuedAt: 'Aug 2021',
        logo: Slack,
        credential: {
            url: 'https://badges.slackcertified.com/8267b81f-d24e-42e9-82b2-f2bf66bc2162',
            id: '3707106',
        },
    },
    {
        title: 'Slack Certified Admin',
        issuer: 'Slack',
        issuedAt: 'Jul 2021',
        logo: Slack,
        credential: {
            url: 'https://badges.slackcertified.com/7c8de791-09e6-4e9c-91f6-b293d50b821b',
            id: '278ae6q4kyc5',
        },
    },
    {
        title: 'Contentful Certified Professional',
        issuer: 'Contentful',
        issuedAt: 'Oct 2020',
        logo: Contentful,
    },

    {
        title: 'Ibexa DXP Sales Certification',
        issuer: 'Ibexa',
        issuedAt: 'Jan 2021',
        logo: Ibexa,
        credential: {
            id: 'CGYDDNDQSY-VGTTZLLQ-XHRWWTYWHM',
        },
    },
    {
        title: 'eZ Platform Sales Certification',
        issuer: 'eZ Systems',
        issuedAt: 'Jan 2020',
        logo: EZ,
    },
    {
        title: 'eZ Platform Developer',
        issuer: 'eZ Systems',
        issuedAt: 'Sep 2018',
        logo: EZ,
    },
    {
        title: 'eZ Publish 5 Developer',
        issuer: 'eZ Systems',
        issuedAt: 'Jul 2013',
        logo: EZ,
    },
    {
        title: 'eZ Publish 4.7 Advanced Developer',
        issuer: 'eZ Systems',
        issuedAt: 'Jul 2013',
        logo: EZ,
        credential: {
            id: '120908529',
        },
    },
    {
        title: 'eZ Publish 4.4 Developer',
        issuer: 'eZ Systems',
        logo: EZ,
        credential: {
            id: '383618',
        },
    },
    {
        title: 'eZ Publish 4.3 Developer',
        issuer: 'eZ Systems',
        logo: EZ,
        credential: {
            id: '346206',
        },
    },
    {
        title: 'eZ Publish 4.1 Developer',
        issuer: 'eZ Systems',
        logo: EZ,
        credential: {
            id: '285521',
        },
    },
    {
        title: 'eZ Publish 3.8 Developer',
        issuer: 'eZ Systems',
        logo: EZ,
        credential: {
            id: '180010',
        },
    },
    {
        title: 'Varnish Admin',
        issuer: 'Varnish Software',
        logo: Varnish,
    },
];
