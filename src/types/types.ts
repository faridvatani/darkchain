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
