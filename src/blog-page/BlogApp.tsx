import * as React from 'react';
import NavBar from '../FrontPage/NavBar';
import CommentApp from '../comment/CommentApp';
import '../style/blog.css';
import PageBottom  from '../PageBottom/PageBottom';

var Markdown = require('react-remarkable');

interface BlogProps {
    "title": string;
    "time": string;
    "content": string;
    "tags": string[];
    "blogId":string;
}

function BlogApp(props: BlogProps) {
    //console.log("content=====",(props.content));
    return (
        <div className='blog-container-bg'>
            <NavBar />
            <div className='blog-container'>
                <h1 className='blog-title'>
                    {props.title}
                </h1>
                <p className='blog-detail'>
                    | {props.time} | {props.tags} |
                </p>
                <p className='blog-content'>
                    <Markdown>
                    {props.content}
                    </Markdown>
                </p>
            </div>
            <CommentApp
            blogId={props.blogId}
            />
            <PageBottom/>
        </div>
    )
};

export default BlogApp;