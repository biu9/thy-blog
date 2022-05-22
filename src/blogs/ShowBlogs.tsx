import * as React from 'react';
import '../style/blogs.css';
import NavBar from '../FrontPage/NavBar';
import Banner from './Banner';
import Blogs from './Blogs';
import PageBottom from '../PageBottom/PageBottom';
function ShowBlogs() {
    return(
        <div>
            <NavBar/>
            <Banner
            imgUrl='https://typora-1309407228.cos.ap-shanghai.myqcloud.com/78216842_p0_master1200.jpg'
            />
            <Blogs/>
            <PageBottom/>
        </div>
    )
};

export default ShowBlogs;