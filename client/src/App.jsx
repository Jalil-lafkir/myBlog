import "./Style.css";
import Layout from "./Layout";
import NewPost from "./Pages/NewPost";
import PostPage from "./Pages/PostPage";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import RegistrationPage from "./Pages/RegistrationPage";
import Popup from "./Components/LayoutsComponents/Popup";
import { PopupProvider } from "./Context/PopupContext.jsx";
import { DarkThemeContext, DarkthemeState } from "./Context/DarkThemContext";

function App() {
  const { isDarkTheme, setisDarkTheme } = DarkthemeState();
  const { user } = UserContext();

  return (
    <>
      <DarkThemeContext.Provider value={{ isDarkTheme, setisDarkTheme }}>
        <PopupProvider>
          <Popup />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/Registration" element={<RegistrationPage />} />

              <Route
                path="/posts/:id"
                element={user ? <PostPage /> : <RegistrationPage />}
              />
              <Route
                path="/newPost"
                element={user ? <NewPost /> : <RegistrationPage />}
              />
            </Route>
          </Routes>
        </PopupProvider>
      </DarkThemeContext.Provider>
    </>
  );
}

export default App;
