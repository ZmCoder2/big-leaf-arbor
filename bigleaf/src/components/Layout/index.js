import { Outlet } from 'react-router-dom';
import Navbar from '../NavbarComp';
import './index.scss';

const Layout = () => {
    return (
        <div className="App">
            <Navbar />
            <div className='page'>
                <span className='tags top-tags'>
                    
                </span>
            </div>
        </div>
    )
}
export default Layout;
