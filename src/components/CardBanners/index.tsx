import "./styles.scss"
import streamBanners from "../../data/images"


const StreamCards = () => {

  return (
    <div className="stream-banners">
      {streamBanners.map((imageUrl, index) => (
        <img key={index} src={imageUrl} id={`banner-${index + 1}`} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );

};

export default StreamCards;
