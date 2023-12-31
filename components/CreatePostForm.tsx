"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

import { TCategory } from "@/app/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  TextField,
  Autocomplete,
  Button,
  Typography,
} from "@mui/material";
import { Create, Delete } from "@mui/icons-material";

export default function CreatePostForm() {
  const [links, setLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setPublicId] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchAllCategories = async () => {
      const res = await fetch("api/categories");
      const catNames = await res.json();
      setCategories(catNames);
    };

    fetchAllCategories();
  }, []);

  const handleImageUpload = (result: CldUploadWidgetResults) => {
    console.log("result: ", result);
    const info = result.info as object;

    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url as string;
      const public_id = info.public_id as string;
      setImageUrl(url);
      setPublicId(public_id);
      console.log("url: ", url);
      console.log("public_id: ", public_id);
    }
  };

  const addLink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (linkInput.trim() !== "") {
      setLinks((prev) => [...prev, linkInput]);
      setLinkInput("");
    }
  };

  const deleteLink = (index: number) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  };

  const removeImage = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("api/removeImage", {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });

      if (res.ok) {
        setImageUrl("");
        setPublicId("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      const errorMessage = "Title and content are required";
      toast.error(errorMessage);
      return;
    }

    try {
      const res = await fetch("api/posts/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          links,
          selectedCategory,
          imageUrl,
          publicId,
        }),
      });

      if (res.ok) {
        toast.success("Post created successfully");
        router.push("/dashboard");
        router.refresh();
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{ marginTop: "10px" }}>
      <Card className="item admincards">
        <CardContent>
          <Typography variant="h1">Create Blog</Typography>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <ReactQuill
                  value={content}
                  onChange={(value) => setContent(value)}
                  placeholder="Write your content..."
                />
              </Grid>

              <Grid item xs={12}>
                <CldUploadButton
                  uploadPreset={
                    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                  }
                  className={`border-2 mt-4 border-dotted grid place-items-center bg-slate-100 rounded-md relative ${
                    imageUrl && "pointer-events-none"
                  }`}
                  onUpload={handleImageUpload}
                >
                  <Paper
                    elevation={3}
                    className="p-4 text-center"
                    style={{ minWidth: "200px", minHeight: "200px" }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </div>

                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        fill
                        className="absolute object-cover inset-0"
                        alt="image"
                      />
                    )}
                  </Paper>
                </CldUploadButton>

                {publicId && (
                  <Button
                    onClick={removeImage}
                    variant="contained"
                    color="secondary"
                    startIcon={<Delete />}
                    className="mt-2"
                    style={{ backgroundColor: "purple" }}
                  >
                    Remove Image
                  </Button>
                )}
              </Grid>
              <br />
              <Grid item xs={12}>
                <Autocomplete
                  options={categories}
                  getOptionLabel={(option) => option.catName}
                  onChange={(_, value) =>
                    setSelectedCategory(value?.catName || "")
                  }
                  value={
                    categories.find(
                      (category) => category.catName === selectedCategory
                    ) || null
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Select A Category" />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="inherit"
                  startIcon={<Create />}
                  className="mt-2"
                  style={{ backgroundColor: "rgba(1, 145, 255, 1)" }}
                >
                  {" "}
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
