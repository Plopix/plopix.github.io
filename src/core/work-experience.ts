import ACX from '../assets/company-logo/acx.jpeg';
import Fidall from '../assets/company-logo/fidall.jpeg';
import Novactive from '../assets/company-logo/nova.png';
import Quickmii from '../assets/company-logo/quickmii.jpeg';
import Orange from '../assets/company-logo/orange.jpeg';
import EPITA from '../assets/company-logo/epita.jpeg';
import type { Experience } from '../contracts/experience';
import Crystallize from '../assets/crystallize.svg';

export const workExperiences: Experience[] = [
    {
        company: {
            name: 'Crystallize',
            url: 'https://crystallize.com',
            logo: Crystallize,
        },
        positions: [
            {
                title: 'Chief Technology Officer',
                location: 'San Francisco, CA',
                type: 'Full Time',
                range: {
                    from: '2022-03',
                },
                description:
                    'Crystallize is the core of your Jamstack, including Payments, Checkout, Order Management, Subscriptions, Analytics, and connections to the rest of your Best-of-Breed stack.',
                bullets: [
                    'Pushing the boundaries of Internet craftsmanship',
                    'Leading the Engineering team',
                    'Headless Commerce for Product Storytellers / PIM / DAM / CMS',
                ],
            },
        ],
    },

    {
        company: {
            name: 'Almavia CX',
            url: 'https://almaviacx.com',
            logo: ACX,
        },
        positions: [
            {
                title: 'Chief Technology Officer Web & Mobile',
                location: 'San Francisco, CA',
                type: 'Full Time',
                range: {
                    from: '2020-01',
                    to: '2022-03',
                },
                description:
                    'CTO of the newly born Web & Mobile business unit (~60 persons) after the acquisition of Novactve by Almavia (250 persons).',
                bullets: [
                    'Directed a team of 20 - 30 developers and 10 - 15 project managers in France, Ukraine, and the U.S',
                    'Led and supervised engineering activities on a global scale. (~55 active projects)',
                    'Ensured the productivity, efficiency, quality, and security of the projects and engineering activities(DXP, e - commerce, APIs, etc.)',
                    'Secured the innovation strategy to keep winning awards and staying ahead of the competition',
                    'Developed and Maintained the Content Management System(CMS) and Digital eXperience Platform(DXP) leadership worldwide',
                    "Explored and evaluated new technologies to gather more expertise in order to improve the company's overall service offer",
                ],
            },
        ],
    },
    {
        company: {
            name: 'Novactive',
            url: 'https://almaviacx.com',
            logo: Novactive,
        },
        positions: [
            {
                title: 'Chief Technology Officer',
                location: 'San Francisco, CA',
                type: 'Full Time',
                range: {
                    from: '2014-05',
                    to: '2020-01',
                },
                bullets: [
                    'Took charge of the U.S.entity in San Francisco while taking over the CTO position worldwide',
                    'Led, managed, planned, and developed business strategies and operations across the U.S.and on a global scale',
                    'Owned the transition to different technical stacks and processes to improve time - to - market for our clients',
                    'Operational and personnel management',
                    'Budgetary, high - level legal, and company administrative functions',
                    'Supervised a team of 20 - 25 developers in France, Canada, and San Francisco',
                    'Won different innovation awards and the Ibexa best partner of the year 2015',
                ],
            },
            {
                title: 'Head of Innovation',
                location: 'Paris, France',
                type: 'Full Time',
                range: {
                    from: '2011-01',
                    to: '2014-05',
                },
                description: 'In charge of all engineering activities, and R&D strategy.',
                bullets: [
                    'Enabled the second office abroad in Canada(Montréal)',
                    'Increased engineering productivity by 25 % by automating processes',
                    'Exceeded R & D Tax Credits objectives, attaining around 10 % of the total revenue',
                    'Supervised a team of 15 - 20 developers in France, Tunisia, and Canada',
                    'Recruited, trained, and evaluated teams of Frontend, and Backend developers',
                ],
            },
            {
                title: 'Head of Web Development department',
                location: 'Paris, France',
                type: 'Full Time',
                range: {
                    from: '2008-01',
                    to: '2010-12',
                },
                bullets: [
                    'Supervised a team of 10 - 15 developers in France and Tunisia',
                    'Enabled the first office abroad in Tunisia',
                    'Recruited, trained, and evaluated teams of Frontend, and Backend developers',
                    'Improved team productivity and efficiency by establishing processes',
                    'Ensured the successful ISO 9001 certification regarding Production, Delivery, and QA processes',
                ],
            },
            {
                title: 'Web Architect',
                location: 'Paris, France',
                type: 'Full Time',
                range: {
                    from: '2005-10',
                    to: '2008-01',
                },
                description: 'Web technical project manager, lead developer, and system administrator.',
                bullets: [
                    'Led and coordinated the architecture decisions across all the projects',
                    'Performed many technical audits that led to taking over projects',
                    'Owned the eZ Publish practice',
                    'Maintained the technical quality of programming',
                ],
            },
            {
                title: 'Web Developer in learning',
                location: 'Paris, France',
                type: 'Full Time',
                range: {
                    from: '2003-10',
                    to: '2005-10',
                },
                bullets: [
                    'Introduced PHP5 with Object - Oriented Programming to the company',
                    'Helped and assisted the CTO to architect and industrialize many e - commerce projects',
                    'Ignited the Content Management System expertise with eZ Publish and Spip',
                ],
            },
        ],
    },
    {
        company: {
            name: 'Quickmii',
            logo: Quickmii,
        },
        positions: [
            {
                title: 'Co-Founder & Chief Technology Officer',
                location: 'San Francisco, CA',
                type: 'Side Project',
                range: {
                    from: '2013-05',
                    to: '2018-12',
                },
                description:
                    'Startup project which allows users to avoid filling out forms online but also offline thanks to their mobile phones.',
                bullets: [
                    'Researched and obtained a patent (US20150248394A1) for automatically uploading user profile information',
                ],
            },
        ],
    },

    {
        company: {
            name: 'Fidall',
            url: 'https://fidall.com',
            logo: Fidall,
        },
        positions: [
            {
                title: 'Co-Founder & Chief Technology Officer',
                location: 'Paris, France',
                type: 'Side Project',
                range: {
                    from: '2010-06',
                    to: '2014-01',
                },
                description: 'Startup project which enables users to store their loyalty cards in their mobile phones.',
                bullets: [
                    'Designed and developed the iOS application and the architecture',
                    'Won several startups competitions',
                    'Reached the Top 10 in the AppStore in the LifeStyle category. (more than 25k downloads per day) in 2010',
                    'More than 2M users the first year, 800k - 1M active users every weekend',
                    'Engineered a custom Push Notification System able to send around 200k push under a minute',
                ],
            },
        ],
    },

    {
        company: {
            name: "EPITA: Ecole d'Ingénieurs en Informatique",
            url: 'https://www.epita.fr',
            logo: EPITA,
        },
        positions: [
            {
                title: 'iOS Teacher (Specialization in Management & Information Technology)',
                location: 'Paris, France',
                type: 'seasonal',
                range: {
                    from: '2011-01',
                    to: '2012-01',
                },
                description: 'EPITA is a french Graduate School of Computer Science and Advanced Technologies.',
                bullets: [
                    'Initiated and animated the iOS(3.x) Objective - C class for students in their last(5th) year at university',
                    'Coached and evaluated their work',
                    'Helped them to publish their project in the AppStore',
                ],
            },
        ],
    },
    {
        company: {
            name: 'France Telecom',
            url: 'https://crystallize.com',
            logo: Orange,
        },
        positions: [
            {
                title: 'Web Developer and System administrator in learning',
                location: 'Amiens, France',
                type: 'Internship',
                range: {
                    from: '2003-04',
                    to: '2003-07',
                },
                description: 'Web Developer and System administrator in learning.',
                bullets: [
                    'Built an intranet tool to help the sales team following and tracking their leads and their conversion rate',
                ],
            },
        ],
    },
];
