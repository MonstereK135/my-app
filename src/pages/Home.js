import { collection, addDoc } from "firebase/firestore";
import TextArea from "antd/es/input/TextArea";
import {Button, Form, Input,} from 'antd';
import plama2 from './plamabottom.png';
import React, {useState} from 'react';
import plama from './plamatop.png';
import logo from './logoo.png';
import {db} from "./firebase";
import {Checkbox} from 'antd';
import {Rate} from 'antd';
import './Home.css';

export const Home = () => {

const [email,setEmail]=useState("")
    const [opinion,setOpinion]=useState(null)
    const [hasOpinionError,setHasOpinionError]=useState(false)
    const [checkbox,setCheckbox]=useState(false)
    const [hasCheckboxError,setHasCheckboxError]=useState(false)
    const [rate,setRate]=useState(0);

    return <div>
        <img className="plama2" src={plama2}/>
        <img className="plama" src={plama}/>
        <div className="Home-logo">
            <img className="company-logo" src={logo}/>
            <div className="wszystko">
                <p className="miejsce-na-opinie">To jest miejsce w którym możesz zostawić swoją opinię i nas ocenić</p>
                <TextArea
                    style={{height: 140, marginBottom: 20,width: "100%" }}
                    status={hasOpinionError ? "error" : "default" }
                    volue={opinion}
                    classname="area-opinia"
                    placeholder="Opinia.."
                    maxLength={120}
                    showCount
                    onChange={(e)=>{
                        setOpinion(e.target.value)
                    }}
                    id="opinion"
                    name="opinion"
                    required
                />
                {
                    hasOpinionError && <div style={{ color: 'red' }}> Musisz przesłać opinie </div>
                }
                <div className="wysrodkowanie">
                    <p className="Ocena">Ocena</p>
                    <Rate
                        tooltips={["źła", "słaba", "średnia", "dobra", "bardzo dobra"]}
                        style={{fontSize: 40}}
                        className="rate"
                        volue={rate}
                        allowHalf
                        onChange={(e)=>{
                            setRate(e)
                        }}
                        id="rate"
                        name="rate"
                        required
                        Showcopywriting={1}/>
                </div>
                <p className="tAdres-email">Adres email</p>
                <Form.Item
                    className="email"
                    rules={[{type: 'email'}]}>
                    <Input
                        style={{size: 5, height: 50, width: "100%"}}
                        value={email}
                        className="input"
                        placeholder="Email"
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}

                    />
                </Form.Item>
                <p className="tAdres-e-wymagany">Adres e-mail nie jest wymagany</p>
                <Checkbox
                    onChange={(e)=>{
                        setCheckbox(e.target.checked)
                    }}
                    className={hasCheckboxError ? "checkbox checkbox-error" : "checkbox"}
                >Kontynuując, wyrażasz zgodę na warunki opisane w dokumencie Warunki korzystania z serwisu i potwierdzasz
                    zapoznanie się z dokumentem Polityka prywatności
                    {
                        hasCheckboxError && <div style={{ color: 'red'}}> Musisz wyrazić zgodę </div>
                    }
                </Checkbox>
                <Button
                    color="#022B3A"
                    className="buttom"
                    type="primary"
                    style={{width: "100%"}}
                    onClick={async ()=>{
                        let isFormValid = opinion && checkbox;

                        if(isFormValid) {
                            const docRef = await addDoc(collection(db, "opinions"), {
                                email,
                                opinion,
                                rate,
                                date: (new Date()).toLocaleDateString("en-US"),
                            });
                            window.location.href="/thank-you/74e9d7a5-c6c1-41f2-8abf-6a0b49f14b6d";
                        }
                        else {
                            if(!opinion) {
                                setHasOpinionError(true);
                            }
                            if(!checkbox) {
                                setHasCheckboxError(true);
                            }
                        }
                    }}
                >Wyślij</Button>


            </div>
        </div>
    </div>
}