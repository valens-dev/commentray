import { FilterProvider } from "../../contexts/FilterContext";
import HeaderMinimal from "../HeaderMinimal";
import LoginBody from "../LoginBody";

const Login = () => (
  <FilterProvider>
    <HeaderMinimal />
    <LoginBody />
  </FilterProvider>
);

export default Login;
