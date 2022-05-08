import NavBar from "../FrontPage/NavBar";
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { TextField, Button } from "@mui/material";
import '../style/home.css'

function getToken(exp: number): Boolean {
    const data1 = localStorage.getItem('token');
    if (!data1) {
        return false;
    } else {
        const data = JSON.parse(data1);
        if (data.time + exp < new Date().getTime()) {
            return false;
        } else {
            return true;
        }
    }
}

function useComponentWillMount(func: Function) {
    const ref = useRef(true);
    if (ref.current) {
        func();
        ref.current = false;
    }
}

function uploadDataFunc(data:any) {
    fetch('http://localhost:1234/api/uploadBlog', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: data
    });
}

export default function Home() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [content, setContent] = useState('');
    const [tag, setTag] = useState('');
    if (!getToken(1000 * 60 * 60 * 24)) {
        //本来想做到如果没有登录先弹窗再跳转回首页
        //但是由于useNavigate()有点奇怪?
        //在component will mount的时候判断的话不会跳转回去，推测是路由重定向的优先级问题？
        //可能是先重定向到了'/'，再重定向回了'/home'?
        //而且alert会出现两次，第二次出现后才会跳转回首页(指不加willmount钩子的时候)
        navigate('/');
    }

    function handleTitle(e: React.FocusEvent<HTMLInputElement>): void {
        setTitle(e.target.value);
    }

    function handleTime(e: React.FocusEvent<HTMLInputElement>): void {
        setTime(e.target.value);
    }

    function handleContent(e: React.FocusEvent<HTMLTextAreaElement>): void {
        setContent(e.target.value);
    }

    function handleTag(e: React.FocusEvent<HTMLInputElement>):void {
        setTag(e.target.value);
    }

    function handleSubmit() {
        const uploadData = JSON.stringify({
            "title": title,
            "time": time,
            "content": content,
            "tag": tag,
        });
        uploadDataFunc(uploadData);
        console.log(uploadData);
        alert('上传成功');
        setContent('');
        setTitle('');
        setTime('');
        setTag('');
    }

    return (
        <div className="home-container">
            <NavBar />
            <div className="input-container">
                <TextField
                    className="home-title"
                    label="标题"
                    variant="filled"
                    onBlur={handleTitle}
                />
                <TextField
                    className="home-time"
                    label="时间"
                    variant="filled"
                    onBlur={handleTime}
                />
                <TextField
                className="home-tag"
                label="标签"
                variant="filled"
                onBlur={handleTag}
                />
                <textarea
                className="home-content"
                placeholder="内容"
                onBlur={handleContent}
                />
                <Button
                    className="home-submit"
                    variant="contained"
                    onClick={handleSubmit}
                >提交</Button>
            </div>
        </div>
    )
}