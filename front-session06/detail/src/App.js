import React from "react";
import Cards from "./pages/Cards";
import Card from "./pages/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Newmember from "./components/Newmember";
import Lists from "./pages/Lists";
import List from "./pages/List";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Lists />}>
            <Route path=":memId" element={<List />} />
          </Route>
        </Routes>
      </Router>
      <br />
      {/* <Newmember /> */}
    </>
  );
};

export default App;
