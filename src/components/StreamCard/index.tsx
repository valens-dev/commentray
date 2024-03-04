import "./styles.scss"
import imageUrls from "../../constants/imageData"


const StreamCard = () => {
  
  return (
    <div className="stream-card">
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} id={`card-${index + 1}`} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );

};

export default StreamCard;
