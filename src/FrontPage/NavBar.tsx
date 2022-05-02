import * as React from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/nav-modal.css';


async function handleLogin({ userName, passWord }: { userName: string, passWord: string }) {
    const postData = JSON.stringify({
        "userName": userName,
        "password": passWord
    });
    const response = await fetch('http://localhost:1234/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: postData,
    }).then(res => res.json());
    //console.log(response.code);
    return response;
}

function NavBar() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const homeBtn = document.getElementById('home');
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            setOpen(true);
        })
    }

    function handleUsername(e: React.ChangeEvent<HTMLInputElement>): void {
        setUserName(e.target.value);
        //console.log("username:",userName);
    }
    function handlePassword(e: React.ChangeEvent<HTMLInputElement>): void {
        setPassword(e.target.value);
        //console.log("password:",password);
    }

    return (
        <>
            <Modal
                open={open}
            >
                <div className='modal-container'>
                    <div className='modal-words'>请先登录</div>
                    <TextField
                        className="modal-input"
                        label="user name"
                        variant='filled'
                        onChange={handleUsername} />
                    <TextField
                        className="modal-input"
                        label="password"
                        variant='filled'
                        onChange={handlePassword} />
                    <Button
                        variant='contained'
                        className='modal-btn'
                        id="submitBtn"
                        onClick={() => {//原来react里面组件更新时候挂载的事件监听函数不会移除?
                            setOpen(false);
                            const loginRes = handleLogin({ userName: userName, passWord: password });
                            (async()=>{
                                const res = await loginRes;
                                if (res.code === 200) {
                                    navigate('/blogs');
                                } else {
                                    navigate('/');
                                }
                            })();
                        }}
                    >
                        submit
                    </Button>
                </div>
            </Modal>
            <div className='navbar-container'>
                <div className='navbar-left'>
                    <Link to='/' className='nav-link'>
                        thy's blog
                    </Link>
                </div>
                <div className='navbar-right'>
                    <div className='navbar-right-item' id='home'>
                        home
                    </div>
                    <div className='navbar-right-item'>
                        projects
                    </div>
                    <div className='navbar-right-item'>
                        <Link to='/blogs' className='nav-link'>
                            blogs
                        </Link>
                    </div>
                    <div className='navbar-right-item'>
                        more
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;