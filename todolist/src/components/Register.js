import React from 'react';

export const Register=(props)=>{
    return(
        <div>
            <h1>Register</h1>
            <div className='form-group'>
                <label>UserName:</label>
                <input onChange={props.userInput} id='username' type='text' className='form-control' placeholder='Enter the username'></input>
            </div>
            <div className='form-group'>
                <label>UserId:</label>
                <input onChange={props.userInput} id='userid' type='text' className='form-control' placeholder='Enter the username'></input>
            </div>
            <div className='form-group'>
                <label>Email:</label>
                <input onChange={props.userInput} id='email' type='email' className='form-control' placeholder='Enter the username'></input>
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input onChange={props.userInput} id='password' type='password' className='form-control' placeholder='Enter the password'></input>
            </div>
            <button className="btn btn-primary" onClick={()=>{props.register()}}>Register</button> 
        </div>
    )
}