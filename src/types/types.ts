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
  category: string;
  author: Author;
}

export interface BlogPost {
  metadata: Post;
  content: string;
  fileName: string;
}
