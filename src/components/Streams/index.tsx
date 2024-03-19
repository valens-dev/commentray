import "./styles.scss";
import streams from "../../data/streams";
// import { useFilters } from "../../contexts/FilterContext";

const Streams = () => {
  // const { filters } = useFilters();

  return (
    <div className="stream-cards">
      {/* <p>{JSON.stringify(filters)}</p> */}
      {streams.map((stream) => (
        <img key={stream.id} src={stream.image} alt={stream.name} />
      ))}
    </div>
  );
};

export default Streams;
