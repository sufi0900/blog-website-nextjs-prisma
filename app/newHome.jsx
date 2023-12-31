"use client";
import React from "react";

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
const Homepage = () => {
  return (
    <Grid container spacing={2} padding={7}>
      <Grid
        item
        xs={12}
        sm={6}
        //   sx={{ ...gridItemStyle, order: matchesSM ? 1 : 2 }}
      >
        <Typography variant="h2" sx={{ textAlign: "end" }}>
          Write your <br />
          <span style={{ color: "rgba(1, 145, 255, 1)" }}>blog</span> <br />
          here
          <br />
          <Button
            sx={{ backgroundColor: "rgba(1, 145, 255, 1)", color: "white" }}
          >
            Create
          </Button>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        //   sx={{
        //     ...gridItemStyle,
        //     order: matchesSM ? 2 : 1,
        //   }}
      >
        {/* Replace with the image you want */}
        <Grid>
          <img
            src="https://blog.shift4shop.com/hubfs/How%20to%20Manage%20an%20eCommerce%20Blog.jpg"
            alt="A catchy tagline"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            className="imgcontainer"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;
