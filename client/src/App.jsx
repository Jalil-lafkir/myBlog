import "./Style.css";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import RegistrationPage from "./Pages/RegistrationPage";
import PostPage from "./Pages/PostPage";
import NewPost from "./Pages/NewPost";
import { Routes, Route } from "react-router-dom";
import { DarkThemeContext, DarkthemeState } from "./Context/DarkThemContext";

function App() {
  const { isDarkTheme, setisDarkTheme } = DarkthemeState();
  return (
    <>
      <DarkThemeContext.Provider value={{ isDarkTheme, setisDarkTheme }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/Registration" element={<RegistrationPage />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/newPost" element={<NewPost />} />
          </Route>
        </Routes>
      </DarkThemeContext.Provider>
    </>
  );
}

export default App;
