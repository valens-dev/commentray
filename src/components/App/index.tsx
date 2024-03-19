import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import GoLive from "../GoLive";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/go-live-page" element={<GoLive />} />
    </Routes>
  </>
);

export default App;
