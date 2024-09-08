import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { IPost } from "@/interfaces/post";

const postsDir = path.join(process.cwd(), "posts");

export function getPosts(): IPost[] {
  const files = fs.readdirSync(postsDir);

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");

    const fullPath = path.join(postsDir, file);
    const content = fs.readFileSync(fullPath, "utf-8");

    const result = matter(content);

    return {
      slug,
      ...result.data,
      content: result.content,
    } as IPost;
  });

  return posts;
}

export function getPostDetails(slug: string): IPost {
  const filePath = path.join("posts", slug + ".md");

  const file = fs.readFileSync(filePath, "utf-8");

  const content = matter(file);

  return {
    slug,
    ...content.data,
    content: content.content,
  } as IPost;
}
