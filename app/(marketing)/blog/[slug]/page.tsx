import { allPosts } from "@/.contentlayer/generated";
import BlogEditor from "@/components/blog-editor";
import Mdx from "@/components/mdx-component";
import PostItem from "@/components/post-item";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { db } from "@/lib/db";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getPostFromSlug(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = await getPostFromSlug(params.slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: "article",
      locale: "ja",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url}/og.jpg`],
      creator: "@yuki",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  console.log(slug);
  const post = await getPostFromSlug(slug);

  if (!post) {
    console.log("Post not found.");
    notFound();
  }

  const posts = await db.post.findMany({
    where: {
      blogId: slug,
    },
    select: {
      id: true,
      title: true,
      content: true,
      blogId: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <div className="container mx-auto px-8 space-y-10">
      <article className="max-w-3xl py-6 lg:py-10">
        <div>
          {post.date && (
            <time>Published on {format(post.date, "yyyy/MM/dd")}</time>
          )}
          <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>
        </div>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={720}
            height={405}
            className="my-8 border rounded-md bg-muted"
          />
        )}
        <Mdx code={post.body.code} />
        <hr className="mt-12" />
      </article>

      {/* コメント一覧の表示 */}
      <div>
        {posts.length ? (
          <div className="divide-y border rounded-md">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="ml-2">コメントがありません。</div>
        )}
      </div>

      {/* コメント投稿欄 */}
      <div>
        <BlogEditor
          post={{
            blogId: slug,
          }}
        />
      </div>
      <hr />
      <div className="py-6 text-center lg:py-10">
        <Link
          href={"/blog"}
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          全ての記事を見る
        </Link>
      </div>
    </div>
  );
}
