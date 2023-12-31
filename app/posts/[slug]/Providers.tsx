"use client";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactQuill readOnly theme="snow">
      {children}
    </ReactQuill>
  );
}
