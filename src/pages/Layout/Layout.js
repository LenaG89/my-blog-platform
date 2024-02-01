import MyButton from '../../components/MyButton/MyButton'
import AllArticlesPage from '../../pages/AllArticlesPage/AllArticlesPage';
import stl from "./Layout.module.scss";


  const Layout = () => {
  return <div className={stl.app}>
    <header className={stl.header}>
        <MyButton type='text' size='large' children='Realworld Blog' className={stl.btn}/>
<div className={stl.btnWrapper}>
<MyButton type='text' size='large' children='Sign In'/>
<MyButton type='default' size='large' children='Sign Up' color='#52C41A'/>

</div>

    </header>
    <div className={stl.content}>
<AllArticlesPage />
    </div>
  </div>;
};

export default Layout