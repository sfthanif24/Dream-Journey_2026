import React from "react";
import Link from "./Link";

const navigationData = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "About",
    path: "/about",
    id: 2,
  },
  {
    name: "Services",
    path: "/services",
    id: 3,
  },
  {
    name: "Contact",
    path: "/contact",
    id: 4,
  },
  {
    name: "Blog",
    path: "/blog",
    id: 5,
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        {navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
      {/* <ul className="flex">
        {navigationData.map((route) => (
          <li className="mr-10">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}
    </nav>
  );
};

export default Navbar;
