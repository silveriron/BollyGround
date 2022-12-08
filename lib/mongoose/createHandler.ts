import { NextApiRequest, NextApiResponse } from "next";
import nextConnect, { Middleware } from "next-connect";
import dbConnect from "./dbConnect";

const createHandler = (
  ...middleware: Middleware<NextApiRequest, NextApiResponse>[]
) => {
  return nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res) => {
      res.status(500).json({ message: "something wrong" });
    },
    onNoMatch: (req, res) => {
      res.status(404).json({ message: "Not Found" });
    },
  }).use(dbConnect, ...middleware);
};

export default createHandler;
