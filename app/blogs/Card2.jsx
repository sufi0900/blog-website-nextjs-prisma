import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Grid,
  Typography,
  Button,
  IconButton,
  CardMedia,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";

import Link from "next/link";
import { CalendarMonth, Email, Person, Title } from "@mui/icons-material";

const Card2 = ({
  id,
  author,
  date,
  thumbnail,
  authorEmail,
  title,
  content,
  links,
  category,
}) => {
  const dateObject = new Date(date);
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return (
    <div>
      <Card
        sx={{
          marginTop: "5px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Grid container className="flex">
          <Grid item xs={12} sm={12} lg={4} sx={{ alignItems: "stretch" }}>
            <CardMedia
              component="img"
              src={
                thumbnail ||
                "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
              }
              alt="Blog thumbnail"
              sx={{ width: "100%", height: "auto" }}
            />
          </Grid>

          {/* Content Section */}
          <Grid
            item
            sm={12}
            xs={12}
            lg={8}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            {/* <CardHeader
              avatar={<Avatar src="avatar img here"></Avatar>}
              title={author}
              subheader={date}
            /> */}
            <CardContent sx={{ flexGrow: 1 }}>
              {/* <CardHeader
                avatar={<Avatar src="avatar img here"></Avatar>}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={author}
                subheader={date}
              /> */}
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className=" text-start"
              >
                {`${title.split(" ").slice(0, 10).join(" ")}${
                  title.split(" ").length > 10 ? " ..." : ""
                }`}
              </Typography>
              {/* <Typography
                className=" text-start"
                variant="body2"
                color="text.secondary"
              >
                {`${content.split(" ").slice(0, 9).join(" ")}${
                  content.split(" ").length > 9 ? " ..." : ""
                }`}
              </Typography> */}
              <List>
                <ListItem style={{ position: "relative", right: "15px" }}>
                  <ListItemText
                    primary={
                      <p
                        style={{
                          // backgroundColor: "rgb(140, 140, 140)",
                          borderRadius: "15px",
                          // padding: "0px 10px",

                          color: "darkgreen",
                          // position: "relative",
                          // right: "20px",
                          fontSize: "15px",
                        }}
                      >
                        <Person /> {author}
                        <br />
                        <span style={{ color: "darkblue" }}>
                          <Email /> {authorEmail}
                        </span>
                        <br />
                        {author ? (
                          <>
                            <CalendarMonth /> {formattedDate}
                          </>
                        ) : (
                          <>Posted on {formattedDate} </>
                        )}
                      </p>
                    }
                    data-aos="zoom-in"
                    className="ListItemText"
                    style={{
                      color: "black",
                    }}
                  />
                </ListItem>
              </List>
            </CardContent>

            <CardActions
              sx={{
                marginTop: "auto",
                padding: "5px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography className="bgch float-left ml-3">
                {" "}
                {category && (
                  <Link href={`categories/${category}`}>{category}</Link>
                )}
              </Typography>

              <div style={{ float: "right" }}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon sx={{ color: "red" }} />
                </IconButton>
                <IconButton aria-label="comment">
                  <CommentIcon sx={{ color: "black" }} />
                </IconButton>
                <Link href={`/posts/${id}`}>
                  {" "}
                  <Button className="rm-btn" size="small" variant="outlined">
                    Read More
                  </Button>
                </Link>
              </div>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Card2;
