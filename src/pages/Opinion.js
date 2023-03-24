import React from 'react';
import plama2 from './plamabottom.png';
import plama from './plamatop.png';
import frame1 from './frame1.png';
import './Opinion.css';
export const Opinion = () => {

    return <div>
        <img className="frame1" src={frame1}/>
        <img className="frame2" src={frame1}/>
        <img className="frame3" src={frame1}/>
        <img className="plama2" src={plama2}/>
        <img className="plama" src={plama}/>
        <p className="Opinie" >Opinie</p>
        <p className="data1" >31.12.2012</p>
        <p className="data2" >31.12.2012</p>
        <p className="data3" >31.12.2012</p>
        <p className="tekst" > Lorem ipsum dolor sit amet consectetur. Eleifend id condimentum sed iaculis hendrerit eu quam. Condimentum egestas tortor tincidunt pretium gravida a. Laoreet amet nec ut amet ornare id feugiat. Elementum rhoncus ac dictum.</p>
    </div>
}


