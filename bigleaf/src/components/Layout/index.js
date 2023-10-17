import { Outlet } from 'react-router-dom';
// import Navbar from './components/NavbarComp';
import './index.scss';
import NavbarComp from '../NavbarComp';

const Layout = () => {
    return (
        <div className="App">
            <NavbarComp />
            <div className='page'>
                {/* <span className='tags top-tags'></span> */}
                <Outlet />
            </div>
        </div>
    )
}
export default Layout;
