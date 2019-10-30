import React from 'react';
import {NavLink} from 'react-router-dom';
export const Header=(props)=>{
    if(props.isAuthenticated){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <div className='collpase navbar-collapse'>
                <ul className="navbar-nav mr-auto">
                    <li className='navbar-item'>
                        <NavLink exact activeClassName="active" to="/">Input</NavLink>
                    </li>
                     &nbsp;&nbsp;
                    <li className='navbar-item'>
                        <NavLink  activeClassName="active" to="/output">Output</NavLink>
                    </li>
                    &nbsp;&nbsp;
                    <li className='navbar-item'>
                        <NavLink activeClassName="active" to="/edit">Edit</NavLink>
                    </li>
                     &nbsp;&nbsp;                    
                </ul>
              </div>
            </nav>
        )
    }
    else{
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className='collpase navbar-collapse'>
                    <ul className="navbar-nav mr-auto">
                    <li className='navbar-item'>
                        <NavLink activeClassName="active" to="/register">Register</NavLink>
                    </li>
                    &nbsp;&nbsp;
                    <li className='navbar-item'>
                        <NavLink activeClassName="active" to="/login">Login</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
    // return(
    //     // <div>
    //     //     <NavLink exact activeClassName="active" to="/">Input</NavLink>
    //     //     &nbsp;&nbsp;
    //     //     <NavLink  activeClassName="active" to="/output">Output</NavLink>
    //     //     &nbsp;&nbsp;
    //     //     <NavLink activeClassName="active" to="/edit">Edit</NavLink>
    //     // </div>

    //         <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    //             <div className='collpase navbar-collapse'>
    //                 <ul className="navbar-nav mr-auto">

    //                     <li className='navbar-item'>
    //                     <NavLink exact activeClassName="active" to="/">Input</NavLink>
    //                     </li>
    //                     &nbsp;&nbsp;
    //                     <li className='navbar-item'>
    //                     <NavLink  activeClassName="active" to="/output">Output</NavLink>
    //                     </li>
    //                     &nbsp;&nbsp;
    //                     <li className='navbar-item'>
    //                     <NavLink activeClassName="active" to="/edit">Edit</NavLink>
    //                     </li>
    //                     &nbsp;&nbsp;
    //                     <li className='navbar-item'>
    //                     <NavLink activeClassName="active" to="/register">Register</NavLink>
    //                     </li>
    //                     &nbsp;&nbsp;
    //                     <li className='navbar-item'>
    //                     <NavLink activeClassName="active" to="/login">Login</NavLink>
    //                     </li>
                        
    //                 </ul>
    //             </div>
    //         </nav>
    // )
}