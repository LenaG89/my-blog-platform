import { Tag } from "antd";
import React from "react";

import stl from './ArticleTag.module.scss'

const ArticleTag = ({ tagList}) => {
  const elements = tagList.map((tag, i) => {
    if (tag!=='')
    return <Tag className={stl.tag} key={`${tag} ${i}`}>{tag}</Tag>;
  });
  return <div className={stl.tag}>{elements}</ div>;
};

export default ArticleTag;
