import React from "react";
import LatestBlogs from "./LatestServer";
const Latest = () => {
  return <LatestBlogs />;
};

export default Latest;

// import CategoriesList from "./../components/CategoriesList";

// import LatestBlogs from "./Card";

// const getPosts = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
//       cache: "no-store",
//     });

//     if (res.ok) {
//       const posts = await res.json();
//       return posts;
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   return null;
// };

// export default async function Latest() {
//   const posts = await getPosts();
//   return (
//     <>
//       <CategoriesList />
//       {posts && posts.length > 0 ? (
//         posts.map((post) => (
//           <LatestBlogs
//             key={post.id}
//             id={post.id}
//             author={post.author.name}
//             authorEmail={post.authorEmail}
//             date={post.createdAt}
//             thumbnail={post.imageUrl}
//             category={post.catName}
//             title={post.title}
//             content={post.content}
//             links={post.links || []}
//           />
//         ))
//       ) : (
//         <div className="py-6">No posts to display</div>
//       )}
//     </>
//   );
// }
