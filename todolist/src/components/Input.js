import React from 'react';

export const Input=(props)=>{
    return(  
    <div>
        <h1>Add Expenses</h1>
        <div className='form-group'>
           <label>Expense</label>
           <input onChange={props.takeValue} id='expense' type='text' className='form-control' placeholder='Type of Expense'></input>
        </div>
        <div className='form-group'>
           <label>Desc</label>
           <input onChange={props.takeValue} id='desc' type='text' className='form-control' placeholder='Desc of Expense'></input>
        </div>
        <div className='form-group'>
           <label>Amount</label>
           <input onChange={props.takeValue} id='amt' type='text' className='form-control' placeholder='Amount'></input>
        </div>
        
        <div className='form-group'>
           <label>Paid</label>
           &nbsp;
           <input onChange={props.takeValue} type='radio' id='msg' name='paidexpense' value='paid' className='form-group'></input>
        </div>
        <div className='form-group'>
           <label>Not Paid</label>
           &nbsp;
           <input onChange={props.takeValue} type='radio' id='msg' name='paidexpense' vlaue='notpaid' className='form-group'></input>
        </div>
        
        <button className="btn btn-primary" onClick={props.save}>ADD</button>     
    </div>
    )
}