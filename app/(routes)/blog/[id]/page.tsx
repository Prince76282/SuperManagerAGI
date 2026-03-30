import {
  getAllBlogIds,
  getBlogPostById,
  normalizeBlogImagePath,
} from "@/lib/Dataset/blogData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return getAllBlogIds().map((id) => ({ id }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    notFound();
  }

  const imageSrc = normalizeBlogImagePath(post.img);
  const tags = post.tag ?? [];

  return (
    <article className="bg-[#F5F4FF] py-20 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-[#625FD0] transition hover:text-[#4e4bb3]"
        >
          Back to blog
        </Link>

        <div className="mt-6 overflow-hidden rounded-[32px] bg-white p-6 shadow-md sm:p-8 lg:p-10">
          {tags.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#F5F4FF] px-3 py-1 text-xs  uppercase tracking-wide text-[#625FD0]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {post.text}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-gray-500 sm:gap-3">
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
            {post.author && (
              <>
                <span>&middot;</span>
                <span>{post.author}</span>
              </>
            )}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-3xl">
            <Image
              src={imageSrc}
              alt={post.title}
              width={1600}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-8 space-y-6 text-base leading-8 text-gray-700">
            <p className="text-lg leading-8 text-gray-700">{post.intro}</p>
            <p>{post.desc}</p>
          </div>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl text-gray-950">{section.heading}</h2>

                <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                  {section.content.map((paragraph, index) => (
                    <p key={`${section.heading}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
