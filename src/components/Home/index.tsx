import ListeningTo from "../ListeningTo";
import CardBanners from "../CardBanners";
import Channels from "../Channels";
import NavigationButtons from "../NavigationButtons";
import "./styles.scss"

const Home = () => {
  return (
    <>
      <CardBanners />
      <NavigationButtons />
      <div className="home-lower-container">
        <Channels />
        <ListeningTo />
      </div>
    </>
  );
};

export default Home;
