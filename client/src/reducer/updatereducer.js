const initialstate={
    title:"",
    message:"",
    id:""
}
export const updatereducer =(state=initialstate,action)=>{
    switch (action.type) {
        case "update":
            console.log(action.data,"action data")
            
            return action.data;
    
        default:
            return state;
    }

}