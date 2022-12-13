import axios from "axios";

export const getPosts = async () => {
  const res = await axios.get("/api/posts");
  return res.data.posts;
};

export const getPost = async (id: string) => {
  console.log(`id: ${id}`);
  const res = await axios.get(`/api/posts/${id}`);
  console.log(`res: ${res}`);
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
