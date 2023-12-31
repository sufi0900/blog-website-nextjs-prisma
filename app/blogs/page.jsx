import {
  Grid,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from "@mui/material";
import Link from "next/link";
import Navbar from "@/app/Navbar";
import CategoriesList from "@/components/Categories2";
import RecentBlog from "./RecentBlogs";
import Card2 from "./Card2";

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
export default async function Allblogs() {
  const posts = await getPosts();

  const blogList = [
    {
      id: 1,
      title: "Sufian Mustafa",
      tag: "Technology",
      imageUrl:
        "https://res.cloudinary.com/dtvtphhsc/image/upload/v1700062346/w1dyscvxakuj5qkh3vor.jpg",
    },

    // Add more blog entries as needed
  ];

  return (
    <Container className="bgc mt-5 p-5">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Typography
        variant="h2"
        gutterBottom
        style={{
          borderRadius: "20px",
        }}
      >
        Read All Articles
      </Typography>

      <CategoriesList />
      <Grid container spacing>
        <Grid spacing={2} padding={2} item sm={12} xs={12} lg={8}>
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <Card2
                key={post.id}
                // key={post.id}
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
        </Grid>

        {/* Right Sidebar */}
        <Grid item sm={12} xs={12} lg={4}>
          <>
            {/* Add user detail section */}
            <Box>
              <Typography
                variant="h3"
                gutterBottom
                style={{
                  borderRadius: "20px",
                }}
              >
                Recent Blogs
              </Typography>

              {posts && posts.length > 0 ? (
                posts.map((post) => (
                  <RecentBlog
                    key={post.id}
                    // key={post.id}
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

              <List>
                {blogList.map((blog) => (
                  <ListItem
                    key={blog.id}
                    className="bg-white mt-2 border"
                    style={{ borderRadius: "30px" }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        style={{
                          background: "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "50px", // Adjust the width as needed
                          height: "50px", // Maintain a square aspect
                        }}
                        data-aos="zoom-in-down"
                      >
                        <img
                          className="i-swing"
                          src={blog.imageUrl}
                          alt=""
                          style={{ width: "100%", height: "auto" }}
                        />
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      primary={blog.title}
                      data-aos="zoom-in"
                      className="ListItemText"
                      style={{ color: "black" }}
                    />
                    <Link href="/about">
                      <Typography className="bgch float-left">
                        {" "}
                        Follow me
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </>
        </Grid>
      </Grid>
    </Container>
  );
}
