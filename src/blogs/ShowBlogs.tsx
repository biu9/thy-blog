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
            <Banner/>
            <Blogs/>
            <PageBottom/>
        </div>
    )
};

export default ShowBlogs;