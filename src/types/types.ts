export interface Author {
  name: string;
  title: string;
  image: string;
}

export interface Post {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  lastModified?: Date;
  category: string;
  slug: string;
  author: Author;
}

export interface BlogPost {
  metadata: Post;
  body: string;
}

export interface Position {
  title: string;
  description: string;
  pubDate: Date;
  remote: boolean;
  type: string;
  category: string;
}
export interface Positions {
  metadata: Position;
  body: string;
}
