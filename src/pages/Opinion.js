import React, {useEffect, useState} from 'react';
import plama2 from './plamabottom.png';
import plama from './plamatop.png';
import './Opinion.css';
import { collection, getDocs } from 'firebase/firestore';
import {Rate} from "antd";
import {db} from "./firebase";
export const Opinion = () => {
    const [opinions,setOpinions]=useState([])

    useEffect(()=>{
        (async () => {
            const opinionsCol = collection(db, 'opinions');
            const opinionsSnapshot = await getDocs(opinionsCol);
            const opinionsList = opinionsSnapshot.docs.map(doc => doc.data());
            setOpinions(opinionsList)
        })()
    },[])
    return <div>
        <img className="plama2" src={plama2}/>
        <img className="plama" src={plama}/>
        <p className="Opinie" >Opinie</p>
        {
            opinions.map(el => <div className="Opinion-o">
                <p className="data1" >{el.date}</p>
                <p className="tekst" > {el.opinion}</p>
                <div className="rate-opinion">
                    <p className="Ocena2" style={{height: 19, width: 46 }}> Ocena</p>
                    <Rate
                        disabled
                        defaultValue={el.rate}
                        style={{fontSize: 30}}
                        allowHalf
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


