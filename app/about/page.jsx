/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import {
  Typography,
  Box,
  Container,
  Paper,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Email } from "@mui/icons-material";
import Navbar from "@/app/Navbar";
const AboutPage = () => {
  return (
    <Container>
      <Navbar />
      <Box className="flex  ">
        <br />
        <br />

        <br />
        <Grid
          className=" flex"
          container
          style={{ backgroundColor: "rgba(1, 145, 255, 1)" }}
        >
          <Grid
            item
            padding={2}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="flex "
          >
            <Grid>
              <Typography variant="h2" gutterBottom>
                About Our Blogging Platform
              </Typography>
              <Typography variant="h6" paragraph style={{ overflow: "auto" }}>
                Welcome to our MERN stack blogging platform! Created by a solo
                developer (that's me!), this project is part of my portfolio to
                showcase my skills and passion for web development. To make this
                platform more vibrant, consider adding at least one blog! Sign
                in using Google and share your thoughts with the community.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            className=" flex"
            container
            style={{ backgroundColor: "rgba(1, 145, 255, 1)" }}
          >
            <Grid
              item
              padding={2}
              xl={4}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="flex abouttoptext "
            >
              <Grid item>
                <Typography
                  color="rgba(1, 145, 255, 1)"
                  variant="h3"
                  gutterBottom
                  className="ts"
                >
                  Technology Stack
                </Typography>
                <Typography variant="h6" paragraph>
                  Powered by the MERN stack (MongoDB, Express.js, React,
                  Node.js) and designed with React MUI, this platform is a
                  testament to modern web development.
                </Typography>
              </Grid>
            </Grid>

            <Grid item xl={8} lg={6} md={6} sm={12} xs={12} className="">
              <img
                src="./mern5.png"
                style={{ width: "100%", height: "auto" }}
                className="imgcontainer2"
              />
            </Grid>

            {/* <CategoriesList /> */}
          </Grid>
        </Grid>
      </Box>
      <Grid
        className="flex aboutpagetop  "
        container
        sx={{ background: "rgba(1, 145, 255, 1)" }}
      >
        <Grid
          sx={{ background: "white" }}
          item
          padding={5}
          xl={10}
          lg={10}
          md={10}
          sm={12}
          xs={12}
          className="aboutpagetop2  "
        >
          <Typography
            sx={{ color: "black", marginTop: 4 }}
            variant="body1"
            paragraph
          >
            <strong>Get Involved:</strong> <br />
            To make this platform more vibrant, consider adding at least one
            blog! Sign in using Google and share your thoughts with the
            community.
          </Typography>

          <Typography sx={{ color: "black" }} variant="body1" paragraph>
            <strong>Acknowledgment:</strong> <br /> Gratitude to everyone who
            supports and engages with this project. It's a solo endeavor, and
            your presence means a lot.
          </Typography>
          <Card variant="outlined" className="my-4 cardshadow">
            <CardHeader
              title="About the Developer"
              sx={{ background: "rgba(1, 145, 255, 1)" }}
            />
            <Divider />
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar src="https://res.cloudinary.com/dtvtphhsc/image/upload/v1700062346/w1dyscvxakuj5qkh3vor.jpg" />
                <Typography variant="h6"> Sufian Mustafa</Typography>
              </div>

              <Typography variant="body" paragraph>
                Hi, I'm the creator of this platform! As a solo developer, I've
                crafted this space to share thoughts, experiences, and knowledge
                with you.
              </Typography>

              <Typography sx={{ color: "black" }} variant="body1" paragraph>
                <strong>Contact Me:</strong>
                <br /> Have questions or suggestions? Reach out through the
                contact form or connect with me on social media.
              </Typography>
              <List>
                <ListItem
                  button
                  component="a"
                  href="https://dev.to/sufian"
                  target="_blank"
                >
                  <ListItemIcon>
                    <LogoDevIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dev" />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="mailto:sufianmustafa0900@gmail.com"
                >
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                  <ListItemText primary="Email" />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="https://www.linkedin.com/in/sufian-mustafa-7a7845226/"
                  target="_blank"
                >
                  <ListItemIcon>
                    <LinkedInIcon />
                  </ListItemIcon>
                  <ListItemText primary="LinkedIn" />
                </ListItem>
                <ListItem
                  button
                  sx={{ background: "rgba(1, 145, 255, 1)" }}
                  component="a"
                  href="https://sufianmustafa.com/"
                  target="_blank"
                >
                  <ListItemIcon>
                    <LinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Your Website" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
          {/* <Grid>
            {" "}
            <IconButton
              color="primary"
              href="https://facebook.com"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://twitter.com"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://linkedin.com"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
          </Grid> */}
        </Grid>{" "}
        <Grid
          container
          justifyContent="center"
          spacing={2}
          marginBottom={2}
        ></Grid>
      </Grid>
      <Grid className="flex" container>
        <Grid sx={{ background: "rgba(1, 145, 255, 1)" }} className="">
          <br />
          <br />
        </Grid>
        <Grid
          sx={{ background: "white" }}
          item
          xl={10}
          lg={10}
          md={10}
          sm={12}
          xs={12}
          className="aboutpagebottom flex"
        >
          <br />
          <br />
          <br />
        </Grid>{" "}
      </Grid>
    </Container>
  );
};

export default AboutPage;
