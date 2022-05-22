import * as React from 'react';
import NavBar from '../FrontPage/NavBar';
import Banner from '../blogs/Banner';
import PageBottom from '../PageBottom/PageBottom';
import TagedBlogs from './TagedBlogs';



export default function TagedBlog({tag}: {tag: string}) {

    const IMG_URL_1 = 'https://typora-1309407228.cos.ap-shanghai.myqcloud.com/78216842_p0_master1200.jpg';
    const IMG_URL_2 = 'https://typora-1309407228.cos.ap-shanghai.myqcloud.com/78216842_p5_master1200.jpg';
    const IMG_URL_3 = 'https://typora-1309407228.cos.ap-shanghai.myqcloud.com/ri.jpg';
    const IMG_URL_4 = 'https://typora-1309407228.cos.ap-shanghai.myqcloud.com/dqjqh5rp.jpg';
    const IMG_URL_5 = 'https://typora-1309407228.cos.ap-shanghai.myqcloud.com/97107616_p0_master1200.jpg';

    let imgs = new Array(IMG_URL_1 ,IMG_URL_2, IMG_URL_3,IMG_URL_4 ,IMG_URL_5);

    let index = Date.now() % 5;
    return(
        <div>
            <NavBar/>
            <Banner
            imgUrl= {imgs[index]}
            />
            <TagedBlogs 
            tag={tag}/>
            <PageBottom/>
        </div>
    )
}