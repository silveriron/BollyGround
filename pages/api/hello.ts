import createHandler from "../../lib/mongoose/createHandler";

const handler = createHandler();

handler.get((req, res) => {
  res.json({ message: "ok" });
});

export default handler;
