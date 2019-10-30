import React from 'react';

export const Login=(props)=>{
    return(
        <div>
            <h1>Login</h1>
            <div className='form-group'>
                <label>UserId:</label>
                <input onChange={props.userInput} id='userid' type='text' className='form-control' placeholder='Enter the username'></input>
            </div>
            {/* <div className='form-group'>
                <label>Email:</label>
                <input id='email' type='email' className='form-control' placeholder='Enter the username'></input>
            </div> */}
            <div className='form-group'>
                <label>Password:</label>
                <input onChange={props.userInput} id='password' type='password' className='form-control' placeholder='Enter the password'></input>
            </div>
            <button className="btn btn-primary" onClick={()=>{props.login()}}>Login</button>
        </div>
    )
}