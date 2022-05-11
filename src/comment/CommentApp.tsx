import * as React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { useState } from 'react';
import '../style/comment.css'

function CommentApp({ blogId }: { blogId: string }) {
    const [submitComment, setSubmitComment] = useState(0);
    function updateComment() {
        setSubmitComment(submitComment => submitComment + 1);
        alert("评论成功");
    }
    console.log(submitComment);
    return (
        <div className='CommentApp-container'>
            <h1>
                Comments
            </h1>
            <div className='comment-app-input-container'>
            <CommentInput 
            blogId={blogId}
            />
            </div>
                <CommentList 
                blogId={blogId}
                />
        </div>
    )
}

export default CommentApp;