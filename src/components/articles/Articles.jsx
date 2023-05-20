import React from "react";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <section className="w-[85%] mx-auto my-20">
      <h2 className="text-[26px] text-[#204892] font-semibold mb-5">
        Latest Articles
      </h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </section>
  );
};

export default Articles;
