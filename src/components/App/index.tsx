import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import GoLive from "../GoLive";
import Login from "../Login";
import Login2 from "../Login2";
import { FilterProvider } from "../../contexts/FilterContext";

const App = () => (
  <FilterProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/go-live" element={<GoLive />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login2" element={<Login2 />} />
    </Routes>
  </FilterProvider>
);

export default App;
