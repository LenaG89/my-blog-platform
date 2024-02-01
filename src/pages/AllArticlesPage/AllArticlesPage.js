import ArticleCard from "../../components/ArticleCard/ArticleCard";
import MyPagination from "../../components/MyPagination/MyPagination";
import stl from './AllArticlesPage.module.scss'
const AllArticlesPage =() => {
    return(
        <div  className={stl.page}>
<ul className={stl.pageList}>
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
</ul>
<MyPagination />
        </div>

    )
}
export default AllArticlesPage