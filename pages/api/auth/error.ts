import { NextApiRequest, NextApiResponse } from "next";

const error = (req: NextApiRequest, res: NextApiResponse) => {
  res.redirect("/admin?error=true");
};

export default error;
