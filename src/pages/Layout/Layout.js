import MyButton from "../../components/MyButton/MyButton";
import { Outlet } from "react-router-dom";
import stl from "./Layout.module.scss";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className={stl.app}>
      <header className={stl.header}>
        <Link to="/">
          <MyButton
            type="text"
            size="large"
            children="Realworld Blog"
            className={stl.btn}
          />
        </Link>
        <div className={stl.btnWrapper}>
          <MyButton type="text" size="large" children="Sign In" />
         <Link to='/sign-up'> <MyButton
            type="default"
            size="large"
            children="Sign Up"
            color="#52C41A"
          /></Link>
        </div>
      </header>
      <div className={stl.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
