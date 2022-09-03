import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./action.type"

const initialState ={

    isAuth:[],
    isLoading:false,
    isError:false,

}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case POST_LOGIN_REQUEST:{
            return {...state,isLoading:true,isError:false,}
        }
        case POST_LOGIN_SUCCESS:{
            return {...state,isLoading:false,isError:false,isAuth:payload}
        }
        case POST_LOGIN_FAILURE:{
            return {...state,isLoading:false,isError:true,}
        }
        default:
            return state
    }
}