import React from "react";
import { useContext } from "react";
import "./style.css";

import { myContext } from "./ProductsProvider";

const Navbar = () => {
  const numOfDataPage = useContext(myContext);

  return <div className="Navbar">{numOfDataPage.info.length} items</div>;
};

export default Navbar;
