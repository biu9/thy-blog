import * as React from 'react';
import '../style/blogs.css';
import NavBar from '../FrontPage/NavBar';
import Banner from './Banner';
import Blogs from './Blogs';

function ShowBlogs() {
    return(
        <div>
            <NavBar/>
            <Banner/>
            <Blogs/>
        </div>
    )
};

export default ShowBlogs;