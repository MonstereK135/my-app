import logo from './logoo.png';
import plama2 from './plamabottom.png';
import plama from './plamatop.png';
import React from 'react';
import {Rate} from 'antd';
import TextArea from "antd/es/input/TextArea";
import {Button, Form, Input,} from 'antd';
import {Checkbox} from 'antd';
import './Home.css';

export const Home = () => {

    return <div>
        <img className="plama2" src={plama2}/>
        <img className="plama" src={plama}/>
        <div className="Home-logo">
            <img src={logo}/>
            <TextArea
                className="opinion"
                showCount
                maxLength={120}
                style={{height: 140, marginBottom: 20, width: 358}}
                onChange={() => console.log('test')}
                placeholder="Opinia.."
            />
        </div>
        <Form.Item
            className="email"
            rules={[{type: 'email'}]}>
            <Input
                className="input"
                placeholder="Email"
                style={{size: 5, height: 50, width: 358}}
            />
            [</Form.Item>
        <Button
            color="#022B3A"
            className="buttom"
            type="primary"
        >Wyślij</Button>
        <p className="p">To jest miejsce w którym możesz zostawić swoją opinię i nas ocenić</p>
        <p className="p1">Ocena</p>
        <p className="p2">Adres email</p>
        <p className="p3">Adres e-mail nie jest wymagany</p>
        <Checkbox
            className="checkbox"
        >Kontynuując, wyrażasz zgodę na warunki opisane w dokumencie Warunki korzystania z serwisu i potwierdzasz
            zapoznanie się z dokumentem Polityka prywatności
        </Checkbox>
        <Rate
            style={{fontSize: 30}}
            allowHalf
            tooltips={["źle", "słabo", "średnio", "dobrze", "bardzo dobrze"]}
            className="rate"
            Showcopywriting={1}/>
    </div>
}