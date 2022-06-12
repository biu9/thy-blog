import * as React from 'react';
import NavBar from '../FrontPage/NavBar';
import Banner from '../blogs/Banner';
import OneProject from '../project-page/OneProject';
import '../style/project-page.css';

export default function ProjectApp() {
    return(
        <div className='project-page-container'>
            <NavBar />
            <Banner imgUrl='https://typora-1309407228.cos.ap-shanghai.myqcloud.com/78216842_p2.jpg' />
            <OneProject/>
            <OneProject/>
            <OneProject/>
        </div>
    )
}