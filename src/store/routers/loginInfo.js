import * as type from '../type';
const state = {
    user:''
}
const mutations ={
    [type.LOGINUSER](state,user){
        state.user= user
    }
}
const actions={
    setUser:({commit},user)=>{
        commit(type.LOGINUSER,user)
    }
}
const getters ={
    user: state=>state.user
}
export default  {
    state,mutations,getters,actions
}