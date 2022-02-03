import React from 'react'

import './styles/global.scss'
import { Banner } from './components/banner/Banner'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <ToastContainer 
                hideProgressBar={false}
                autoClose={1000}
                position="top-left"
            />
            <Banner />
        </div>
    );
}

export default App;
