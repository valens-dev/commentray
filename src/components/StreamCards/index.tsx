import "./styles.scss"
import cardImages from "../../data/images"


const StreamCards = () => {

  return (
    <div className="stream-cards">
      {cardImages.map((imageUrl, index) => (
        <img key={index} src={imageUrl} id={`card-${index + 1}`} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );

};

export default StreamCards;
