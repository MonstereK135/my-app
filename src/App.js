import logo from './logo.svg';
import './App.css';
import { Button, Space } from 'antd';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from './pages/Home';
import {Thank} from './pages/thank';
import React from "react";
function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <div>
                    <h1>Hello World</h1>
                </div>
            ),
        },
        {
            path: "dupa",
            element: <Home/>,
        },
        {
            path: "Thanksyou",
            element: <Thank/>,
        },
    ]);

  return (
      <RouterProvider router={router} >
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World !!!!!!!!!!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <Button type="dashed">przejdz dalej</Button>
    </div>
      </RouterProvider>
  );
}

export default App;
