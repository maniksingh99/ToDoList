import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input} from './components/Input';
import Output from './components/Output';
import {Edit} from './components/Edit';
import {Register} from './components/Register';
import {Login} from './components/Login';
import { store } from './models/store';
import {addActionCreator} from './models/actioncreators/addactioncreator';
import {Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Header} from './components/Header';
//import {Header1} from './components/Header1';
import {connect} from 'react-redux';
import * as firebase from 'firebase';
import {deleteActionCreator} from './models/actioncreators/deleteactioncreator';
import uuid from "uuid";
import axios from 'axios';
import {clearActionCreator} from './models/actioncreators/clearactioncreator';
import {editActionCreator} from './models/actioncreators/editactioncreator';
import {updateActionCreator} from './models/actioncreators/updateactioncreator';
import {addToDoArrayActionCreator} from './models/actioncreators/addactioncreator';
// import firebase from './utils/firebase';
// firebase.initializeApp(firebaseConfig);
// import {firebaseConfig} from './utils/firebase';


 class App extends React.Component{
  constructor(){
    super();
    this.obj={uid:uuid(),author:''};
    this.user={};
    this.state={obj:this.obj,editedItem:this.editedItem};
    //this.editedItem={id:uuid()};
    this.editItem={};
    this.arrayTodos=[];
    this.useridBackend='';//to store the author value from backend
    this.isAuthenticated=false;
    this.token='';
  }

  userInput(event){
    var key=event.target.id;
    var val=event.target.value;
    this.user[key]=val;
  }

  editInput(event){
    var key1=event.target.id;
    var val1=event.target.value;
    this.editItem[key1]=val1;
  }
  
  takeInput(event){
    var key=event.target.id;
    var val=event.target.value;
    this.obj[key]=val;
    // this.setState({obj:this.obj});
  } 

  add(){
    console.log("ADD cALL ", this.obj);
    this.obj.author=this.useridBackend._id;
    var action=addActionCreator(this.obj,'push');
    console.log('Add Call Action is ',action);
    store.dispatch(action);
    axios.post('http://localhost:5555/todo/add',this.obj)
    .then(res=>console.log(res.data));
    this.obj = {uid:uuid(),author:''};
  }
 
  delete(obj){
    console.log('Obj is........................',obj)
    var action=deleteActionCreator(obj,'delete');
    axios.delete('http://localhost:5555/todo/'+obj.uid)
    .then(res=>console.log(res.data));
    store.dispatch(action);
    
  }
  
  edit(obj){
    console.log('Id is........................',obj);
    var action=editActionCreator(obj,'edit');
    store.dispatch(action);
    this.editItem=obj;
    console.log('Edited Item is $$$$$$',this.editItem);
    this.setState({editItem:this.editItem})
    
  }

  update(){
    console.log('Update id is.............',this.editItem);
    var action=updateActionCreator(this.editItem,'update');
    store.dispatch(action);
    axios.post('http://localhost:5555/todo/update/'+this.editItem.uid,this.editItem)
    .then(res=>console.log(res.data));
    //this.editItem={};
  }


clear(array){
  console.log('Array is..............',array);
  var action=clearActionCreator(array,'clear');
  store.dispatch(action);
  axios.delete('http://localhost:5555/todo/clear/'+this.useridBackend._id)
  .then(res=>console.log(res.data))
}

addToDosArray(todoEle){
  console.log('Add Todo Element from backend',todoEle);
  var action=addToDoArrayActionCreator(todoEle,'pushToDoEle');
  store.dispatch(action);
}

register(){
  axios.post('http://localhost:5555/register',this.user)
  .then(res=>console.log(res.data));

//this.userFind();
// this.isAuthenticated=true;
// this.setState({isAuthenticated:this.isAuthenticated})
 }

login(){
  axios.post('http://localhost:5555/doLogin',this.user)
  .then(res=>{
    console.log(res.data); 
    //this.token=res.data.token;
   // console.log('Value of Token ',this.token);
  });

  this.userFind();
}

userFind(){
  axios.get('http://localhost:5555/user/find/'+this.user.userid)
  .then(res=>{
    this.useridBackend=res.data;
    console.log('Userid From Backend ',this.useridBackend);
    if(this.user.userid==this.useridBackend.userid){
      this.isAuthenticated=true;
      this.setState({isAuthenticated:this.isAuthenticated})
    }
    else{
      return(<h3>Wrong Userid Or Password</h3>)
    }
    this.todoFind();
  })
}

todoFind(){
  axios.get('http://localhost:5555/todo/data/'+this.useridBackend._id)
  .then(res=>{
    if(res.data.length>0){
      this.arrayTodos=res.data;

      console.log('Component did mount is working for todos',this.arrayTodos);
      //console.log('For loop Start');
      let num=res.data.length;
      console.log('Value of num  is ',num);
      for(let i=0;i<num;i++){
        let todoEle={expense:'',desc:'',amt:'',uid:'',msg:''};
        todoEle.expense=this.arrayTodos[i].expense;
        todoEle.desc=this.arrayTodos[i].desc;
        todoEle.amt=this.arrayTodos[i].amt;
        todoEle.uid=this.arrayTodos[i].uid;
        todoEle.msg=this.arrayTodos[i].msg;
        console.log('TODO element ',todoEle);
        this.addToDosArray(todoEle);
      }
      //console.log('For loop Ended');
    }
  })
  .catch(err=>console.log('Error occurres while retreving data',err))
}

// componentDidMount(){
//   axios.get('http://localhost:5555/todo/data')
//   .then(res=>{
//     if(res.data.length>0){
//       this.arrayTodos=res.data.map(ele=>ele);
//       console.log('Component did mount is working for todos',this.arrayTodos);
//       //console.log('For loop Start');
//       let num=res.data.length;
//       console.log('Value of num  is ',num);
//       for(let i=0;i<num;i++){
//         let todoEle={expense:'',desc:'',amt:'',uid:''};
//         todoEle.expense=this.arrayTodos[i].expense;
//         todoEle.desc=this.arrayTodos[i].desc;
//         todoEle.amt=this.arrayTodos[i].amt;
//         todoEle.uid=this.arrayTodos[i].uid;
//         console.log('TODO element ',todoEle);
//         this.addToDosArray(todoEle);
//       }
//       //console.log('For loop Ended');
//     }
//   })
//   .catch(err=>console.log('Error occurres while retreving data',err))
// }


  // saveToServer(){
  //   var promise=firebase.database().ref('/expense/').set(this.obj);
  //   promise.then(data=>{
  //     alert("Record added");
  //     console.log("Record Entered");
  //   }).catch(err=>{
  //     alert("Record not added");
  //     console.log(err);
  //   })
  // }
  header(){
    return(<Switch>
      <Route exact path="/"  render={()=><Input takeValue={this.takeInput.bind(this)}  save={this.add.bind(this)}/>}/>
      <Route path="/output" render={()=><Output delete={this.delete.bind(this)}  clear={this.clear.bind(this)} edit={this.edit.bind(this)} />}/>
      <Route path="/edit" render={()=><Edit editValue={this.editInput.bind(this)} item={this.editItem} update={this.update.bind(this)}/>}/>
    </Switch>)
  }

  header1(){
    return(<Switch>
      <Route path="/register" render={()=><Register userInput={this.userInput.bind(this)} register={this.register.bind(this)}/>}/>
      <Route path="/login" render={()=><Login userInput={this.userInput.bind(this)} login={this.login.bind(this)}/>}/>
    </Switch>)
  }


  render(){
    return(
      <div className='container'>      
        <Header isAuthenticated={this.isAuthenticated}/>
        <hr/>
        {this.isAuthenticated ? this.header() :this.header1()}
        {/* <Switch>
          <Route exact path="/"  render={()=><Input takeValue={this.takeInput.bind(this)}  save={this.add.bind(this)}/>}/>
          <Route path="/output" render={()=><Output delete={this.delete.bind(this)}  clear={this.clear.bind(this)} edit={this.edit.bind(this)} />}/>
          <Route path="/edit" render={()=><Edit editValue={this.editInput.bind(this)} item={this.editItem} update={this.update.bind(this)}/>}/>
          <Route path="/register" render={()=><Register userInput={this.userInput.bind(this)} register={this.register.bind(this)}/>}/>
          <Route path="/login" render={()=><Login userInput={this.userInput.bind(this)} login={this.login.bind(this)}/>}/>
        </Switch> */}
          {/* <Input takeValue={this.takeInput.bind(this)} save={this.add.bind(this)}/>
          <Output delete={this.delete.bind(this)} clear={this.clear.bind(this)} edit={this.edit.bind(this)}/>
          <Edit editValue={this.editInput.bind(this)} item={this.editItem} update={this.update.bind(this)}/> */}
      </div>
    ) 
  }
}
export default withRouter(App);
