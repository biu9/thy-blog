import * as React from 'react';
import { useEffect,useState } from 'react';


async function fetchUserInfo():Promise<any> {
    const res = await fetch('https://api.github.com/users/biu9',{
        method: 'get',
    }).then(res => res.json());
    localStorage.setItem('userInfo',JSON.stringify(res));
    localStorage.setItem('userInfoSaveTime',new Date().getTime().toString());
    return res;
}

/**
 * @description 判断localstroage中的userInfo是否过期
 * @returns 
 */
function ifExpired():boolean {
    const EXPIRE_TIME = 60 * 60 * 24 * 7;
    const userInfo = localStorage.getItem('userInfo');
    const userInfoSaveTime = localStorage.getItem('userInfoSaveTime');
    if(!userInfo || !userInfoSaveTime)
        return true;
    else if(userInfo && userInfoSaveTime) {
        const now = new Date().getTime();
        const saveTime = parseInt(userInfoSaveTime);
        if(now - saveTime > EXPIRE_TIME)
            return true;
        else
            return false;
    }
    return true;
}

function Intro() {
    let myImage = "";
    let myName = "";
    if(ifExpired()) {
        const userInfo = fetchUserInfo();
        userInfo.then(res => {
            myImage = res.avatar_url;
            myName = res.name;
        })
    } else {
        const userInfo = localStorage.getItem('userInfo');
        if(userInfo) {
            let userInfoObj = JSON.parse(userInfo);
            myImage = userInfoObj.avatar_url;
            myName = userInfoObj.name;
        }
    }
    return(
        <div className='intro-container'>
            <div className='intro-decroation-circle'></div>
            <div className='intro-bg'>
            <div className='intro-left'>
                <img className='intro-pic' src={myImage} alt="加载中...">

                </img>
                <h3 className='intro-name'>
                    {myName}
                </h3>
                <div className='intro-relate'>
                    ZJU / EE / 大二
                </div>
            </div>
            <div className='intro-right'>
                <h1 className='intro-right-title'>
                Biography
                </h1>
                <div className='intro-right-content'>
                👋 Hi, I'm @biu9,a student studying in ZheJiang university
                </div>
                <div className='intro-right-content'>
                👀 I'm interested in web development
                </div>
                <div className='intro-right-content'>
                🌱 I'm currently learning React and TypeScript
                </div>
                <div className='intro-right-content'>
                💞️ I'm looking to collaborate on develop a awesome web site
                </div>
                <div className='intro-right-content'>
                📫 How to reach me: 1756127061@qq.com                
                </div>
            </div>
            </div>
        </div>
    )
}

export default Intro;