import ArticleCard from "../../components/ArticleCard/ArticleCard";
import MyPagination from "../../components/MyPagination/MyPagination";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useEffect } from "react";
import { fetchAllArticles } from "../../store/serverActions/articlesThunks";
import { useSelector, useDispatch } from "react-redux";
import stl from "./AllArticlesPage.module.scss";
const AllArticlesPage = () => {
  const dispatch = useDispatch();
  const articleData = useSelector((state) => state.articles.articles);
  const articlesCount = useSelector((state) => state.articles.articlesCount);
  const currentPage = useSelector((state) => state.articles.currentPage);
  const error = useSelector((state) => state.articles.error);
  const loading = useSelector((state) => state.articles.loading);

  const articles = articleData.map((item) => {
    return <ArticleCard key={item.slug} {...item} />;
  });

  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  const active = articleData ? articles : null;
  const spiner = loading ? <Loader /> : null;
  const errorMessage = error ? <Error errorMessage={error} /> : null;
  const pagination =
    articlesCount > 5 ? (
      <MyPagination articlesCount={articlesCount} currentPage={currentPage} />
    ) : null;
  return (
    <div className={stl.page}>
      <ul className={stl.pageList}>
        {active}
        {spiner}
        {errorMessage}
      </ul>
      {pagination}
    </div>
  );
};
export default AllArticlesPage;
