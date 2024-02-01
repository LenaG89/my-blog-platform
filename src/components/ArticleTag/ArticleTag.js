import { Tag } from "antd";
import React from "react";

import stl from './ArticleTag.module.scss'

const ArticleTag = ({ tagData }) => {
  // const elements = tagData.map((tag, i) => {
  //   return <Tag className={stl.tag} key={`${tag} ${i}`}>{tag}</Tag>;
  // });
  return <Tag className={stl.tag}>Tag1</ Tag>;
};

export default ArticleTag;
