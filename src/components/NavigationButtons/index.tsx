import "./styles.scss"
import { Button } from '@mui/material';

const NavigationButtons = () => {

  return (
    <div className="navigation-buttons">
      <Button variant="contained">Audio only</Button>
      <Button variant="contained">Group CommenTray</Button>
      <Button variant="contained">Get involved</Button>
      <Button variant="contained">Celebrity CommenTray</Button>
      <Button variant="contained">Place your bet</Button>
    </div>
  );

};

export default NavigationButtons;
