import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../FrontPage/Post';

export default function TagedBlogs({tag}: {tag: string}) {
    let [posts, setPosts] = useState<any[]>([]);
    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:1234/api/getPosts/${tag}`, {
                method: 'get',
            }).then(res => res.json());
            setPosts(response.data);
        })();
    },[]);

    return(
        <div className='front-content-bg'>
            <div className='front-content-container'>
                <div className='front-content-left'>
                    <div className='front-content-left-title'>
                        {posts.map(item => {
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
            </div>
        </div>
    )
}