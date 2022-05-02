import * as React from 'react';


interface PostListProps {
    "title": string;
    "time": string;
    "content": string;
    "tags": string[];
}


export default function Post(props: PostListProps) {
    //console.log(props);
    return (
        <div className='post-container'>
            
            <div className='post-right'>
                <h2 className='post-title'>
                {props.title}
                </h2>
                <p className='post-detail'>
                    | {props.time} | {props.tags} |
                </p>
                <p className='post-content'>
                    {props.content}
                </p>
            </div>
        </div>
    )
}