const initialState={
    message:"Subscribe"
}
const reducer=(state =initialState,action)=>{
    const newstate={...state}
    if(action.type==="Message Change"){
        newstate.message="Thanks you for subscribing"
    }
    return newstate
}
export default reducer;