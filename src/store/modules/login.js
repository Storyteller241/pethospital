export default {
  namespaced:true,
  state:{
    user:{
      username:"",
      token:"",
      role:"",
      id:"",
    },
  },
  mutations:{
    setUser(state,user){
      state.user = user;
      
    },
  }
}