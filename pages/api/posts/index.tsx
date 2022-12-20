import createHandler from "../../../lib/mongoose/createHandler";
import Post from "../../../models/Post";
import {csrf} from '../../../lib/csrf/csrf'

const handler = createHandler();

handler.get(async (req, res) => {
  const {keyword} = req.query

  if (keyword) {
    const regex = new RegExp(`[${keyword}]`, 'i')
    const posts = await Post.find({title: regex});
    res.status(200).json({ posts });
  } else { 
    const posts = await Post.find();
    res.status(200).json({ posts });
  }
});

handler.post(async (req, res) => {
  const data = req.body;

  const newPost = new Post(data);
  try {
    const result = await newPost.save();
    res.status(200).json({ result });
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
});

export default csrf(handler);
