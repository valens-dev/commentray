import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import GoLive from "../GoLive";
import Login from "../Login";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/go-live" element={<GoLive />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default App;
