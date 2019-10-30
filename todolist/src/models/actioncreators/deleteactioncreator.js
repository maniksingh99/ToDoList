export const deleteActionCreator=(obj,opr)=>{
    return{
        payload:obj,
        type:opr
    }
}