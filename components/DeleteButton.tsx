"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const deleteImage = async (publicId: string) => {
    const res = await fetch("/api/removeImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicId }),
    });
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmed) {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });

        if (res.ok) {
          console.log("Post deleted");
          const post = await res.json();
          const { publicId } = post;
          await deleteImage(publicId);

          toast.success("Post deleted successfully");
          router.refresh();
        }
      } catch (error) {
        toast.error("Something went wrong");
        console.log(error);
      }
    }
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<Delete />}
      className="mt-2"
      style={{ backgroundColor: "purple" }}
      onClick={handleDelete}
    >
      Delete
    </Button>
  );
}
