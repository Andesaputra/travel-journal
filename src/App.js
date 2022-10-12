import React from "react";
import "./index.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import data from "./components/data";

function App() {
  const mains = data.map((item) => {
    console.log("item", item.id);
    return (
      <Main
        key={item.id}
        item={item}
        // img={item.img}
        // country={item.country}
        // location={item.location}
        // date={item.date}
        // description={item.description}
      />
    );
  });

  return (
    <>
      <Navbar />
      {mains}
    </>
  );
}

export default App;
