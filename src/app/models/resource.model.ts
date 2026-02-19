export interface Article {
  title: string;
  link: string;
  pubDate: string;

  author?: string;
  creator?: string;

  thumbnail?: string;
  description: string;
}


export interface MediumRSSResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: Article[];
}