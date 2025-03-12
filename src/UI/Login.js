import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import ErrorAlert from "./Error";

const Login = () => {
    const [id, setUserID] = useState('')
    const [error, setError] = useState(false);

    const navigate = useNavigate()

    const onButtonClick = () => {
        axios.post('https://api.example.com/data', { userId:id, })
            .then(response => {
                setError(false);
                navigate('/home')
            })
            .catch(error => {
                setError(true);
            });
    }

    return (
        <div className={'mainContainer'}>
                <div className={'bounce-text'}>Welcome to YEA Fitness</div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={id}
                    placeholder="Enter your ID"
                    onChange={(ev) => setUserID(ev.target.value)}
                    className={'inputBox'}
                    onFocus={()=>setError(false)}
                />
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
            </div>
            <ErrorAlert message='Bu ID ile sistemimizde bir kullanıcı bulunamamıştır. Lütfen tekrar deneyin.' isVisible={error}/>
        </div>
    )
}

export default Login