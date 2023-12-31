import * as React from "react";

import { Container } from "@mui/material";
import Navbar from "@/app/Navbar";
import Code from "./Code";
const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <>
      <Navbar />
      <br />
      <Container>
        <Code data={data} params={params} />
      </Container>
      {/* <h1>{data?.title}</h1>
      <p>{data?.content}</p>
      <h2> {data.catName} </h2>
      <Image
        src={data?.imageUrl}
        alt={data.title}
        width={100}
        height={100}
        className="object-cover rounded-md object-center"
      /> */}
    </>
  );
};

export default SinglePage;
