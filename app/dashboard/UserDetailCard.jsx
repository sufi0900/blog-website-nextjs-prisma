import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";
import { Add, AdminPanelSettings } from "@mui/icons-material";

const UserDetailCard = ({ user }) => {
  const { name, email, image } = user;

  return (
    <Card elevation={3}>
      <Grid item xs={12} sx={{ background: "blue" }}>
        {/* <Button
          variant="contained"
          color="secondary"
          startIcon={<AdminPanelSettings />}
          className="mt-2"
          style={{ backgroundColor: "blue" }}
        >
          {" "}
          Admin Dashboard
        </Button> */}
        <Typography variant="h3" color="white">
          {" "}
          <AdminPanelSettings sx={{ fontSize: "62px", color: "white" }} /> Admin
          Dashboard{" "}
        </Typography>
      </Grid>

      <CardContent>
        <Box display="flex" alignItems="center" flexDirection="column">
          {/* <Button
            variant="contained"
            color="secondary"
            startIcon={<AdminPanelSettings />}
            className="mt-2"
            style={{ backgroundColor: "blue" }}
          >
            {" "}
            Admin Dashboard
          </Button> */}
          <br />
          <Avatar
            src={image}
            alt={name}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography variant="h5" mb={1}>
            {name}
          </Typography>
          <Typography color="textSecondary" mb={2}>
            {email}
          </Typography>
          <br />
          <Typography
            className="abouttoptext2 cardshadow "
            variant="h1"
            component="h1"
            gutterBottom
          >
            My Posts
          </Typography>{" "}
        </Box>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Add />}
            style={{
              backgroundColor: "blue",
              color: "white",
              float: "right",
              padding: 6,
              margin: 5,
            }}
          >
            {" "}
            Create Post
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserDetailCard;
