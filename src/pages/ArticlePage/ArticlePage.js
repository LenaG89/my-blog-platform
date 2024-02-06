import ArticleHeader from "../../components/ArticleHeader/ArticleHeader";
import ArticleDescription from "../../components/ArticleDescription/ArticleDescription";
import ArticleTag from "../../components/ArticleTag/ArticleTag";
import ArticleBody from "../../components/ArticleBody/ArticleBody";
import UserProfile from "../../components/UserProfile/UserProfile";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnArticle } from "../../store/serverActions/articlesThunks";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useEffect } from "react";

import stl from "./ArticlePage.module.scss";

const ArticlePage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articles.article);
  const error = useSelector((state) => state.articles.error);
  const loading = useSelector((state) => state.articles.loading);

  console.log(useParams());

  useEffect(() => {
    dispatch(fetchAnArticle(slug));
  }, [dispatch, slug]);

  const active = !article ? null : (
    <li  className={stl.card}>
      <div className={stl.wrapper}>
      <ArticleHeader slug={slug} title={article.title} favorited={article.favorited} favoritesCount={article.favoritesCount} author={article.author} />
      <ArticleTag tagList={article.tagList}/>
      <ArticleDescription description={article.description}/>
      <ArticleBody body={article.body} />
      </div>
      <UserProfile author={article.author} createdAt={article.createdAt} />
    </li>
  );
  const spiner = loading ? <Loader /> : null;
  const errorMessage = error ? <Error errorMessage={error} /> : null;

  return (
    <div className={stl.content}>
      {active}
      {spiner}
      {errorMessage}
    </div>
  );
};
export default ArticlePage;
