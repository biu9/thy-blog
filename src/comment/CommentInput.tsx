import * as React from 'react';
import { useState } from 'react';
import '../style/comment.css'


function CommentInput() {
    const [userName, setUserName] = useState('');
    const [content, setContent] = useState('');

    function handleUserNameChange(e:React.ChangeEvent<HTMLInputElement>):void {
        //console.log(e.target.value);
        setUserName(e.target.value);
    }

    function handleContentChange(e:React.ChangeEvent<HTMLTextAreaElement>):void {
        //console.log(e.target.value);
        setContent(e.target.value);
    }

    function handleSubmit() {
        var result = JSON.stringify({
            "userName": userName,
            "content": content
        });
        if(userName === '' || content === '') {
            alert('请输入用户名和评论内容');
            return;
        }
        fetch('http://localhost:1234/api/post',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: result
        });
        //console.log(result);
    }

    return(
        <div className='comment-input-container'>
            <div className='comment-input'>
            <div className='comment-header'>
                <div className='comment-header-left'>
                    姓名:
                </div>
                <input 
                className='comment-header-right' 
                type='text'
                placeholder='请输入你的名字'
                onChange={handleUserNameChange}/>
            </div>
            <div className='comment-body'>
                <div className='comment-body-left'>
                    内容:
                </div>
                <textarea 
                className='comment-body-right' 
                onChange={handleContentChange}
                placeholder='请输入你的评论'/>
            </div>
            <div className='submit'>
                <button className='submit-btn'
                onClick={handleSubmit}>
                    提交
                </button>
            </div>
            </div>
        </div>
    )
};

export default CommentInput;