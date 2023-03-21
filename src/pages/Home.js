import logo from './logo.png';
import plama2 from './plamabottom.png';
import plama from './plamatop.png';
import './Home.css';
import React from 'react';
export const Home = () => {

    return <div >
        <div className="Home-logo">
            <img src={logo}/>
        </div>
        <img className="plama2" src={plama2}/>
        <img className="plama" src={plama}/>

    </div>

}


