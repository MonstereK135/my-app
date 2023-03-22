import logo from './logoo.png';
import plama2 from './plamabottom.png';
import plama from './plamatop.png';
import { Button, } from 'antd';
import './Home.css';
import React from 'react';
import App from "../App";

export const Home = () => {

    return <div >
        <img className="plama2" src={plama2}/>
        <img className="plama" src={plama}/>

        <div className="Home-logo">
            <img src={logo}/>
        </div>
        <Button type="dashed">przejdz dalej</Button>
    </div>

}
export default App;

