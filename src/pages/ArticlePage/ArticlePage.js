import ArticleHeader from "../../components/ArticleHeader/ArticleHeader";
import ArticleDescription from "../../components/ArticleDescription/ArticleDescription";
import ArticleTag from "../../components/ArticleTag/ArticleTag";
import ArticleBody from "../../components/ArticleBody/ArticleBody";
import UserProfile from "../../components/UserProfile/UserProfile";
import { useParams } from "react-router-dom";
import {useGetAnArticleQuery} from '../../store/kataPostsApi'
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import stl from "./ArticlePage.module.scss";

const ArticlePage = () => {
  const { slug } = useParams();

  const {data, isLoading, isError, error} = useGetAnArticleQuery(slug);
  
  const active = !data?.article ? null : (
    <li  className={stl.card}>
      <div className={stl.wrapper}>
      <ArticleHeader slug={slug} title={data.article.title} favorited={data.article.favorited} favoritesCount={data.article.favoritesCount} author={data.article.author} />
      <ArticleTag tagList={data.article.tagList}/>
      <ArticleDescription description={data.article.description}/>
      <ArticleBody body={data.article.body} />
      </div>
      <UserProfile author={data.article.author} createdAt={data.article.createdAt} />
    </li>
  );
  const spiner = isLoading ? <Loader /> : null;
  const errorMessage = isError ? <Error errorMessage={error.data.errors.message} errorStatus={error.status} /> : null;

  return (
    <div className={stl.content}>
      {active}
      {spiner}
      {errorMessage}
    </div>
  );
};
export default ArticlePage;
