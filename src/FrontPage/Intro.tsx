import * as React from 'react';
import { useEffect,useState } from 'react';

function Intro() {
    let [myImage, setMyImage] = useState('');
    let [myName, setMyName] = useState('');
    useEffect(() => {
        fetch('https://api.github.com/users/biu9',{
            method: 'GET',
        }).then(res => res.json()).then(data => {
            setMyImage(data.avatar_url);
            setMyName(data.name);
        })
    },[]);
    //console.log("name:",myName);
    //console.log("image:",myImage);
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