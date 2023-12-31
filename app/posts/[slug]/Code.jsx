import {
  Grid,
  Typography,
  IconButton,
  CardMedia,
  Chip,
  Container,
  Avatar,
  Box,
} from "@mui/material";
import RecentBlog from "@/app/blogs/RecentBlogs";
import { BiBookmark } from "react-icons/bi";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";

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
export default async function Code({ data }) {
  const posts = await getPosts();

  return (
    <>
      <Container style={{ backgroundColor: "rgba(1, 145, 255, 1)" }}>
        <Grid container spacing>
          <Grid
            padding={2}
            spacing={2}
            item
            sm={12}
            xs={12}
            lg={8}
            className="post post__body "
          >
            <img
              src={
                data?.imageUrl ||
                "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg"
              }
              alt="Img"
              style={{ width: "100%", height: "auto" }}
            />

            <div className="   text-left">
              <br />

              <Typography
                variant="h2"
                component="div"
                style={{ textAlign: "left", color: "white" }}
              >
                {data?.title}
              </Typography>
              <br />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon sx={{ color: "red" }} />
              </IconButton>
              <IconButton aria-label="comment">
                <CommentIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton sx={{ color: "blue" }}>
                <BiBookmark />
              </IconButton>
              <Typography className="bgch2 float-right">
                {" "}
                {data?.catName}{" "}
                {/* <p dangerouslySetInnerHTML={{ __html: data?.content}} /> */}
              </Typography>
              <div className="tag-section"></div>
              <div className="post__text">
                <div className="post__text">
                  {" "}
                  <div
                    className="post__text"
                    dangerouslySetInnerHTML={{ __html: data?.content }}
                  />
                </div>
              </div>
            </div>
          </Grid>

          {/* Right Sidebar */}
          <Grid item sm={12} xs={12} lg={4}>
            <>
              {/* Add user detail section */}
              <Box>
                <Typography
                  variant="h4"
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
              </Box>
            </>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
