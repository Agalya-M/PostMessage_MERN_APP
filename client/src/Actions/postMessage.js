import { postmessage,postDelete,getmessage,postupdate} from "../Api/index";

export const ACTION_TYPES={
    CREATE :'CREATE',
    UPDATE:'UPDATE',
   DELETE :'DELETE',
   FETCH_ALL:'FETCH_ALL'
}


export const fetchAll = () => async (dispatch) => {
   await getmessage() 
    .then(res=>{
       
     
        dispatch({ type: ACTION_TYPES.FETCH_ALL, payload:res});
    }

    )
    .catch(err=>console.log(err))
   
  };


  
export const createpost = (data) => async (dispatch) => {
    await postmessage(data) 
     .then(res=>{
      
 
         dispatch({ type: ACTION_TYPES.CREATE, payload:res });
     }
 
     )
     .catch(err=>console.log(err))
    
   };

   export const deletepost = (id) => async (dispatch) => {
    await postDelete(id) 
     .then(res=>{
         console.log(res)
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        });

     }
 
     )
     .catch(err=>console.log(err))
    
   };

   export const updatepost = (id,data) => async (dispatch) => {
    await postupdate(id,data) 
     .then(res=>{
         console.log(res)
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload: res.data
        });

     }
 
     )
     .catch(err=>console.log(err))
    
   };
 
 
 