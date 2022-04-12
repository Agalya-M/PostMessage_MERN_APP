import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:4000" });

export async function postmessage(data){
    const res=await API.post('/post/createpost',data);
    console.log(res);
    return res.data;


}

export async function getmessage(){
    const res=await API.get('/post/getposts');
    console.log(res);
    return res.data;
   


}

export async function postDelete(id){
    
    const res=await API.delete('/post/deletepost/'+id)
    console.log(res)
}


export async function postupdate(id){
    
    const res=await API.delete('/post/updatepost/'+id)
    console.log(res)
}






