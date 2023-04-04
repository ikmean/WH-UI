import React from "react";
import { PostButtonWrapper } from "./ButtonStyles";

interface Props {
  text: string;
  margin?: string;
}

export default function PostButton({ text, margin }: Props) {
  return <PostButtonWrapper margin={margin}>{text}</PostButtonWrapper>;
}
