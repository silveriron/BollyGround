import axios from "axios";
import { debounce } from "debounce";

export const getPosts = async (keyword: string) => {
  const res = await axios.get(`/api/posts?keyword=${keyword}`);
  return res.data.posts;
};

export const getPost = async (id: string) => {
  const res = await axios.get(`/api/posts/${id}`);
  return res.data.posts;
};

export const uploadPost = async (
  title: string,
  desc: string,
  content: string,
  thumbnailURL: string
) => {
  const res = await axios.post("/api/posts", {
    title,
    desc,
    content,
    thumbnail: thumbnailURL,
  });
  return res;
};

export const postImage = async (formData: FormData) => {
  const res = await axios.post("/api/image", formData);
  return res.data.url;
};
