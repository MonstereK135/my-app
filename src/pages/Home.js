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
            <img className="company-logo" src={logo}/>
            <div className="wszystko">
                <p className="miejsce-na-opinie">To jest miejsce w którym możesz zostawić swoją opinię i nas ocenić</p>
                <TextArea
                    classname="area-opinia"
                    showCount
                    maxLength={120}
                    style={{height: 140, marginBottom: 20,width: "100%" }}
                    onChange={() => console.log('test')}
                    placeholder="Opinia.."
                />
                <p className="Ocena">Ocena:</p>
                <Rate

                    style={{fontSize: 40}}
                    allowHalf
                    tooltips={["źle", "słabo", "średnio", "dobrze", "bardzo dobrze"]}
                    className="rate"
                    Showcopywriting={1}/>
               {/* <p className="Ocena">Ocena</p>*/}
                <p className="tAdres-email">Adres email</p>
                <Form.Item
                    className="email"
                    rules={[{type: 'email'}]}>
                    <Input
                        className="input"
                        placeholder="Email"
                        style={{size: 5, height: 50, width: "100%"}}
                    />
                </Form.Item>
                <p className="tAdres-e-wymagany">Adres e-mail nie jest wymagany</p>
                <Checkbox
                    className="checkbox"
                >Kontynuując, wyrażasz zgodę na warunki opisane w dokumencie Warunki korzystania z serwisu i potwierdzasz
                    zapoznanie się z dokumentem Polityka prywatności
                </Checkbox>
                <Button
                    color="#022B3A"
                    className="buttom"
                    type="primary"
                    style={{width: "100%"}}
                >Wyślij</Button>
            </div>

        </div>
  {/*      <Form.Item
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
        <p className="miejsce-na-opinie">To jest miejsce w którym możesz zostawić swoją opinię i nas ocenić</p>
        <p className="Ocena">Ocena</p>
        <p className="Adres-email">Adres email</p>
        <p className="Adres-e-wymagany">Adres e-mail nie jest wymagany</p>
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
            Showcopywriting={1}/>*/}
    </div>
}