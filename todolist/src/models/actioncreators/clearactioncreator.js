export const clearActionCreator=(arr,opr)=>{
    return{
        payload:[arr],
        type:opr
    }
}