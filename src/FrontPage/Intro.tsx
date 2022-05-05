import * as React from 'react';

function Intro() {
    return(
        <div className='intro-container'>
            <div className='intro-decroation-circle'></div>
            <div className='intro-bg'>
            <div className='intro-left'>
                <div className='intro-pic'>
                </div>
                <h3 className='intro-name'>
                    thy
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