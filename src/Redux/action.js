import axios from "axios"
import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./action.type"


export const login=(payload)=>(dispatch)=>{
dispatch ({type:POST_LOGIN_REQUEST})
return axios.post("https://devapi.wtfup.me/user/login",payload)
.then((r)=>{
    dispatch({type:POST_LOGIN_SUCCESS,payload:r.data})
    return {type:POST_LOGIN_SUCCESS}
})

.catch((e)=>{
    dispatch({type:POST_LOGIN_FAILURE,payload:e})
    return {type:POST_LOGIN_FAILURE}
})
}