import React from 'react';
import logo from './logoo.png';
import plama2 from './plamabottom.png';
import plama from './plamatop.png';
import frame1 from './frame1.png';
import './Home.css';
export const opinion = () => {

    return <div>
        <img className="frame" src={frame1}/>
        <img className="plama2" src={plama2}/>
        <img className="plama" src={plama}/>

        <div className="Home-logo">
            <img src={logo}/>
        </div>

    </div>
}


