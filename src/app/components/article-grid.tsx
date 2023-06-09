import React from "react";
import { Article } from "../services/articles";
import { link } from "fs";
import ArticleCard from "./article-card";

export default function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {articles.map((article, idx) => (
        <ArticleCard article={article} key={idx} />
      ))}
    </div>
  );
}
