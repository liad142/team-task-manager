import {
    GET_MEMBERS,
    ADD_MEMBER,
    DELETE_MEMBER,
    SET_LOADING,
    MEMBERS_ERROR,
    GET_LOGS,
    LOGS_ERROR,
    ADD_LOG
} from "./types";

//get member from server
export const getMembers = () => async dispatch =>{
    try{
        setLoading();
        const res = await fetch('/members');
        const data = await res.json()
        dispatch({
            type:GET_MEMBERS,
            payload:data
        })
    }catch (err){
        dispatch({
            type:MEMBERS_ERROR,
            payload:err.response.statusText
        })
    }
}

//Add members to server
export const addMember = (member) => async dispatch =>{
    try{
        setLoading();
        const res = await fetch('/members',{
            method:'POST',
            body:JSON.stringify(member),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await res.json()
        dispatch({
            type:ADD_MEMBER,
            payload:data
        })
    }catch (err){
        dispatch({
            type:MEMBERS_ERROR,
            payload:err.response.statusText
        })
    }
}

//set loading true
export const setLoading = () =>{
    return{
        type:SET_LOADING
    }
}
