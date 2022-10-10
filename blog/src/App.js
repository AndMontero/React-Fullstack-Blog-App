import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import NavBar from "./NavBar";
import NotFound from "./pages/NotFound";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/articles" element={<ArticlesList />}></Route>
            <Route path="/articles/:articleId" element={<Article />}></Route>
            <Route
              path="/create-account"
              element={<CreateAccountPage />}
            ></Route>
            <Route path="/log-in" element={<LoginPage />}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
