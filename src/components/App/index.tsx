import GoLive from '../GoLive';
import SignIn from '../SignIn';
import SignInDetails from '../SignInDetails';
import LogIn from '../LogIn';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import StreamScreen from '../StreamScreen';
import { FilterProvider } from '../../contexts/FilterContext';
import { StreamContextProvider } from '../../contexts/StreamContext';

const App = () => (
  <StreamContextProvider>
    <FilterProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/go-live" element={<GoLive />} />
        <Route path="/stream/:streamId" element={<StreamScreen />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-in-details" element={<SignInDetails />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
    </FilterProvider>
  </StreamContextProvider>
);

export default App;
