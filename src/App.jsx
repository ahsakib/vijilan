import Home from '@app/Home/Home';
import { Outlet } from 'react-router-dom';

const App = () => {
  return <>
    {/* <Navbar/> */}
    <Outlet />
    {/* <Footer /> */}
  </>


};

export default App;
