import CardComp from "./Card";
import { SwiperSlide } from "swiper/react";

const getPosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: "no-store",
    });

    if (res.ok) {
      const posts = await res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export default async function BlogsServer() {
  const posts = await getPosts();

  return (
    <div suppressHydrationWarning>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <SwiperSlide key={post.id}>
            <CardComp
              id={post.id}
              author={post.author.name}
              authorEmail={post.authorEmail}
              date={post.createdAt}
              thumbnail={post.imageUrl}
              category={post.catName}
              title={post.title}
              content={post.content}
              links={post.links || []}
            />
          </SwiperSlide>
        ))
      ) : (
        <div className="py-6">No posts to display</div>
      )}
    </div>
  );
}
