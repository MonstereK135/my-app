import React from 'react';
import plama2 from './plamabottom.png';
import plama from './plamatop.png';
import frame1 from './frame1.png';
import './Opinion.css';
import {Rate} from "antd";
export const Opinion = () => {
    const data = [{
        date: "8.02.2023",
        opinion: "Lorem ipsum dolor sit amet consectetur. Eleifend id condimentum sed iaculis hendrerit eu quam. Condimentum egestas tortor tincidunt pretium gravida a. Laoreet amet nec ut amet ornare id feugiat. Elementum rhoncus ac dictum.",
        email: "fsfsd@wp.lp",
        rate: 2
    },{
        date: "2.02.1231",
        opinion: "Lorem ipsum dolor sit amet consectetur. Eleifend id condimentum sed iaculis hendrerit eu quam. Condimentum egestas tortor tincidunt pretium gravida a. Laoreet amet nec ut amet ornare id feugiat. Elementum rhoncus ac dictum.",
        email: "fsfsd@wp.lp",
        rate: 4.5
    }];

    return <div>
        <img className="plama2" src={plama2}/>
        <img className="plama" src={plama}/>
        <p className="Opinie" >Opinie</p>
        {
            data.map(el => <div className="Opinion-o">
                <p className="data1" >{el.date}</p>
                <p className="tekst" > {el.opinion}</p>
                <div className="rate-opinion">
                    <p className="Ocena2" style={{height: 19, width: 46 }}> Ocena</p>
                    <Rate
                        defaultValue={el.rate}
                        style={{fontSize: 30}}
                        allowHalf
                        tooltips={["źle", "słabo", "średnio", "dobrze", "bardzo dobrze"]}
                        className="rate2"
                        Showcopywriting={1}/>
                </div>
                <div className="wiersz-email" style={{height: 40, }}>
                    <p className="Email-opinia" > Email</p>
                    <p> <a className="mailto" href={"mailto:"+el.email}>{el.email}</a></p>
                </div>
            </div>)
        }





    </div>
}


