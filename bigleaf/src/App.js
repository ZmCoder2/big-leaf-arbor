import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Bootstrap from 'bootstrap';
// import WhoWeAre from './components/WhoWeAre';
// import Contact from './components/Contact';
// import TreeCare from './components/TreeCare';
import './App.scss';

function App() {

  return (
    <HashRouter basename='/'>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/about" element={<WhoWeAre />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/treecare" element={<TreeCare />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
