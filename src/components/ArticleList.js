import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  const arr = posts.map((elem) => (
    <Article
      key={elem.id}
      title={elem.title}
      date={elem.date}
      preview={elem.preview}
    />
  ));

  return <main>{arr}</main>;
};

export default ArticleList;
