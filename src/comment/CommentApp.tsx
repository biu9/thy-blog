import * as React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import '../style/comment.css'

function CommentApp() {
    return(
        <div className='CommentApp-container'>
            <CommentInput/>
            <CommentList/>
        </div>
    )
};

export default CommentApp;