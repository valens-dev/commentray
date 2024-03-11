import "./styles.scss";
import CardBannersList from "../../data/images";

const CardBanners = () => (
  <div className="stream-banners">
    {CardBannersList.map((bannerUrl, index) => (
      <img
        key={bannerUrl}
        src={bannerUrl}
        id={`banner-${index + 1}`}
        alt={`Image ${index + 1}`}
      />
    ))}
  </div>
);

export default CardBanners;
