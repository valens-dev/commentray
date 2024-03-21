import "./styles.scss";
import StreamRadio from "../StreamRadio";
import Streams from "../Streams";
import Channels from "../Channels";
import NavigationButtons from "../NavigationButtons";
import StreamChat from "../StreamChat";
import Header from "../Header";

const Home = () => (
  <>
    <Header />
    <Streams />
    <NavigationButtons />
    <div className="home-lower-container">
      <Channels />
      <StreamRadio />
      <StreamChat />
    </div>
  </>
);

export default Home;
