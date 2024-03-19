import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Header from "../Header";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
);

export default App;
