import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlankLayout from "../layouts/black";
import HomeLayout from "../layouts/home";

import Home from "../pages/home";
import Shop from "../pages/shop";
import Contact from "../pages/contact";

import Login from "../pages/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/" element={<BlankLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
