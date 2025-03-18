export interface Article {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ArticleList {
  articles: Article[];
  total: number;
}

export interface ArticleDetail {
  article: Article;
}
