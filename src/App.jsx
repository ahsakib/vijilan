import Home from '@app/Home/Home';
import Header1 from '@components/Header';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return <>
   <Header1/>
    <div className=''>
      <Outlet />
    </div>
    {/* <Footer /> */}
  </>


};

export default App;
