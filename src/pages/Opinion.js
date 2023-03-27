import React from 'react';
import plama2 from './plamabottom.png';
import plama from './plamatop.png';
import frame1 from './frame1.png';
import './Opinion.css';
import {Rate} from "antd";
export const Opinion = () => {

    return <div>
        <img className="plama2" src={plama2}/>
        <img className="plama" src={plama}/>
        <p className="Opinie" >Opinie</p>
        <p className="Email-opinia" > Email:</p>
        <p className="nazwa-email" > Rozowyejdnrozec135@gmail.com</p>
        <div className="Opinion-o">
            <p className="tekst" > Lorem ipsum dolor sit amet consectetur. Eleifend id condimentum sed iaculis hendrerit eu quam. Condimentum egestas tortor tincidunt pretium gravida a. Laoreet amet nec ut amet ornare id feugiat. Elementum rhoncus ac dictum.</p>
            <p className="data1" >31.12.2012</p>
            <p className="Ocena2"> Ocena:</p>
            <img className="frame1" style={{ height: 240, width: "100%" }} src={frame1}/>
            <img className="frame2" style={{ height: 240, width: "100%" }} src={frame1}/>
            <img className="frame3" style={{ height: 240, width: "100%" }} src={frame1}/>
            <Rate
                style={{fontSize: 30}}
                allowHalf
                tooltips={["źle", "słabo", "średnio", "dobrze", "bardzo dobrze"]}
                className="rate2"
                Showcopywriting={1}/>
        </div>



        {/*      <p className="data1" >31.12.2012</p>
        <p className="data2" >31.12.2012</p>
        <p className="data3" >31.12.2012</p>
        <p className="tekst" > Lorem ipsum dolor sit amet consectetur. Eleifend id condimentum sed iaculis hendrerit eu quam. Condimentum egestas tortor tincidunt pretium gravida a. Laoreet amet nec ut amet ornare id feugiat. Elementum rhoncus ac dictum.</p>*/}
    </div>
}


