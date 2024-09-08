"use client";

import { IPost } from "@/interfaces/post";
import React from "react";

interface Props {
  post: IPost;
}

function Post({ post }: Props) {
  const handlePostClick = () => {
    window.open(`/posts/${post.slug}`, "_self");
  };

  return (
    <div key={post.slug} onClick={handlePostClick} className="cursor-pointer">
      <h3 className="underline">{post.title}</h3>
      <p className="text-muted-foreground">{post.date}</p>
    </div>
  );
}

export default Post;
