import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonLayout from "./layout/Layout";
import { routes, defaultroutes } from "./Routes";
import DefaultLayout from "./layout/DefaultLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CommonLayout />}>
            {routes.map((item, key) => (
              <Route
                exact
                path={item.path}
                element={<item.component />}
                key={key}
              />
            ))}
          </Route>
          <Route path="/" element={<DefaultLayout />}>
            {defaultroutes.map((item, key) => (
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
    </>
  );
};

export default App;
