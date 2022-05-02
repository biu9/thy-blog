import * as React from 'react';

export interface CommentProps {
    name: string;
    content: string;
}

function Comment(props: CommentProps) {
    return(
        <div className='comment-container'>
            <div className='comment-name'>
                {props.name}
            </div>
            <div className='comment-content'>
                {props.content}
            </div>
        </div>
    )
}

export default Comment;