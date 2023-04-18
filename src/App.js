import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./create";
import Read from "./read";
import Update from "./update";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create />}>
          {" "}
        </Route>
        <Route excat path="/read" element={<Read />}>
          {" "}
        </Route>
        <Route excat path="/update" element={<Update/>}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
