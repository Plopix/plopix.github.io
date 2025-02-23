import type { Talk } from '../contracts/talk';
import { StaticImages } from '../core/images';

export const upcomingTalks: Talk[] = [
    // {
    //     title: "Implementing a shopping cart with React 19",
    //     description: "Let's build a shopping cart with the new hooks from React 19. We will start with a simple implementation and slowly iterate our way through different React 19 features and hooks using Next.js.",
    //     date: "2024-08-27",
    //     event: {
    //         name: "All Things Web Meetup",
    //         url: "https://allthingsweb.dev/2024-08-27-react-bay-area-at-mux#talks"
    //     },
    //     location: "At Mux in San Francisco, USA",
    //     slides: "/slides/cart-react-19.pdf",
    //     video: "https://www.youtube.com/watch?v=edOxB0lXFmo&t=146s",
    //     images: [
    //         StaticImages.cartreactmux,
    //         StaticImages.cartreact19mux2,
    //     ]
    // },
];

export const talks: Talk[] = [
    {
        title: 'Implementing a shopping cart with React 19',
        description:
            "Let's build a shopping cart with the new hooks from React 19. We will start with a simple implementation and slowly iterate our way through different React 19 features and hooks using Next.js.",
        date: '2024-08-27',
        event: {
            name: 'All Things Web Meetup',
            url: 'https://allthingsweb.dev/2024-08-27-react-bay-area-at-mux#talks',
        },
        location: 'At Mux in San Francisco, USA',
        slides: '/slides/cart-react-19.pdf',
        video: 'https://www.youtube.com/watch?v=edOxB0lXFmo&t=146s',
        images: [StaticImages.cartreactmux, StaticImages.cartreact19mux2],
    },
    {
        title: 'Opening Keynote & Master of Ceremony',
        description:
            'React the Viking Way! The 2024 edition of React Norway, we dived into the latest and greatest of the React ecosystem.',
        date: '2024-06-24',
        event: {
            name: 'React Norway 2024',
            url: 'https://reactnorway.com/past-conferences/2024',
        },
        location: 'Farris Bad Hotel in Larvik, Norway',
        slides: '/slides/rn-2024.pdf',
        video: 'https://www.youtube.com/watch?v=w5WhcX0Q5NU',
        images: [StaticImages.rn20241, StaticImages.rn20242],
    },
    {
        title: 'Prepare for Remix V2',
        description:
            "Get ready for a compact and insightful discussion on the migration to Remix V2, the upcoming iteration of our favorite BFF. This talk will provide highlights on improved features as well as explain the value it brings. We'll jump into a straightforward guide to migrating from Remix V1 to V2, focusing on practical steps and key changes following the documentation as we should! In the midst of this, we'll sprinkle in valuable tips, tricks, and best practices to help you avoid common hurdles and enhance your migration experience.",
        date: '2023-08-23',
        event: {
            name: 'Remix Bay Area Meetup',
            url: 'https://www.meetup.com/remix-bay-area/events/295253615',
        },
        location: 'At Mux in San Francisco, USA',
        slides: '/slides/remix-bay-area-meetup-aug-2023.pdf',
        images: [StaticImages.remixbayarearemixv2],
    },
    {
        title: 'Opening Keynote & Master of Ceremony',
        description:
            'Times are changing and so is React! The 2023 edition of React Norway, we dived into the latest and greatest of the React ecosystem.',
        date: '2023-06-16',
        event: {
            name: 'React Norway 2023',
            url: 'https://reactnorway.com/past-conferences/2023',
        },
        location: 'Farris Bad Hotel in Larvik, Norway',
        slides: '/slides/rn-2023.pdf',
        video: 'https://youtu.be/zJM3BIev8RI?t=567',
        images: [StaticImages.rn2023],
    },

    {
        title: 'Opening Keynote of the conference',
        description: 'All about our first times (of success!)',
        date: '2022-06-24',
        event: {
            name: 'React Norway 2022',
            url: 'https://reactnorway.com/past-conferences/2022',
        },
        location: 'Farris Bad Hotel in Larvik, Norway',
        slides: '/slides/rn-2022.pdf',
        video: 'https://youtu.be/AQRlDs92XFA?t=1174',
        images: [StaticImages.rn2022],
    },
    {
        title: 'Remix & high performance eCommerce',
        description:
            'Performances are key. That statement is true for any web application but even more for eCommerce applications that convert performances into revenue. Why are eCommerce projects more complex than others? What are the key topics and the special things that you need to take into account when building an eCommerce application in 2022. In this talk we will deep dive into all the things that must be dynamic and how to achieve performances. All explained with a Remix project example.',
        date: '2022-05-24',
        event: {
            name: 'Remix Conf',
            url: 'https://remix.run/conf/2022',
        },
        location: 'Salt Lake City, USA',
        slides: '/slides/remix-conf-2022.pdf',
        video: 'https://www.youtube.com/watch?v=vCiPjshKzdg&list=PLXoynULbYuEC36XutMMWEuTu9uuh171wx&index=18',
        images: [StaticImages.remixconf3, StaticImages.remixconf, StaticImages.remixconf2],
    },
    {
        title: 'eZ Platform Cloud and eZ Launchpad',
        description:
            "Learn what's involved in the process of launching a new web project—from starting with nothing to having a local development environment shared with your team using eZ Platform, Docker plus Platform.sh and more in just a few hours.",
        date: '2018-06-20',
        event: {
            name: 'eZ Conference 2018',
        },
        location: 'Kohln, Germany',
        slides: '/slides/ez-conf-2018.pdf',
        images: [StaticImages.ezconf2018],
    },
    {
        title: 'Unleash your Symfony projects with eZ Platform',
        description:
            'All about he different state of CMSs, and why if you are using Symfony, there are plenty of reasons to get eZ Platform as foundation of your projects.',
        date: '2017-03-23',
        event: {
            name: 'SF PHP Meetup',
            url: 'https://www.meetup.com/sf-php/photos/27715630',
        },
        location: 'At Cloudflare in San Francisco, USA',
        slides: '/slides/sf-php-meetup.pdf',
        images: [StaticImages.sfphp1, StaticImages.sfphp2],
    },
    {
        title: 'How to integrate FOSUserBundle in eZ Platform to externalize Users in MongoDB',
        description:
            'Working on TheEconomist where we revamped the subscription system. We pushed the limit of the CMS eZ Publish to give the marketing teams the ability to fully customize the buying experience. Technically wise, we have decided to make a clear distinction between “Users“ and “Contents“. The Content Repository of the CMS hosts the data related to building the buyer flow and the marketing campaigns in all the countries, and the noSQL database contains everything that is user related(profile, orders, preferences etc.)',
        date: '2015-11-05',
        event: {
            name: 'eZ Conference 2015',
        },
        location: 'New York, USA',
        slides: '/slides/ez-conf-2015.pdf',
        images: [StaticImages.ezconf20151, StaticImages.ezconf20152],
    },
    {
        title: 'eZ Accelerator',
        description:
            'This presentation discusses using eZ Publish and Varnish together to handle high traffic for news websites. It describes existing solutions like using the native eZ Publish architecture, eZ DFS cluster, or adding a static cache. These have disadvantages like overloading databases or not offering flexible cache management. Introducing eZ Accelerator, a new extension that connects Varnish and eZ Publish. It allows targeted purging of the Varnish cache after publication to achieve instant publishing while maintaining high performance during high traffic.',
        date: '2012-11-14',
        location: 'Paris, France',
        slides: '/slides/ez-accelerator.pdf',
        images: [StaticImages.ezaccelerator],
    },
    {
        title: 'How to optimize your eZ Publish with Varnish',
        description:
            'This presentation discusses optimizing a website built with eZ Publish through the use of Varnish as a reverse proxy cache, covering topics such as Varnish architecture and configuration, the Varnish request flow, using Edge Side Includes (ESI) and instant publishing techniques, and advanced Varnish techniques and troubleshooting.',
        date: '2012-09-10',
        event: {
            name: 'eZ Summer Camp 2012',
            url: 'https://2012.ezsummercamp.com/',
        },
        location: 'Bol, Croatia',
        slides: '/slides/ezpublish-varnish.pdf',
        images: [StaticImages.ezsummercamp],
    },
];
