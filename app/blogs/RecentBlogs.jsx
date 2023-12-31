import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
} from "@mui/material";
import Link from "next/link";
const RecentBlog = ({
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
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 2,
        }}
      >
        <CardMedia
          component="img"
          src={
            thumbnail ||
            "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
          } // Use default image path when thumbnail is not available
          alt="Blog thumbnail"
          sx={{ width: 120, height: "auto" }}
        />

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" component="div">
            {`${title.split(" ").slice(0, 5).join(" ")}${
              title.split(" ").length > 5 ? " ..." : ""
            }`}
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            // className="flex"
          >
            {/* <Typography className="bgch"> {category}</Typography> */}
            <Link href={`/posts/${id}`}>
              <Button className="rm-btn " size="small" variant="outlined">
                Read More
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default RecentBlog;
