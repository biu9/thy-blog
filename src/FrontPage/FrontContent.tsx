import * as React from 'react';
import Post from './Post';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FrontContent() {

    var [posts, setPosts] = useState<any[]>([]);
    let tags = new Array();
    let uniqueTags = new Array();
    let postNumber = 0;
    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:1234/api/getPosts', {
                method: 'get',
            }).then(res => res.json());
            setPosts(response.data);
        })();
    }, []);
    tags = posts.map(item => item.tags)
    uniqueTags = unique(tags);

    return (
        <div className='front-content-bg'>
            <div className='front-content-container'>
                <div className='front-content-left'>
                    <div className='front-content-left-title'>
                        <h1>
                            Recent post
                        </h1>
                        {posts.map(item => {
                            postNumber++;
                            if (postNumber <= 3)
                                return (
                                    <Link to={'/' + item.id} className='post-link'>
                                        <Post
                                            title={item.title}
                                            time={item.time}
                                            content={item.content}
                                            key={item.id}
                                            tags={item.tags}
                                        />
                                    </Link>)
                        })}
                    </div>
                </div>
                <div className='fron-content-right'>
                    <h1>
                        tags
                    </h1>
                    <ul>
                        {
                            uniqueTags.map(item => {
                                return (
                                    <li>
                                        <Link to={'/tags/' + item}>
                                            {item}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

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

export default FrontContent;