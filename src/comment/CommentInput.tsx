import * as React from 'react';
import { useState } from 'react';
import '../style/comment.css'


function CommentInput({blogId,setSubmitComment}: {blogId: string,setSubmitComment: any}) {
    const [userName, setUserName] = useState('');
    const [content, setContent] = useState('');

    function handleUserNameChange(e:React.ChangeEvent<HTMLInputElement>):void {
        setUserName(e.target.value);
    }

    function handleContentChange(e:React.ChangeEvent<HTMLTextAreaElement>):void {
        setContent(e.target.value);
    }

    function handleSubmit() {
        const domUserName = document.getElementById('userName') as HTMLInputElement;
        const domContent = document.getElementById('content') as HTMLInputElement;
        var result = JSON.stringify({
            "userName": userName,
            "content": content
        });
        if(userName === '' || content === '') {
            alert('请输入用户名和评论内容');
            return;
        }
        fetch(`http://localhost:1234/api/postComments/?id=${blogId}`,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: result
        });
        setSubmitComment();
        if(domUserName) {
            domUserName.value = '';
        }
        if(domContent) {
            domContent.value = '';
        }
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
                id='userName'
                onChange={handleUserNameChange}/>
            </div>
            <div className='comment-body'>
                <div className='comment-body-left'>
                    内容:
                </div>
                <textarea 
                className='comment-body-right' 
                id='content'
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