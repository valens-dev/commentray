import StreamRadio from "../StreamRadio";
import CardBanners from "../CardBanners";
import Channels from "../Channels";
import NavigationButtons from "../NavigationButtons";
import "./styles.scss"

const Home = () => (
  <>
    <CardBanners />
    <NavigationButtons />
    <div className="home-lower-container">
      <Channels />
      <StreamRadio />
    </div>
  </>
)


export default Home;
