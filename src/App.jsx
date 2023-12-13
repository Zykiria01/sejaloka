/* eslint-disable no-unused-vars */
import { BrowserRouter } from 'react-router-dom';
import Routers from './routes/routers';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
