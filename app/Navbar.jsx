"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import the Link component from Next.js
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
// import ThemeBtn from "./ThemeButton";
import ArticleIcon from "@mui/icons-material/Article";
import { Tabs, Tab, useMediaQuery, useTheme, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import InfoIcon from "@mui/icons-material/Info";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TimelineIcon from "@mui/icons-material/Timeline";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import {
  Add,
  DarkMode,
  Dashboard,
  Email,
  Home,
  InfoRounded,
  LoginOutlined,
  LogoDev,
  Person,
  QuestionAnswer,
} from "@mui/icons-material";
import Slide from "@mui/material/Slide"; // Import the Slide component from Material-UI
import useScrollTrigger from "@mui/material/useScrollTrigger"; // Import the useScrollTrigger hook
// import DarkModeToggle from "./DarkModeToggle";
import CssBaseline from "@mui/material/CssBaseline";
// import sufi from "./sufi.webp";
// import logo from "./logo.webp";
import Image from "next/image";
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ResponsiveAppBar(props) {
  const { status, data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const router = useRouter();
  // Function to open the avatar menu
  const [clickCount, setClickCount] = useState(0);

  // Function to increase clickCount

  // useEffect to monitor clickCount changes

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          style={{
            background: "transparent",
            borderRadius: "30px",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
                className="cursorp"
              >
                <Avatar
                  sx={{ width: "53px", height: "53px", background: "black" }}
                  className="cursorp Tab8 animate__animated animate__backInLeft"
                >
                  <Image
                    src="/logo.jpeg"
                    style={{ width: "100%", height: "auto" }}
                    alt="logo"
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </Avatar>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {" "}
                <Avatar
                  sx={{
                    background: "black",
                    display: { xs: "flex", md: "none" },
                    mr: 1,
                    height: "55px",
                    width: "55px",
                  }}
                >
                  <Image
                    src="/logo.jpeg"
                    alt="logo"
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </Avatar>
              </Typography>
              <Box
                className="wave"
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                {isMatch ? (
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <>
                    <Tabs
                      centered
                      sx={{
                        margin: "auto",
                        borderRadius: "20px",
                        background: "rgba(1, 145, 255, 1)",
                      }}
                      className="cardshadow"
                    >
                      <Tab
                        value="one"
                        label={
                          <span style={{ color: "white" }}>
                            <Home /> Home
                          </span>
                        }
                        onClick={() => {
                          window.location.href = "/";
                        }}
                        className="Tab1 animate__animated animate__zoomIn"
                      />

                      <Tab
                        value="two"
                        label={
                          <span style={{ color: "white" }}>
                            {" "}
                            <ArticleIcon /> Blogs
                          </span>

                          // </Link>
                        }
                        onClick={() => router.push("/blogs")}
                        className="Tab2 animate__animated animate__zoomIn"
                      >
                        {" "}
                      </Tab>

                      <Tab
                        value="three"
                        label={
                          <span style={{ color: "white" }}>
                            {/* <Link
                              href="/skills"
                              style={{
                                textDecoration: "none",
                                color: "white",
                              }}
                            > */}{" "}
                            <ContactMailIcon /> About
                            {/* </Link> */}
                          </span>
                        }
                        onClick={() => router.push("/about")}
                        className="Tab3 animate__animated animate__zoomIn"
                      />
                    </Tabs>
                  </>
                )}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                {status === "authenticated" ? (
                  <>
                    <Tooltip sx={{ background: "rgba(1, 145, 255, 1)" }}>
                      <IconButton
                        sx={{ p: 0, background: "rgba(1, 145, 255, 1)" }}
                        onClick={handleOpenUserMenu}
                      >
                        <Avatar className="Tab7 animate__animated animate__backInRight cardshadow2">
                          <Image
                            src={session?.user?.image || ""}
                            style={{ width: "100%", height: "auto" }}
                            alt="sufi"
                            width={100}
                            height={100}
                            loading="lazy"
                            className="cardshadow"
                          />
                        </Avatar>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {" "}
                      <List className="DrawerList" sx={{ background: "white" }}>
                        <ListItemButton>
                          <ListItemIcon>
                            <Person />
                          </ListItemIcon>
                          {/* <Link
                          href="/blogs/insights"
                          style={{ textDecoration: "none", color: "black" }}
                        > */}
                          <ListItemText
                            onClick={handleCloseNavMenu}
                            primary={session?.user?.name}
                          />{" "}
                          {/* </Link> */}
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemIcon>
                            <Email />
                          </ListItemIcon>
                          {/* <Link
                          href="/blogs/how-to"
                          style={{ textDecoration: "none", color: "black" }}
                        > */}
                          <ListItemText
                            onClick={handleCloseNavMenu}
                            primary={session?.user?.email}
                          />
                          {/* </Link> */}
                        </ListItemButton>
                        <ListItemButton>
                          <ListItemIcon>
                            <Add />
                          </ListItemIcon>
                          <Link
                            href="/create-post"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <ListItemText
                              onClick={handleCloseNavMenu}
                              primary={"Create"}
                            />
                          </Link>
                        </ListItemButton>
                        <ListItemButton>
                          <ListItemIcon>
                            <Dashboard />
                          </ListItemIcon>
                          <Link
                            href="/dashboard"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <ListItemText
                              onClick={handleCloseNavMenu}
                              primary={"Dashboard"}
                            />
                          </Link>
                        </ListItemButton>
                        <ListItemButton onClick={() => signOut()}>
                          <ListItemIcon>
                            <InfoRounded />
                          </ListItemIcon>
                          {/* <Link
                          href="/aboutmysite"
                          style={{ textDecoration: "none", color: "black" }}
                        > */}
                          <ListItemText
                            onClick={handleCloseNavMenu}
                            primary={"Log Out"}
                          />
                          {/* </Link> */}
                        </ListItemButton>
                      </List>
                    </Menu>
                  </>
                ) : (
                  <div style={{ flexGrow: 1 }} />
                )}
                {status !== "authenticated" && (
                  <Tooltip
                    style={{ background: "rgba(1, 145, 255, 1)" }}
                    className="cardshadow"
                  >
                    <Button
                      component={Link}
                      href="/sign-in"
                      variant="contained"
                      color="inherit"
                      startIcon={<LoginOutlined />}
                      className="mt-2"
                      style={{ backgroundColor: "rgba(1, 145, 255, 1)" }}
                    >
                      {" "}
                      Log in
                    </Button>
                  </Tooltip>
                )}
                <Menu
                  id="menu-appbar-avatar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top", // Adjust to match the new position
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <List className="DrawerList" sx={{ background: "#e2e8ec" }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <Home />
                      </ListItemIcon>
                      <ListItemText
                        primary={"Home"}
                        onClick={() => {
                          window.location.href = "/";
                        }}
                      />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ArticleIcon />
                      </ListItemIcon>
                      <Link
                        href="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"Blogs"}
                        />{" "}
                      </Link>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ContactMailIcon />
                      </ListItemIcon>
                      <Link
                        href="/about"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"About & Contact"}
                        />
                      </Link>
                    </ListItemButton>
                  </List>
                  {/* </Drawer> */}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
export default ResponsiveAppBar;
