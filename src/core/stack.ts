import type { Stack } from '../contracts/stack';
import { StaticImages } from '../core/images';

type Technology = Stack['technologies'][0];

const MySQL: Technology = {
    name: 'MySQL',
    about: 'My first database!',
    icon: StaticImages.mysql,
    description:
        'A widely-used open-source relational database, known for its reliability, performance, and strong community support.',
};

const PostgreSQL: Technology = {
    name: 'PostgreSQL',
    about: 'THE database!',
    icon: StaticImages.postgresql,
    description:
        'A powerful, open-source relational database with advanced features, strong ACID compliance, and extensibility.',
};

const Redis: Technology = {
    name: 'Redis',
    about: 'Cache and Pub/Sub in one!',
    icon: StaticImages.redis,
    description: 'An in-memory key-value store optimized for caching, session management, and real-time analytics.',
};

const MongoDB: Technology = {
    name: 'MongoDB',
    icon: StaticImages.mongodb,
    about: 'Database and more!',
    description:
        'A NoSQL database designed for high performance and scalability, storing data in a flexible, JSON-like format.',
};

const NextJS: Technology = {
    name: 'Next.JS',
    icon: StaticImages.nextjs,
    about: '(Too) magical frontend?',
    description:
        'A React framework for full-stack development, offering server-side rendering, static generation, and API routes.',
};

const Typescript: Technology = {
    name: 'Typescript',
    icon: StaticImages.typescript,
    about: '(Type) safety first!',
    description:
        'A statically typed superset of JavaScript that improves code quality, maintainability, and developer experience.',
};

const PlatformSH: Technology = {
    name: 'Platform SH',
    about: 'PaaS that rocks!',
    icon: StaticImages.platformsh,
    description:
        'A cloud hosting platform that simplifies application deployment with automatic scaling and Git-based workflows.',
};

const AWS: Technology = {
    name: 'AWS',
    about: 'Everything on it!',
    icon: StaticImages.aws,
    description:
        'A leading cloud provider offering scalable computing, storage, networking, and managed services for web applications.',
};

const Solr: Technology = {
    name: 'Solr',
    about: 'Only for the brave!',
    icon: StaticImages.solr,
    description:
        'An enterprise-grade open-source search platform built on Apache Lucene, designed for indexing and querying large datasets.',
};

const Algolia: Technology = {
    name: 'Algolia',
    about: '(Expensive) fast search!',
    icon: StaticImages.algolia,
    description:
        'A fast, developer-friendly search-as-a-service platform offering real-time search and instant filtering.',
};

const Meilisearch: Technology = {
    name: 'Meilisearch',
    about: 'OSS fast search!',
    icon: StaticImages.meilisearch,
    description:
        'An open-source, highly performant, and typo-tolerant search engine designed for fast indexing and querying.',
};

const Varnish: Technology = {
    name: 'Varnish',
    about: 'HTTP Cache on Steroids!',
    icon: StaticImages.varnish,
    description:
        'A high-performance HTTP accelerator that speeds up web applications by caching frequently requested content.',
};

const Travis: Technology = {
    name: 'Travis',
    about: 'Good old CI!',
    icon: StaticImages.travis,
    description: 'A continuous integration and deployment service that automates software testing and builds.',
};

const Symfony: Technology = {
    name: 'Symfony',
    about: 'Certified 5.x, still love it!',
    icon: StaticImages.symfony,
    description:
        'A modular PHP framework with a vast ecosystem, used for building scalable and maintainable web applications.',
};

const PHP: Technology = {
    name: 'PHP',
    about: 'My first love!',
    icon: StaticImages.php,
    description:
        'A server-side scripting language widely used in web development, powering many CMSs and web applications.',
};

const ObjectiveC: Technology = {
    name: 'Objective-C',
    about: 'I teached it!',
    icon: StaticImages.objectivec,
    description:
        'A legacy programming language for macOS and iOS applications, replaced by Swift for modern development.',
};

const Swift: Technology = {
    name: 'Swift',
    about: 'I miss it!',
    icon: StaticImages.swift,
    description:
        'Apple’s modern programming language designed for safety, performance, and seamless integration with iOS and macOS.',
};

const Ansible: Technology = {
    name: 'Ansible',
    about: 'That was fun!',
    icon: StaticImages.ansible,
    description:
        'An open-source automation tool used for configuration management, application deployment, and infrastructure orchestration.',
};

const RabbitMQ: Technology = {
    name: 'RabbitMQ',
    about: 'Async is The Way!',
    icon: StaticImages.rabbitmq,
    description: 'A message broker that enables asynchronous communication between distributed services.',
};

const Ibexa: Technology = {
    name: 'Ibexa',
    about: 'Multiple times Certified!',
    icon: StaticImages.ibexa,
    description:
        'A digital experience platform (DXP) providing content management, e-commerce, and personalization capabilities.',
};

const eZPlatform: Technology = {
    name: 'eZ Platform',
    about: 'Multiple times Certified!',
    icon: StaticImages.ezplatform,
    description:
        'An open-source CMS built on Symfony, designed for structured content management and enterprise web applications.',
};

const eZPublish: Technology = {
    name: 'eZ Publish',
    about: 'Multiple times Certified!',
    icon: StaticImages.ez,
    description:
        'A legacy CMS known for its extensibility and structured content approach, widely used in enterprise projects.',
};

const Memcached: Technology = {
    name: 'Memcached',
    about: 'I would still use it!',
    icon: StaticImages.memcached,
    description:
        'A distributed memory caching system used to speed up dynamic web applications by reducing database load.',
};

const Shell: Technology = {
    name: 'Shell',
    about: 'Because we need it!',
    icon: StaticImages.shell,
    description:
        'A command-line interface for executing scripts, automating system tasks, and managing processes efficiently.',
};

const Makefile: Technology = {
    name: 'Makefile',
    about: "Can't live without it!",
    icon: StaticImages.makefile,
    description:
        'A tool used for build automation, dependency tracking, and task execution in development environments.',
};

const React: Technology = {
    name: 'React JS',
    about: 'The component Way!',
    icon: StaticImages.react,
    description:
        'A declarative JavaScript library for building component-based user interfaces with a focus on performance and reusability.',
};

const Tailwind: Technology = {
    name: 'Tailwind CSS',
    about: 'I just follow on that one',
    icon: StaticImages.tailwind,
    description:
        'A utility-first CSS framework that enables rapid UI development with a focus on customization and consistency.',
};

const Docker: Technology = {
    name: 'Docker',
    about: 'Easy provisioning!',
    icon: StaticImages.docker,
    description:
        'A containerization platform that simplifies application deployment and scaling by packaging dependencies together.',
};

const Git: Technology = {
    name: 'Git',
    about: 'What would we do without it?',
    icon: StaticImages.git,
    description:
        'A distributed version control system that enables collaborative development and efficient code management.',
};

const Github: Technology = {
    name: 'Github',
    about: 'Certified and fan boy!',
    icon: StaticImages.github,
    description:
        'A cloud-based Git repository hosting service with collaboration, CI/CD, and project management features.',
};

const Cloudflare: Technology = {
    name: 'Cloudflare',
    icon: StaticImages.cloudflare,
    about: 'Just ship it!',
    description:
        'An all-in-one cloud platform offering security, performance, and scalable infrastructure with Workers, KV storage, and more.',
};

const Bun: Technology = {
    name: 'Bun',
    icon: StaticImages.bun,
    about: 'Fast, Fast, Fast!',
    description:
        'A fast, modern JavaScript runtime designed for efficiency, supporting TypeScript natively and ideal for CLI tools.',
};

const ReactRouterV7: Technology = {
    name: 'React Router v7',
    about: 'Embrace the platform!',
    icon: StaticImages.reactRouterV7,
    description:
        'A lightweight, intuitive routing library for React, enabling nested routes and progressive enhancement.',
};

const Astro: Technology = {
    name: 'Astro',
    about: 'Static, new dynamic!',
    icon: StaticImages.astro,
    description:
        'A fast, modern static site builder that optimizes content-driven websites using islands architecture and MDX.',
};

const HonoJS: Technology = {
    name: 'Hono JS',
    icon: StaticImages.honojs,
    about: 'The new kid on the blockt that rocks!',
    description:
        'A fast, lightweight web framework designed for building APIs and microservices with support for multiple runtimes, including Cloudflare Workers and Bun.',
};

const NestJS: Technology = {
    name: 'Nest JS',
    icon: StaticImages.nestjs,
    about: "I can't say I love it but I use it!",
    description:
        'A progressive Node.js framework built on top of Express and Fastify, using TypeScript and modular architecture to create scalable and maintainable backend applications.',
};

const SQlite: Technology = {
    name: 'SQLite',
    about: 'The swiss knife of databases!',
    icon: StaticImages.sqlite,
    description:
        'A self-contained, serverless, zero-configuration, transactional SQL database engine used in embedded systems and small applications.',
};

export const stacks: Stack[] = [
    {
        title: 'Living on the Edge',
        description:
            'This is the fun stack—the cutting-edge tech I experiment with in my free time and, occasionally, at work.',
        technologies: [Cloudflare, HonoJS, Bun, ReactRouterV7, Astro, Meilisearch],
    },
    {
        title: 'Professional',
        description: 'The technologies I use exclusively at work. Not always cutting-edge, but reliable and efficient.',
        technologies: [NestJS, MongoDB, NextJS, AWS],
    },
    {
        title: 'The Basics',
        description: 'Timeless technologies I use daily or whenever they make sense for a project.',
        technologies: [
            Typescript,
            PostgreSQL,
            Redis,
            SQlite,
            React,
            Tailwind,
            Docker,
            Git,
            Github,
            RabbitMQ,
            Varnish,
            Algolia,
            Shell,
            Makefile,
        ],
    },
    {
        title: 'My Previous Life - Up to the Late 2010s',
        description: 'The stack I worked with during my PHP web agency days.',
        technologies: [Ibexa, PHP, Symfony, MySQL, Solr, PlatformSH, Travis],
    },
    {
        title: 'Old School',
        description: 'I would not use these technologies today but you never know!',
        technologies: [ObjectiveC, Swift, Ansible, eZPlatform, eZPublish, Memcached],
    },
];
