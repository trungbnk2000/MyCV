import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../home/Home.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";
import { Main } from "../home/Main.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Main />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <Main />
        </Layout>
      }
    />
  </Routes>
);
