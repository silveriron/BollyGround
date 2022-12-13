import createHandler from "../../../lib/mongoose/createHandler";
import Post from "../../../models/Post";

const handler = createHandler();

handler.get(async (req, res) => {
  const { id } = req.query;
  const post = await Post.find({ _id: id });
  res.status(200).json({ post });
});

export default handler;
