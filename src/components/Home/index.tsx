import Streams from "../Streams";
import StreamCards from "../StreamCards";
import Channels from "../Channels";
import NavigationButtons from "../NavigationButtons";

const Home = () => {
  return (
    <>
      <StreamCards />
      <NavigationButtons />
      <Channels />
      <Streams />
    </>
  );
};

export default Home;
