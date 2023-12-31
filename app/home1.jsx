"use client";
import React from "react";
import Link from "next/link";
import { Box, Grid, Typography, Button } from "@mui/material";
import CategoriesList from "@/app/HomeCode";
import { Add } from "@mui/icons-material";
const Homepage = () => {
  return (
    <Box className="flex">
      <Grid container padding={5} spacing={10} className="flex ">
        <Grid item xl={8} lg={8} md={6} sm={12} xs={12} className="">
          {" "}
          <video
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto" }}
            className="imgcontainer"
          >
            <source src="./typing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12} className="">
          <Typography
            variant="h2"
            sx={{ textAlign: "left", textShadow: "1px 1px 1px black" }}
          >
            Write your <br />
            <span
              style={{
                color: "rgba(1, 145, 255, 1)",
                textShadow: "1px 1px 1px black",
              }}
            >
              blog
            </span>{" "}
            <br />
            here
            <br />
            <Link href="sign-in">
              <button class="button-1" role="button">
                <span class="button-1-shadow"></span>
                <span class="button-1-edge"></span>
                <p
                  class="button-1-front"
                  style={{
                    fontSize: "28px",
                    letterSpacing: "1px",
                    textShadow: "1px 1px 1px black",
                  }}
                >
                  Create <Add />
                </p>
              </button>
            </Link>
            {/* <Button
              variant="contained"
              color="secondary"
              startIcon={<Add />}
              className="mt-2"
              style={{ backgroundColor: "blue" }}
            >
              {" "}
              Create
            </Button> */}
          </Typography>
          <br />
          {/* <CategoriesList /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
