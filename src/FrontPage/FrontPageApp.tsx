import * as React from 'react';
import NavBar from './NavBar';
import Intro from './Intro';
import FrontContent from './FrontContent';
import { BrowserRouter ,Route } from 'react-router-dom';
import '../style/front.css';

function FrontPageApp() {
    return(
        <div className='fontpage-container'>
            <NavBar/>
            <Intro/>
            <FrontContent/>
        </div>
    )
}

export default FrontPageApp;