"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type InstagramPost = {
  id: string;
  media_url: string;
  permalink: string;
  media_type?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  thumbnail_url?: string;
};

const PLACEHOLDERS = [
  "https://placehold.co/203x269",
  "https://placehold.co/199x269",
  "https://placehold.co/201x269",
];
const SIZES = ["w-52 h-64", "w-48 h-64", "w-52 h-64"];
const INSTAGRAM_URL = "https://instagram.com/Adela.Cavia";

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.media) && data.media.length > 0) {
          setPosts(data.media.slice(0, 3));
        }
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const itemsToShow = posts.length >= 3
    ? posts
    : [
        ...posts,
        ...Array.from({ length: 3 - posts.length }, (_, i) => ({
          id: `placeholder-${i}`,
          media_url: PLACEHOLDERS[posts.length + i],
          permalink: INSTAGRAM_URL,
        })),
      ].slice(0, 3);

  if (loading && posts.length === 0) {
    return (
      <>
        {[0, 1, 2].map((i) => (
          <div key={i} className={`relative ${SIZES[i]} bg-stone-200 animate-pulse`} />
        ))}
      </>
    );
  }

  return (
    <>
      {itemsToShow.map((post, i) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block overflow-hidden ${SIZES[i]} flex-shrink-0 hover:opacity-90 transition`}
        >
          <Image
            src={post.media_url}
            alt=""
            width={203}
            height={269}
            className="w-full h-full object-cover"
            unoptimized
            sizes="(max-width: 768px) 33vw, 208px"
          />
        </a>
      ))}
    </>
  );
}
