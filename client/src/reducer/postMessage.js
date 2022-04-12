import {ACTION_TYPES} from '../Actions/postMessage';
const initialstate={
    list:[
        {id:'1',title:"hello",message:"hello world"},
        {id:'2',title:"info",message:"infomessages"}
    
    ],
}
export const postMessage =(state=initialstate,action)=>{
    switch (action.type){
        case ACTION_TYPES.FETCH_ALL:
            return { ...state,list: [...action.payload]};
            
        case ACTION_TYPES.CREATE:
            console.log(action.payload);
            return {  ...state,
                list: [...state.list, action.payload]};
        case ACTION_TYPES.DELETE:
            return {  ...state,
                list:state.list.filter(x => x._id !== action.payload)}
        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x._id == action.payload._id ? action.payload : x)
            }
                
        default:
            return state;

    }

}