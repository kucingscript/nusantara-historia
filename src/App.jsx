import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import { data } from "./components/data";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        {data.flat().map((item, index) => {
          return (
            <Route path={item.path} element={<item.component />} key={index} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
