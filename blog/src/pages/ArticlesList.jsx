import articles from "./article-content";
import ArticlesListComponent from "../components/ArticlesListComponent";
function ArticlesList() {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesListComponent articles={articles}></ArticlesListComponent>
    </>
  );
}

export default ArticlesList;
