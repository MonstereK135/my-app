import logo from './logo.svg';
import plama1 from './Plama1.png';
import './App.css';
import {Button, Space} from 'antd';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from './pages/Home';
import {ThankYouPage} from './pages/ThankYouPage';
import {Opinion} from "./pages/Opinion";
import React from "react";

function App() {

    const router = createBrowserRouter([
        {
            path: "74e9d7a5-c6c1-41f2-8abf-6a0b49f14b6d",
            element: <Home/>,
        },
        {
            path: "thank-you/74e9d7a5-c6c1-41f2-8abf-6a0b49f14b6d",
            element: <ThankYouPage/>,
        },
        {
            path: "opinions/74e9d7a5-c6c1-41f2-8abf-6a0b49f14b6d",
            element: <Opinion/>
        },
    ]);

    return (
        <RouterProvider router={router}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Hello World !!!!!!!!!!!!!
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"


                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={plama1} className="App-plama" alt="plama"/>

                    </a>
                </header>
                <Button type="dashed">przejdz dalej</Button>
            </div>
        </RouterProvider>
    );
}

export default App;
