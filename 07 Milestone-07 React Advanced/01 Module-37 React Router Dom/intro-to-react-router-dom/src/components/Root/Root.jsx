import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import SideBar from "../SideBar/SideBar";
import "./Root.css";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      <div className="root-main">
        <SideBar></SideBar>
        {isNavigating && <p>Loading...</p>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

/**
 * 1. use: usersPromise > Suspense > promise > use(userPromise)
 * 2. [less used so far] > useState + useEffect ( () => {}, [])
 * 3. set loader in the route definition; load data before router component is rendered
 */
