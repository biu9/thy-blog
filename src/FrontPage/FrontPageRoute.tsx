import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPageApp from './FrontPageApp';
import BlogApp from '../blog-page/BlogApp';
import ShowBlogs from '../blogs/ShowBlogs';
import Home from '../home/Home';
import TagedBlog from '../tag-page/TagedBlog';
import ProjectApp from '../project-page/ProjectApp';
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
    let uniquedTags = new Array();
    uniquedTags = posts.map(item => item.tags);
    uniquedTags = unique(uniquedTags);
    //console.log("用于创建路由的参数:", uniquedTags);

    posts.map(item => {
        params.push(JSON.stringify({
            path: '/' + item.id,
            title: item.title,
            time: item.time,
            content: item.content,
            tags: item.tags,
            id: item.id,
        }))
    });
    //console.log("params", params);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FrontPageApp />} />
                <Route path='/blogs' element={<ShowBlogs />} />
                <Route path='/home' element={<Home />} />
                <Route path='/projects' element={<ProjectApp />} />
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
                                blogId={JSON.parse(item).id}
                            />}
                        />
                    )
                })}
                {
                    uniquedTags.map(item => {
                        return(
                            <Route
                                path={'/tags/' + item}
                                element={<TagedBlog tag={item} />}
                            />
                        )
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

/**
 * 数组去重
 */
 function unique(arr: string[]) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        }
    }
    return Array.from(map.keys());
}

export default FrontPageRoute;