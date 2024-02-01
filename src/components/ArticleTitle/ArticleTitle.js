import stl from './ArticleTitle.module.scss'

const ArticleTitle = ({title='Some article title'}) => {
     return <h5 className={stl.h5}>{title}</h5>
}

export default ArticleTitle