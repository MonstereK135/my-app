import serce from './serce.png';
import plama from './plamatop.png';
import plama2 from './plamabottom.png';
import logo from './logoo.png';
import React from 'react';
import './ThankYouPage.css';

export const ThankYouPage = () => {
    return <div>
        <img className="serce" src={serce}/>
        <img className="plama" src={plama}/>
        <img className="plama2" src={plama2}/>
        <p className="p"> Dziękujemy!!</p>
        <p className="p1">Twoja opinia została wysłana </p>
        <p className="p2"> Istnieje możliwość, że wkrótce skontaktujemy się z Tobą drogą mailową,
            aby poinformować Cię o nadchodzących promocjach.</p>

    </div>
}