import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import GoLive from "../GoLive";
import Login from "../Login";
import { FilterProvider } from "../../contexts/FilterContext";

const App = () => (
  <FilterProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/go-live" element={<GoLive />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </FilterProvider>
);

export default App;
