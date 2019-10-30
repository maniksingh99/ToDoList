import React from 'react';
// import {connect} from 'react-redux';
export const Edit=(props)=>{
    console.log('Item to be edited...........',props.item);
    var obj1={};
    // console.log('onj1%%%%%%%',obj1);
    return(
        <div>
        <h1>Edit Expenses</h1>
        <div className='form-group'>
           <label>Expense</label>
           <input onChange={props.editValue} id='expense' className='form-control' type='text' defaultValue={props.item.expense}></input>
        </div>
        <div className='form-group'>
           <label>Desc</label>
           <input onChange={props.editValue} id='desc' className='form-control' type='text'  defaultValue={props.item.desc}></input>
        </div>
        <div className='form-group'>
           <label>Amount</label>
           <input onChange={props.editValue} id='amt' className='form-control' type='text' defaultValue={props.item.amt}></input>
        </div>
        <div className='form-group'>
           <label>Paid</label>
           &nbsp;
           <input onChange={props.editValue} type='radio' id='msg' name='paidexpense' value='paid' className='form-group'></input>
        </div>
        <div className='form-group'>
           <label>Not Paid</label>
           &nbsp;
           <input onChange={props.editValue} type='radio' id='msg' name='paidexpense' value='notpaid' className='form-group'></input>
        </div>
        <button className='btn btn-primary' onClick={()=>{props.update()}}>UPDATE</button>
        &nbsp;&nbsp;        
        </div>
    )
}


// const mapStateToProps=(state)=>{
//     console.log('Central State Object',state.obj);
//     return{
//         obj:state.obj,
//         arr:state.arr
//     }
// }

// const fn=connect(mapStateToProps);
// export default fn(Edit);