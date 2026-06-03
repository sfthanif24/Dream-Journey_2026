import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Homepage/Banner/Banner";
import Players from "./components/Players/Players";
import Footer from "./components/Footer/Footer";
import { Suspense } from "react";
import { useState } from "react";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const App = () => {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000);
  return (
    <div>
      <Navbar coin={coin} />
      <Banner />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Players
          playersPromise={playersPromise}
          setCoin={setCoin}
          coin={coin}
        />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
