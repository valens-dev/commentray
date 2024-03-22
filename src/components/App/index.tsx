import { Routes, Route } from "react-router-dom";
import { FilterProvider } from "../../contexts/FilterContext";
import Home from "../Home";
import GoLive from "../GoLive";
import SignIn from "../SignIn";
import SignInDetails from "../SignInDetails";
import LogIn from "../LogIn";

const App = () => (
  <FilterProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/go-live" element={<GoLive />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-in-details" element={<SignInDetails />} />
      <Route path="/log-in" element={<LogIn />} />
    </Routes>
  </FilterProvider>
);

export default App;
