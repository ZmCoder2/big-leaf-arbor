import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import TreeCare from './components/TreeCare/treeCare';
import NavbarComp from './components/NavbarComp/NavbarComp';
import SpecialServices from './components/SpecialServices/SpecialServices'
import EmergencyWork from './components/EmergencyWork/EmergencyWork';
import Consulting from './components/Consulting/Consulting';
import StructuralPruning from './components/StructuralPruning/StructuralPruning';
import CraneWork from './components/CraneWork/CraneWork';
import StumpGrinding from './components/StumpGrinding/StumpGrinding';
import IvyRemoval from './components/IvyRemoval/IvyRemoval';
import ShrubPruning from './components/ShrubPruning/ShrubPruning';
import Diagnosis from './components/Diagnosis/Diagnosis';
import HazardEvaluation from './components/HazardEvaluation/HazardEvaluation';
import ResidentialClients from './components/ResidentialClients/ResidentialClients';
import CommercialProperties from './components/CommercialProperties/CommercialProperties';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';
import Highlights from './components/Highlights/Highlights';
import ClientsReviews from './components/ClientsReviews/ClientsReviews';

function App() {
    return (
        <Router basename='/big-leaf-arbor'>
            <NavbarComp />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/treecare' element={<TreeCare />} />
                <Route path='/specialservices' element={<SpecialServices />} />
                <Route path='/emergencywork' element={<EmergencyWork />} />
                <Route path='/consulting' element={<Consulting />} />
                <Route path='/structuralpruning' element={<StructuralPruning />} />
                <Route path='/cranework' element={<CraneWork />} />
                <Route path='/stumpgrinding' element={<StumpGrinding />} />
                <Route path='/ivyremoval' element={<IvyRemoval />} />
                <Route path='/shrubpruning' element={<ShrubPruning />} />
                <Route path='/diagnosis' element={<Diagnosis />} />
                <Route path='/hazardevaluation' element={<HazardEvaluation />} />
                <Route path='/residentialclients' element={<ResidentialClients />} />
                <Route path='/commercialproperties' element={<CommercialProperties />} />
                 <Route path='/meettheteam' element={<MeetTheTeam />} />
                 <Route path='/highlights' element={<Highlights />} />
                 <Route path='/clientsreviews' element={<ClientsReviews />} />
                 {/* <Route path='/estimate' element={<Estimate />} /> */}
            </Routes>
        </Router>
    );
}

export default App;

