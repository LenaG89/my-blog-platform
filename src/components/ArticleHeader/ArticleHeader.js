import ArticleTitle from "../ArticleTitle/ArticleTitle";
import LikesCounter from "../LikesCounter/LikesCounter";


import { Link } from "react-router-dom";

import stl from "./ArticleHeader.module.scss";

const ArticleHeader = ({ slug, title, favorited, favoritesCount }) => {
 
 
  return (
    
      <div className={stl.wrap}>
        <div className={stl.title}>
          <Link  to={`/articles/${slug}`} className={stl.nondec}>
          <h5 className={stl.h5}  >{title} </h5>
          </Link>
          <LikesCounter favorited={favorited} favoritesCount={favoritesCount} />
        </div>
      </div>
     
 
  );
};
export default ArticleHeader;
