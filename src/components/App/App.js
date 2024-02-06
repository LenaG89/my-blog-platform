import { Route, Routes } from "react-router-dom";
import Layout from "../../pages/Layout/Layout";
import ArticlePage from "../../pages/ArticlePage/ArticlePage";
import AllArticlesPage from "../../pages/AllArticlesPage/AllArticlesPage";
import SignInPage from "../../pages/SignInPage/SignInPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import EditProfilePage from "../../pages/EditProfilePage/EditProfilePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllArticlesPage />} />
        <Route path="articles" element={<AllArticlesPage />} />
        <Route path="articles/:slug" element={<ArticlePage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="profile" element={<EditProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
