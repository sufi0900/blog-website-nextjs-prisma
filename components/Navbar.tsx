"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const { status, data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      style={{
        background: "rgba(0, 145, 255, 0.917)",
        borderRadius: "30px",
      }}
    >
      <Toolbar>
        {/* Use your logo image here */}
        <Image src="/path/to/your/logo.png" alt="Logo" width={40} height={40} />

        {status === "authenticated" ? (
          <>
            <div style={{ flexGrow: 1 }} />
            <IconButton onClick={handleClick} color="inherit">
              <Image
                src={session?.user?.image || ""}
                width={36}
                height={36}
                alt="Profile Image"
                className="rounded-full cursor-pointer"
              />
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <div>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {session?.user?.name}
                  </Typography>
                  <Typography variant="body2">
                    {session?.user?.email}
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                href="/dashboard"
              >
                Dashboard
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                href="/create-post"
              >
                Create Post
              </MenuItem>
              <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
            </Menu>
          </>
        ) : (
          <div style={{ flexGrow: 1 }} />
        )}

        {status !== "authenticated" && (
          <Button color="inherit" component={Link} href="/sign-in">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
