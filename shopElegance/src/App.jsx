import React from "react";
import Header from "./Reusables/Header";
import Footer from "./Reusables/Footer";
import NavBar from "./Reusables/Navbar";
import { RouterProvider, createBrowserRouter, Route, Router, createRoutesFromElements } from "react-router-dom";
import About from "./Views/About/About";
import Home from "./Views/Home/Home";
import Contact from "./Views/Contact/Contact";
import Profile from "./Views/Profile/Profile";
import Cart from "./Views/Cart/Cart";
import Signup from "./Views/Auth/Signup";
import Login from "./Views/Auth/Login"
import { Item } from "./Views/Home/item";
import NotFound from "./Reusables/notFound";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import Error from "./Reusables/error";
import { itemLoader } from "./Views/Home/item";
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<NavbarWrapper />} exact >
      <Route path="/" element={<Home />} exact />
      <Route path="/:product_id"
        element={<Item />}
        loader={itemLoader}
         exact />
      <Route path="/contact" element={<Contact />} exact />
      <Route path="/about" element={<About />} exact />
      <Route path="/signup" element={<Signup />} exact />
      <Route path="/cart" element={<Cart />} exact />
      <Route path="/profile" element={<Profile />} exact />
      <Route path="/login" element={<Login />} exact />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);


function App() {
  return (
    <div className="font-Poppins" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <ErrorBoundary FallbackComponent={Error}>
        <Header />
        <div className="px-20 flex-grow">
          {/* <NavbarWrapper /> */}
          <RouterProvider router={router} />
        </div>
        <Footer className="bottom-0" />
      </ErrorBoundary>
    </div>
  );
}
function NavbarWrapper() {
  return (
    <div >
      <NavBar />
      <Outlet />
    </div>
  )
}
export default App;
