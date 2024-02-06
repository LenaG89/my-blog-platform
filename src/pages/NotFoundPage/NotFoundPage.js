import { Alert } from "antd";
import { Link } from "react-router-dom";
import stl from "./NotFoundPage.module.scss";
const NotFoundPage = () => {
  return (
    <div className={stl.card}>
      <Link to="/">This page was not found. Go to the Home page</Link>
    </div>
  );
};
export default NotFoundPage;
