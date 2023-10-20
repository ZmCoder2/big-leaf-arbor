import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import TreeCare from './components/TreeCare/treeCare';
import NavbarComp from './components/NavbarComp/NavbarComp';
import SpecialServices from './components/SpecialServices/SpecialServices'
import EmergencyWork from './components/EmergencyWork/EmergencyWork';

function App() {
    return (
        <Router basename='/big-leaf-arbor'>
            <NavbarComp />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/treecare' element={<TreeCare />} />
                <Route path='/specialservices' element={<SpecialServices />} />
                <Route path='/emergencywork' element={<EmergencyWork />} />
                {/* <Route path='/whoweare' element={<WhoWeAre />} /> */}
            </Routes>
        </Router>
    );
}

export default App;

