import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl h-full">
      <ul className="w-full">
        {posts.map((post, index) => (
          <li
            key={post.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between", // Align items with space in between
              borderBottom: "1px solid #005F04",
              paddingBottom: "1.5em",
            }}
          >
            <ListItem post={post} />
            <img
              className="w-28 h-20 ml-auto mt-8  hover:-translate-y-3 transition-transform"
              src={post.image}
              alt={post.title}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
