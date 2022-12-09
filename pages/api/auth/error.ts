import { NextApiRequest, NextApiResponse } from "next";

const error = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: "error" });
};

export default error;
