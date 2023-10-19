import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import TreeCare from './components/TreeCare/treeCare';
import NavbarComp from './components/NavbarComp/NavbarComp';

function App() {
    return (
        <Router basename='/big-leaf-arbor'>
            <NavbarComp />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/treecare' element={<TreeCare />} />
            </Routes>
        </Router>
    );
}

export default App;

