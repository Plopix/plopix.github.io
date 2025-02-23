import { certifications } from '../../core/certification';
import { awards } from '../../core/awards';
import { educationExperiences } from '../../core/education-experience';
import { currentProjects, legacyProjects } from '../../core/projects';
import { stacks } from '../../core/stack';
import { workExperiences } from '../../core/work-experience';
import { getCollection } from 'astro:content';
import { me, socials } from '../../core/constants';
import { talks, upcomingTalks } from '../../core/talks';
const allPosts = await getCollection('posts');

export function getStaticPaths() {
    return [
        { params: { dataid: 'certifications' } },
        { params: { dataid: 'publications' } },
        { params: { dataid: 'awards' } },
        { params: { dataid: 'educations' } },
        { params: { dataid: 'projects' } },
        { params: { dataid: 'stacks' } },
        { params: { dataid: 'experiences' } },
        { params: { dataid: 'me' } },
        { params: { dataid: 'talks' } },
        { params: { dataid: 'socials' } },
    ];
}

export async function GET({ params }: { params: { dataid: string } }) {
    const map = {
        certifications,
        me,
        awards,
        educations: educationExperiences,
        projects: {
            current: currentProjects,
            legacy: legacyProjects,
        },
        stacks,
        socials,
        talks: {
            upcoming: upcomingTalks,
            past: talks,
        },
        experiences: workExperiences,
        publications: allPosts
            .sort((a, b) => {
                const dateA = new Date(a.data.publishedAt).getTime();
                const dateB = new Date(b.data.publishedAt).getTime();
                return dateB - dateA;
            })
            .map((post) => post.data),
    };

    return new Response(JSON.stringify(map[params.dataid as keyof typeof map]));
}
