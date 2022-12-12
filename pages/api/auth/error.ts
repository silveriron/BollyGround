import { NextApiRequest, NextApiResponse } from "next";

const error = (req: NextApiRequest, res: NextApiResponse) => {
  res.redirect("/admin");
};

export default error;
