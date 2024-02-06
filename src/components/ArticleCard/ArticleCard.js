import ArticleHeader from "../ArticleHeader/ArticleHeader";
import ArticleDescription from "../ArticleDescription/ArticleDescription";
import ArticleTag from "../ArticleTag/ArticleTag";
import ArticleBody from "../ArticleBody/ArticleBody";
import UserProfile from "../UserProfile/UserProfile";


import stl from "./ArticleCard.module.scss";


const ArticleCard = ({author,
  createdAt,
  description,
  favoritesCount,
  tagList,
  title,
  slug,
  favorited, body, articleContent = false }) => {
 
  const content = articleContent ? <ArticleBody body={body} /> : null;
  return (
    
    <li  className={stl.card}>
      <div className={stl.wrapper}>
      <ArticleHeader slug={slug} title={title} favorited={favorited} favoritesCount={favoritesCount} author={author} />
      <ArticleTag tagList={tagList}/>
      <ArticleDescription description={description}/>
      {content}
      </div>
      <UserProfile author={author} createdAt={createdAt} />
    </li>
     
  );
};

export default ArticleCard;
