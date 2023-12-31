import Post from "@/components/Post";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { TPost } from "../types";
import Navbar from "@/app/Navbar";
import { Container, Typography, Grid, Button } from "@mui/material";
import UserDetailCard from "./UserDetailCard";
import { Add } from "@mui/icons-material";
const getPosts = async (email: string) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`);
    const { posts } = await res.json();
    return posts;
  } catch (error) {
    return null;
  }
};

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  let posts = [];

  if (!session) {
    redirect("/sign-in");
  }

  if (email) {
    posts = await getPosts(email);
  }

  return (
    <>
      <Navbar />
      <Container>
        {" "}
        <Grid item xs={12}>
          <br />
          <br />
          <Grid>
            <UserDetailCard user={session.user} />
          </Grid>
          <Grid>
            {posts && posts.length > 0 ? (
              posts.map((post: TPost) => (
                <Post
                  key={post.id}
                  id={post.id}
                  author={""}
                  authorEmail={post.authorEmail}
                  date={post.createdAt}
                  thumbnail={post.imageUrl}
                  category={post.catName}
                  title={post.title}
                  content={post.content}
                  links={post.links || []}
                />
              ))
            ) : (
              <Typography variant="body1" gutterBottom>
                No posts created yet.{" "}
                <Link href="/create-post" passHref>
                  <a className="underline">Create New</a>
                </Link>
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
