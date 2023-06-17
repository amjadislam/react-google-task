import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import store from "./store";
import { RouteProps } from "./interface/routes.interface";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
const App = () => {

  const routes: RouteProps[] = [
    { path: '/', element: <Login /> , exact: true },
    { path: '/home', element: <Homepage /> },
  ];

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))};
        </Routes>
      </Router>
    </Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
