import { defineCollection, z } from 'astro:content';

const PostSchema = z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    image: z
        .object({
            url: z.string(),
            alt: z.string(),
        })
        .optional(),
    tags: z.array(z.string()),
    publisher: z
        .object({
            canonical: z.string(),
            name: z.string(),
        })
        .optional(),
});
export type Post = z.infer<typeof PostSchema>;
const posts = defineCollection({
    schema: PostSchema,
});

export const collections = {
    posts,
};
