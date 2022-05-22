import * as React from 'react';
import '../style/blogs.css'

export default function Banner({imgUrl}:{imgUrl:string}) {
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
            <div 
            className='banner-img'
            id='bannerPic'
            style={{backgroundImage: `url(${imgUrl})`}}
            />
        </div>
    )
}