import "./styles.scss";
import streams from "../../data/streams";

const Streams = () => {
  return (
    <div className="stream-cards">
      {streams.map((stream) => (
        <img key={stream.id} src={stream.image} alt={stream.name} />
      ))}
    </div>
  );
};

export default Streams;
