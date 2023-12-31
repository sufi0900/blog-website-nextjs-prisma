"use server";

import { Providers } from "./Providers";

import { Box, Grid, Typography } from "@mui/material";

import CardComp from "./Card";
import Link from "next/link";
import { OpenInNew } from "@mui/icons-material";
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
export default async function LatestBlogs() {
  const posts = await getPosts();

  return (
    <div suppressHydrationWarning>
      <Box className="flex" style={{ backgroundColor: "rgba(1, 145, 255, 1)" }}>
        <Grid container padding={5} spacing={2} className=" justify-center ">
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="flex">
            <Typography variant="h2" className="ts">
              See our Latest{" "}
              <div
                className="ts"
                style={{ color: "blue", display: "inline-block" }}
              >
                blogs
              </div>
              <br />
            </Typography>
          </Grid>
          <Grid
            item
            xl={9}
            lg={12}
            md={9}
            sm={12}
            xs={12}
            className=" justify-center  items-center  text-center gap-2"
          >
            <Providers>
              {posts && posts.length > 0 ? (
                posts
                  .slice(0, 6)
                  .map((post) => (
                    <CardComp
                      key={post.id}
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
                  ))
              ) : (
                <div className="py-6">No posts to display</div>
              )}
            </Providers>

            <br />
            <br />
            <br />
          </Grid>
          <br />
          <Grid container className="flex justify-center">
            <Link href="/blogs">
              <button role="button" className="button-1 mt-6">
                <span class="button-1-shadow"></span>

                <span
                  class="button-1-edge"
                  style={{
                    background:
                      "linear-gradient(to left, rgb(231, 230, 230) 0%, rgb(197, 197, 197) 9%, rgb(161, 161, 161) 92%, rgb(123, 123, 123) 100%)",
                  }}
                ></span>

                <p
                  class="button-1-front"
                  style={{
                    fontSize: "29px",
                    color: "black",
                    background: "white",

                    letterSpacing: "1px",
                    textShadow: "1px 1px 1px black",
                    textAlign: "start",
                  }}
                >
                  See All Blog <OpenInNew />
                </p>
              </button>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Box className=" wave2 flex" style={{ backgroundColor: "" }}>
        <Grid container padding={5} spacing={2} className="  flex">
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className="flex"
          ></Grid>{" "}
        </Grid>
      </Box>
    </div>
  );
}
