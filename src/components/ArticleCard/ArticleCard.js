import ArticleHeader from "../ArticleHeader/ArticleHeader";
import ArticleDescription from "../ArticleDescription/ArticleDescription";
import ArticleTag from "../ArticleTag/ArticleTag";
import UserProfile from "../UserProfile/UserProfile";


import stl from "./ArticleCard.module.scss";


const ArticleCard = ({author,
  createdAt,
  description,
  favoritesCount,
  tagList,
  title,
  slug,
  favorited, body,  }) => {
 const {username, image }=author
  
  return (
    
    <li  className={stl.card}>
      <div className={stl.wrapper}>
      <ArticleHeader slug={slug} title={title} favorited={favorited} favoritesCount={favoritesCount}  />
      <ArticleTag tagList={tagList}/>
      <ArticleDescription description={description}/>
     
      </div>
      <UserProfile username={username} image={image} createdAt={createdAt} />
    </li>
     
  );
};

export default ArticleCard;
