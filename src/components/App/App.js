import { Route, Routes } from "react-router-dom";
import Layout from "../../pages/Layout/Layout";
import ArticlePage from "../../pages/ArticlePage/ArticlePage";
import AllArticlesPage from "../../pages/AllArticlesPage/AllArticlesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

import "./App.css";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllArticlesPage />} />
        <Route path="articles" element={<AllArticlesPage />} />
        <Route path="articles/:slug" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
