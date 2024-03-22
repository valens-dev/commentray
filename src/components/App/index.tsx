import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import GoLive from "../GoLive";
import SignIn from "../SignIn";
import SignInDetails from "../SignInDetails";
import { FilterProvider } from "../../contexts/FilterContext";

const App = () => (
  <FilterProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/go-live" element={<GoLive />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-in-details" element={<SignInDetails />} />
    </Routes>
  </FilterProvider>
);

export default App;
