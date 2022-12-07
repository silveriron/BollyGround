export interface Article {
  title: string;
  desc: string;
  content: string;
  thumbnail: string;
  timeStamp: string;
  featured?: boolean;
  author: Author;
}

export interface Author {
  name: string;
  id: string;
  avatar: string;
}
