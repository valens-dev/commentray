import StreamRadio from "../StreamRadio";
import CardBanners from "../CardBanners";
import Channels from "../Channels";
import NavigationButtons from "../NavigationButtons";
import "./styles.scss"
import StreamChat from "../StreamChat";

const Home = () => (
  <>
    <CardBanners />
    <NavigationButtons />
    <div className="home-lower-container">
      <Channels />
      <StreamRadio />
      <StreamChat />
    </div>
  </>
)


export default Home;
