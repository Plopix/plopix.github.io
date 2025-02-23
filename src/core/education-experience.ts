import type { Experience } from '../contracts/experience';
import IUT from '../assets/company-logo/iut.jpeg';
import ITIN from '../assets/company-logo/itin.jpg';
export const educationExperiences: Experience[] = [
    {
        company: {
            name: 'ITIN',
            logo: ITIN,
        },
        positions: [
            {
                title: "MSCS, Master's degree, Computer Systems Networking and Telecommunications",
                location: 'Paris, France',
                type: 'Master',
                range: {
                    from: '2020-01',
                    to: '2022-03',
                },
                description:
                    'Major in Security, Systems Networking and Telecommunications, Technical Project Management, Team Building, Web Development.',
                bullets: [
                    'Work - study program 2 months at university / 2 months in the company',
                    'Wrote a memoir about trojans capabilities on Linux / Unix System',
                    'Presented an internship memoir about project management and project life cycle based on my two - year in the company',
                    'Researched and built an "X11 proxy" to help people with disabilities to zoom their Linux interface as the final project assignment',
                ],
            },
        ],
    },
    {
        company: {
            name: 'Université de Picardie Jules Verne',
            url: 'https://www.u-picardie.fr',
            logo: IUT,
        },
        positions: [
            {
                title: 'HND (DUT), Computer Systems Networking and Telecommunications',
                location: 'Amiens, France',
                type: 'DUT',
                range: {
                    from: '2001-09',
                    to: '2003-07',
                },
                description: 'Major in Security, Sysadmin, Sofware development, and Networking.',
                bullets: ['Two-year university degree in technology'],
            },
        ],
    },
];
