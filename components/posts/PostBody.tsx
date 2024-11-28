"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const PostBody = () => {
  const { slug } = useParams();

  const [post, setPost] = useState([]);
  return <div>PostBody</div>;
};

export default PostBody;
