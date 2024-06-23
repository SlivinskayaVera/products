import "./App.css";
import { Route, Routes } from "react-router";
import { AppRoutes } from "./pages/appRoutes";
import Main from "./pages/MainPage/MainPage";
import Error404 from "./pages/NotFoundPage/Error404";

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<Main />} />

      {/* <Route path={AppRoutes.PRODUCTS} element={<SingInPage />} /> */}
      <Route path={AppRoutes.NOT_FOUND} element={<Error404 />} />
    </Routes>
  );
}

export default App;
