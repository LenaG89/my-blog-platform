import ArticleHeader from "../ArticleHeader/ArticleHeader";
import ArticleDescription from "../ArticleDescription/ArticleDescription";
import ArcticleTag from "../ArticleTag/ArticleTag";


import stl from "./ArticleCard.module.scss";

const ArticleCard = ({slug }) => {
  return (
    <li key={slug} className={stl.card}>
     <ArticleHeader />
      <ArcticleTag />
      <ArticleDescription />
    </li>
  );
};

export default ArticleCard;
