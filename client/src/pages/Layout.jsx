import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navigation';
import './Layout.scss';

const Layout = () => {
  return (
    <>
      <Navbar />

      <div className='layout__container'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
