import * as React from 'react';
import NavBar from '../FrontPage/NavBar';
import Banner from '../blogs/Banner';
import OneProject from '../project-page/OneProject';
import PageBottom from '../PageBottom/PageBottom';
import '../style/project-page.css';

export default function ProjectApp() {
  const dataArray = require('./data.json');
  return (
    <div className='project-page-container'>
      <NavBar />
      <Banner imgUrl='https://typora-1309407228.cos.ap-shanghai.myqcloud.com/78216842_p2.jpg' />
      {
        dataArray.map((item:any, index:number) => {
          return (
            <OneProject
              key={index}
              title={item.title}
              imgUrl={item.imgUrl}
              description={item.description}
              jumpUrl={item.jumpUrl}
            />
          )
        })
      }
      <PageBottom/>
    </div>
  )
}