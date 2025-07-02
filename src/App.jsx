import Home from '@app/Home/Home';
import { Outlet } from 'react-router-dom';

const App = () => {
  return <>
    {/* <Navbar/> */}
    <div className=''>
      <Outlet />
    </div>
    {/* <Footer /> */}
  </>


};

export default App;
