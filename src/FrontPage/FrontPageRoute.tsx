import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPageApp from './FrontPageApp';
import BlogApp from '../blog-page/BlogApp';
import ShowBlogs from '../blogs/ShowBlogs';
import { useEffect, useState } from 'react';

function FrontPageRoute() {
    var params = new Array();

    var [posts, setPosts] = useState<any[]>([]);
    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:1234/api/getPosts', {
                method: 'get',
            }).then(res => res.json());
            setPosts(response.data);
        })();
    }, []);
    //console.log("用于创建路由的参数:", posts);
    posts.map(item => {
        params.push(JSON.stringify({
            path: '/' + item.id,
            title: item.title,
            time: item.time,
            content: item.content,
            tags: item.tags,
        }))
    });
    //console.log("params", params);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FrontPageApp />} />
                <Route path='/blogs' element={<ShowBlogs />} />
                {params.map(item => {
                    //console.log(JSON.parse(item).path);
                    return (
                        <Route
                            path={JSON.parse(item).path}
                            element={<BlogApp 
                                title={JSON.parse(item).title}
                                time={JSON.parse(item).time}
                                content={JSON.parse(item).content}
                                tags={JSON.parse(item).tags}
                                key={JSON.parse(item).id}
                            />}
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default FrontPageRoute;