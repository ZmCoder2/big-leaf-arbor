import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import './index.scss';

const Home = () => {

    return (
        <>
        <div className = "container home-page">
            {/* <img src={treePic}></img> */}
            <div className = "text-zone">
                <h1>BIG LEAF ARBOR!!!!!</h1>
            </div>
        </div>
        </>
    )
}

export default Home;