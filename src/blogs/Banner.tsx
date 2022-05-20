import * as React from 'react';
import '../style/blogs.css'

export default function Banner() {
    return(
        <div className='banner-container'>
            <div className='banner-words'>
                <h1>
                These are my blogs
                </h1>
                <h2>
                    and also my life
                </h2>
            </div>
            <img 
            className='banner-img'
            src='https://typora-1309407228.cos.ap-shanghai.myqcloud.com/78216842_p0_master1200.jpg'/>
        </div>
    )
}