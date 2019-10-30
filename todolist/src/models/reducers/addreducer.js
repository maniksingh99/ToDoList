export const addReducer=(initstate={arr:[],obj:{}},action)=>{
  var temp = [...initstate.arr];
  console.log('Temp is ',temp);
    console.log("***************inside reducer ....... ",initstate);
    console.log("Action is **************** ",action);
    if(action.type=='push'){
     
      let tempState = {arr:[...initstate.arr,action.payload]};
      console.log('After ADD########## ',tempState);
      return tempState;    
         
    }

    if(action.type=='delete'){
      
     
    //  console.log('Index....................',action.payload);
    //  var arr1=initstate.arr.splice(action.payload,1);
    //  var arr2=initstate.arr;
    //  console.log('initstate..........',initstate);

    // return {...initstate,arr:arr2};
    

      var arr1=initstate.arr;
      var obj=action.payload;
      console.log('obj is:',obj);
      console.log('arr1 is:',arr1);
      var arr2=arr1.filter(ele=>ele!==obj);
      console.log('arr2 is:',arr2);
      return{...initstate,arr:arr2};
      // arr1=arr1.splice(index,1);
      // console.log('Index is.........',index);
      //  return{...initstate,arr:arr1};
     // return{...initstate,arr:initstate.arr.filter(ele=>ele!==action.payload)};
    
      // return {...initstate,arr:initstate.arr.filter(ele=>ele.id!==action.payload)};
      // let arr1={arr:[...initstate.arr,initstate.arr.filter(ele)=>{ele.id!==action1.payload]}}
      
    }
    if(action.type=='clear'){
      initstate.arr=[];
      console.log('array is....',initstate.arr);
      return {...initstate,...initstate.arr}
    }

    if(action.type=='edit'){
      console.log('Obj is........................',action.payload);
      var tempArr=initstate.arr;
      console.log('Temp arr is...........',tempArr);
      // var arr2=tempArr.filter(ele=>ele.obj!==action.payload);
      console.log('Arr2..........',arr2);
      var itemToEdit=tempArr.find(ele=>ele==action.payload);
      console.log('.............',itemToEdit);
      return{...initstate,...initstate.arr,obj:itemToEdit}

    }

    if(action.type=='update'){
      var fakeArr=initstate.arr;
      var index=fakeArr.findIndex(ele=>ele==action.payload);
      console.log('edited item in update is:..............',action.payload);
      console.log(fakeArr);
      console.log('Indexis @@@@@@',index);
      //initstate.arr=fakeArr.splice(index,0,action.payload);
     fakeArr.forEach(obj=>{if(obj.uid==action.payload.uid){
          obj.expense=action.payload.expense;
          obj.desc=action.payload.desc;
          obj.amt=action.payload.amt;
          obj.msg=action.payload.msg;
     }});
     console.log('Fake Arr     ',fakeArr);
     
    //  initstate.arr=fakeArr;
      return{...initstate,arr:fakeArr}
    }

    if(action.type=='pushToDoEle'){
      return{...initstate,arr:[...initstate.arr,action.payload]}
    }
 
    
    return initstate;
}