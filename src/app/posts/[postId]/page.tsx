import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import ShareButtonSection from "../../components/ShareButtonSection";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml, image } = await getPostData(postId);

  const pubDate = getFormattedDate(date);
  const postUrl = `https://www.blog.fuddy.click/posts/${postId}`;

  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              src={image}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 className="text-4xl font-semibold text-gray-100 text-white leading-tight">
                {title}
              </h2>
            </div>
          </div>

          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <article>
              <section
                className="space-y-4"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
              <p className="text-lg font-bold mt-10 mb-6">
                No te olvides de compartirlo con quién creas que pueda servirle
                esta información
              </p>
              <ShareButtonSection postUrl={postUrl} title={title} />
            </article>
          </div>
          <div className="max-w-screen-md mx-auto mt-10 mb-10">
            <Link href="/#">
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-[#005F04] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Volver
                </span>
              </button>
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
}
