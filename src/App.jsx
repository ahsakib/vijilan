import Footer from '@components/Footer';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return <>
    {/* <Header/> */}
    <div className=''>
      <Outlet />
    </div>
    <Footer/>
  </>
};

export default App;
