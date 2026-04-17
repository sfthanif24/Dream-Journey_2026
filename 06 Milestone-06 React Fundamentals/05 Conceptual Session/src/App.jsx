import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Foods from "./components/Foods/Foods";

const foodData = fetch(
  "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
).then((res) => res.json());

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<div>Loading...</div>}>
        <Foods foodData={foodData}></Foods>
      </Suspense>
    </div>
  );
};

export default App;
