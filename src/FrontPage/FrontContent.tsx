import * as React from 'react';
import Post from './Post';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function FrontContent() {

    var [posts, setPosts] = useState<any[]>([]);
    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:1234/api/getPosts', {
                method: 'get',
            }).then(res => res.json());
            setPosts(response.data);
        })();
    }, []);
    //console.log(posts);

    return (
        <div className='front-content-bg'>
            <div className='front-content-container'>
                <div className='front-content-left'>
                    <div className='front-content-left-title'>
                        <h1>
                            Recent post
                        </h1>
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
                <div className='front-content-right'>
                    <div className='front-content-right-title'>
                        <h2>

                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontContent;