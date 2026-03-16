import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routesConfig";

function AppRoutes() {

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Suspense>
  );

}

export default AppRoutes;