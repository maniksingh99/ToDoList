export const addActionCreator= (obj,opr)=>{
    console.log("Inside actioncreator");
    return{  
    payload:obj,
    type:opr

    };
}

export const addToDoArrayActionCreator=(obj,opr)=>{
    return{
        payload:obj,
        type:opr
    }
}