import React from 'react';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import './color.css';
import {connect} from 'react-redux';
 const Output=(props)=>{
     console.log('Props rec ',props);
    return(
        <div>                       
            {/* <script src="https://kit.fontawesome.com/a7f931c5cf.js"></script> */}
            <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>S.No</th>    
                    <th>Expense</th>
                    <th>Desc</th>
                    <th>Amount</th>
                    <th>Operations</th>
                    
                    </tr>
                </thead>
                    <tbody>
                        {props.arr.map((ele,index)=>{
                            
                           return (<tr key={index} className={ele.msg=='paid'?'green':'red'}> 
                                <td>{index+1}</td>
                                <td>{ele.expense}</td>
                                <td>{ele.desc}</td>
                                <td>{ele.amt}</td>
                                <td><span onClick={()=>{props.delete(ele)}}><i className="fas fa-trash"  ></i> </span> 
                                <span ><i className="fas fa-edit" onClick={()=>{props.edit(ele)}}></i></span></td>
                            </tr> )
                            
                        })}
                         
                        
                        
                    </tbody>
                
                
            </table>
            <button className="btn btn-danger" onClick={()=>{props.clear(props.arr)}}>ClearList</button>
        </div>
    )
}

// export const clear=(props)=>{
//     console.log('Clear array...................................',props.arr);
    
// }

const mapStateToProps=(state)=>{
    console.log("Central State object",state.arr);
    return{
        
        arr:state.arr 
        

        // data1:arr1.expense,
        // data2:arr1.desc,
        // data3:arr1.amt'
        }
    

}
console.log("Hello");  
const fn=connect(mapStateToProps);
export default fn(Output);