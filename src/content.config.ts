import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    pubDate: z.coerce.date(),
    draft: z.boolean(),
    renderer: z.enum(["html", "md"]).optional().default("md"),
    sticky: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
