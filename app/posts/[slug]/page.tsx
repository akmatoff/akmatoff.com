import { getPostDetails } from "@/utils/posts";

import Markdown from "markdown-to-jsx";

interface Props {
  params: {
    slug: string;
  };
}

export default function PostDetails({ params }: Props) {
  const slug = params.slug;

  const post = getPostDetails(slug);

  return (
    <section className="flex flex-col items-center">
      <div className="w-full md:8/12 lg:w-6/12">
        <Markdown className="text-muted-foreground">{post.content}</Markdown>
      </div>
    </section>
  );
}
