import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonLayout from "./layout/Layout";
import routes from "./Routes";

const App = () => {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            {routes.map((item, key) => (
              <Route
                exact
                path={item.path}
                element={<item.component />}
                key={key}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </>
  );
};

export default App;
