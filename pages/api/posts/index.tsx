import createHandler from '../../../lib/mongoose/createHandler';
import Post from '../../../models/Post'

const handler = createHandler();

handler.get(async (req, res) => {
  const posts = await Post.find()
  res.status(200).json({posts})
});

handler.post(async (req, res) => {
    const data = req.body
    console.log(data)

    const newPost = new Post(data);
    try {
        const result = await newPost.save();
        res.status(200).json({result})
    } catch (e) {
        throw new Error(e.message)
    }
});

export default handler;