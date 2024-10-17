import { getPosts } from "@/utils/posts";
import Link from "next/link";
import Post from "./Post";

function Blog() {
  const posts = getPosts();

  return (
    <main>
      <section className="flex flex-col gap-4">
        <h2>Blog</h2>

        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Blog;
