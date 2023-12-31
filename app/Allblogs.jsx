import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  CardMedia,
  Chip,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from "@mui/material";
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
      title: "Blog Title 1",
      tag: "Technology",
      imageUrl:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    },
    {
      id: 2,
      title: "Blog Title 2",
      tag: "Travel",
      imageUrl:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    },
    // Add more blog entries as needed
  ];

  return (
    <Container className="bgc mt-5">
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
              <Typography variant="h6" gutterBottom>
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
                    <Typography className="bgch float-left">
                      {" "}
                      Follow me
                    </Typography>
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
