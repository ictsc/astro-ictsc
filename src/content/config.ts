import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
    //   pubDate: z.date()
    })
});

export const collections = { blog };