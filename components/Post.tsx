import Image from "next/image";

import DeleteButton from "./DeleteButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Typography } from "@mui/material";
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Grid,
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { CalendarMonth, Delete, Edit } from "@mui/icons-material";
interface PostProps {
  id: string;
  author: string;
  date: string;
  thumbnail?: string;
  authorEmail?: string;
  title: string;
  content: string;
  links?: string[];
  category?: string;
}

export default async function Post({
  id,
  author,
  date,
  thumbnail,
  authorEmail,
  title,
  content,
  links,
  category,
}: PostProps) {
  const session = await getServerSession(authOptions);

  const isEditable = session && session?.user?.email === authorEmail;

  const dateObject = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return (
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
          {" "}
          <CardMedia
            component="img"
            src={
              thumbnail ||
              "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
            } // Use default image path when thumbnail is not available
            alt="Blog thumbnail"
            sx={{ width: "100%", height: "auto" }}
          />
        </Grid>

        <Grid
          item
          sm={12}
          xs={12}
          lg={8}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className=" text-start"
            >
              {`${title.split(" ").slice(0, 7).join(" ")}${
                title.split(" ").length > 7 ? " ..." : ""
              }`}
            </Typography>
            <Typography
              className=" text-start"
              variant="body2"
              color="text.secondary"
            >
              {`${content.split(" ").slice(0, 15).join(" ")}${
                content.split(" ").length > 15 ? " ..." : ""
              }`}
            </Typography>
            <List>
              <ListItem style={{ position: "relative", right: "15px" }}>
                <ListItemAvatar>
                  <Avatar
                    // src="https://atlas-content-cdn.pixelsquid.com/stock-images/icon-date-and-time-red-clock-symbol-AvYq0ME-600.jpg"
                    style={{
                      background: "green",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "30px", // Adjust the width as needed
                      height: "30px", // Maintain a square aspect
                      // marginLeft: "20px",
                    }}
                    data-aos="zoom-in-down"
                  >
                    <CalendarMonth />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <p
                      style={{
                        // backgroundColor: "rgb(140, 140, 140)",
                        borderRadius: "15px",
                        padding: "0px 10px",

                        color: "darkgreen",
                        position: "relative",
                        right: "20px",
                        fontSize: "15px",
                      }}
                    >
                      {" "}
                      {author ? (
                        <>
                          Posted by: <span className="font-bold">{author}</span>{" "}
                          on {formattedDate}
                        </>
                      ) : (
                        <>Posted on {formattedDate}</>
                      )}
                      {/* ⭐ */}
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
              "@media (max-width:600px)": {
                flexDirection: "column",
                alignItems: "start",
              },
            }}
          >
            <Typography className="bgch float-left ml-3">
              {" "}
              {category}{" "}
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
            {isEditable && (
              <CardActions className="flex gap-3 font-bold py-2 px-4 rounded-md   ">
                <Link href={`/edit-post/${id}`}>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Edit />}
                    className="mt-2"
                    style={{ backgroundColor: "blue" }}
                  >
                    {" "}
                    Edit{" "}
                  </Button>
                </Link>
                <DeleteButton id={id} />
              </CardActions>
            )}
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
