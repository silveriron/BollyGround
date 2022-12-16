import React from "react";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import {setup} from '../../lib/csrf/csrf'

const EditorPage = dynamic(import("../../components/EditorPage/EditorPage"), {
  ssr: false,
});

const Post = () => {
  const { status } = useSession();
  const { push } = useRouter();

  if (status === "unauthenticated") {
    push("/admin");
  } else if (status === "authenticated") {
    return <EditorPage />;
  }
};

export const getServerSideProps = setup(async (req, res) => {
  return { props: {}}
});

export default Post;
