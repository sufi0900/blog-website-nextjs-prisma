import React from "react";
import Navbar from "./Navbar";

import HomePage from "./home1";

import LatestBlogs from "./latestblog";
import CategoriesList from "@/components/CategoriesList";
import AboutPage from "@/app/about/page";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="circlesvg ">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          {/* Navbar at the top */}

          {/* Centered content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Your homepage and category components */}
            <div>
              <HomePage />
              <CategoriesList />
            </div>
          </div>
        </div>
      </div>
      <br />
      <LatestBlogs />
      {/* <Allblogs /> */}
      <br />
      <br />
      <AboutPage />
      {/* <HomeCode /> */}
    </>
  );
};

export default page;
