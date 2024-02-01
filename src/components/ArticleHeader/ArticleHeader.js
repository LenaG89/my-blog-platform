import ArticleTitle from "../ArticleTitle/ArticleTitle";
import LikesCounter from "../LikesCounter/LikesCounter";
import UserProfile from "../UserProfile/UserProfile";

import stl from './ArticleHeader.module.scss'
const ArticleHeader = ({title,}) => {
    return (
        <div className={stl.header}>
        <div className={stl.wrap}>
          <div className={stl.title}>
            <ArticleTitle title={title}/>
            <LikesCounter />
          </div>
          
        </div>
        <UserProfile />
      </div>
    )
}
export default ArticleHeader