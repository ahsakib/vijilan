import Home from '@app/Home/Home';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return <>
    {/* <Navbar/> */}
    <Header/>
    <div className=''>
      <Outlet />
    </div>
    {/* <Footer /> */}
  </>


};

export default App;
