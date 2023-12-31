import * as React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { ReadMore } from "@mui/icons-material";
import { Button } from "@mui/material";
export default function RecipeReviewCard({
  id,
  author,
  date,
  thumbnail,
  authorEmail,
  title,
  content,
  links,
  category,
}) {
  // const session = await getServerSession(authOptions);

  // const isEditable = session && session?.user?.email === authorEmail;

  const dateObject = new Date(date);
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return (
    <Card sx={{ maxWidth: 350, position: "relative", marginLeft: "10px" }}>
      <CardHeader
        avatar={<Avatar src="avatar img here"></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={formattedDate}
      />
      <CardMedia
        component="img"
        style={{ height: "200px", objectFit: "cover" }}
        image={
          thumbnail ||
          "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
        } // Use default image path when thumbnail is not available
        alt="Blog thumbnail"
      />
      <Link href={`/posts/${id}`}>
        <Button
          variant="contained"
          startIcon={<ReadMore />}
          className="mt-2 readmore"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundColor: "blue",
            color: "#fff",
            padding: "8px",
            textAlign: "center",
            zIndex: 1, // Set a higher z-index to make sure it's above other elements
          }}
          // style={{ backgroundColor: "rgba(1, 145, 255, 1)" }}
        >
          {" "}
          Read More
        </Button>
        {/* <Typography
        variant="body2"
        className="readmore"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "blue",
          color: "#fff",
          padding: "8px",
          textAlign: "center",
          zIndex: 1, // Set a higher z-index to make sure it's above other elements
        }}
      >
        Read More
      </Typography> */}
      </Link>
      <CardContent>
        <Typography variant="h5">
          {" "}
          {`${title.split(" ").slice(0, 6).join(" ")}${
            title.split(" ").length > 6 ? " ..." : ""
          }`}
        </Typography>
        <IconButton aria-label="add to favorites" className=" float-right">
          <FavoriteIcon style={{ color: "red" }} />
        </IconButton>
        <IconButton aria-label="share" className="float-right">
          <ShareIcon style={{ color: "blue" }} />
        </IconButton>

        <Typography className="bgch float-left mb-1 ">
          {" "}
          {category && (
            <Link href={`categories/${category}`}>{category}</Link>
          )}{" "}
        </Typography>
        <div style={{ marginTop: "37px" }}></div>
        {/* <Typography>short overview of blog here....</Typography> */}
      </CardContent>

      <br />
    </Card>
  );
}
