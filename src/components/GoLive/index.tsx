import "./styles.scss";
import { FilterProvider } from "../../contexts/FilterContext";
import HeaderMinimal from "../HeaderMinimal";
import GoLiveBody from "../GoLiveBody";

const GoLive = () => (
  <FilterProvider>
    <HeaderMinimal />
    <GoLiveBody />
  </FilterProvider>
);

export default GoLive;
