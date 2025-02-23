import Github from '../assets/social-icons/github.svg';
import Linkedin from '../assets/social-icons/linkedin.svg';
import Discord from '../assets/social-icons/discord.svg';
import Twitter from '../assets/social-icons/x.svg';
import Chess from '../assets/social-icons/chess.webp';
import BlueSky from '../assets/social-icons/bluesky.png';

export const me = {
    firstName: 'Sébastien',
    lastName: 'Morel',
    company: 'Crystallize',
    jobTitle: 'Chief Technology Officer',
    shortJobTitle: 'CTO',
    birthDate: '1983-09-20T18:45:42.000Z',
    companyUrl: 'https://crystallize.com',
    linkedin: 'https://www.linkedin.com/in/sebastienmorel',
};

export const seo = {
    default: {
        site: 'https://sebastien.morel.me',
        title: `${me.firstName} ${me.lastName} - ${me.jobTitle}`,
        description: 'Driving Innovation and accelerating growth through tech leadership.',
        image: 'https://sebastien.morel.me/plopix.png',
    },
};

export const socials = [
    {
        title: 'Development',
        items: [
            {
                logo: Github,
                name: 'GitHub',
                username: 'Plopix',
                url: 'https://github.com/plopix',
            },
        ],
    },
    {
        title: 'Social Media',
        items: [
            {
                logo: Linkedin,
                name: 'Linkedin',
                username: 'in/sebastienmorel',
                url: 'https://linkedin.com/in/sebastienmorel',
            },
            {
                logo: Twitter,
                name: 'Twitter/X',
                username: '@plopix',
                url: 'https://x.com/plopix',
            },
            {
                logo: BlueSky,
                name: 'Bluesky',
                username: '@morel.me',
                url: 'https://bsky.app/profile/morel.me',
            },
        ],
    },
    {
        title: 'Instant Messaging',
        items: [
            {
                logo: Discord,
                name: 'Discord',
                username: 'Plopix',
                url: 'https://discordapp.com/users/plopix',
            },
        ],
    },
    {
        title: 'Games',
        items: [
            {
                logo: Chess,
                name: 'Chess.com',
                username: 'Plopix',
                url: 'https://www.chess.com/member/plopix',
            },
        ],
    },
];
