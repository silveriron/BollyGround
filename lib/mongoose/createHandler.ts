import { NextApiRequest, NextApiResponse } from "next";
import nextConnect, { Middleware } from "next-connect";
import dbConnect from "./dbConnect.js";

const createHandler = (
  ...middleware: Middleware<NextApiRequest, NextApiResponse>[]
) => {
  return nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res) => {
      res.status(501).json({ message: err.message });
    },
    onNoMatch: (req, res) => {
      res.status(405).json({ message: "Not Found" });
    },
  }).use(dbConnect, ...middleware);
};

export default createHandler;
