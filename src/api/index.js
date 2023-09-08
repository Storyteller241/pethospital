import axios from "../utils/request"
import base from "./base"

const api = {
  /**
   * 注册
   */
  register(params) {
    return axios.post(base.baseUrl + base.registerUrl, params);
  },
  /**
   * 登录
   */
  login(params) {
    return axios.post(base.baseUrl + base.loginUrl, params);
  },


  /**用户信息 */
  userInfo(params) {
    return axios.get(base.baseUrl + base.userInfo, {
      params
    })
  },
  userInfo22(params) {
    return axios.get(base.baseUrl + base.userInfo22, {
      params
    })
  },
  // userInfo1(params) {
  //   return axios.get(base.baseUrl + base.userInfo1, {
  //     params
  //   })
  // },
  edit(params) {
    return axios.get(base.baseUrl + base.edit, {
      params
    })
  },
  add0(params) {
    return axios.get(base.baseUrl + base.add0, {
      params
    })
  },
  add(params) {
    return axios.get(base.baseUrl + base.add, {
      params
    })
  },
  add1(params) {
    return axios.get(base.baseUrl + base.add1, {
      params
    })
  },
  add2(params) {
    return axios.get(base.baseUrl + base.add2, {
      params
    })
  },
  add3(params) {
    return axios.get(base.baseUrl + base.add3, {
      params
    })
  },
  del0(params) {
    return axios.get(base.baseUrl + base.del0, {
      params
    })
  },
  del(params) {
    return axios.get(base.baseUrl + base.del, {
      params
    })
  },
  del2(params) {
    return axios.get(base.baseUrl + base.del2, {
      params
    })
  },
  del3(params) {
    return axios.get(base.baseUrl + base.del3, {
      params
    })
  },
  del5(params) {
    return axios.get(base.baseUrl + base.del5, {
      params
    })
  },
  petInfo(params) {
    return axios.get(base.baseUrl + base.petInfo, {
      params
    })
  },
  adpetInfo(params) {
    return axios.get(base.baseUrl + base.adpetInfo, {
      params
    })
  },
  docInfo(params) {
    return axios.get(base.baseUrl + base.docInfo, {
      params
    })
  },
  petRegister(params) {
    return axios.get(base.baseUrl + base.petRegister, {
      params
    })
  },
  edit1(params) {
    return axios.get(base.baseUrl + base.edit1, {
      params
    })
  },
  edit2(params) {
    return axios.get(base.baseUrl + base.edit2, {
      params
    })
  },
  edit4(params) {
    return axios.get(base.baseUrl + base.edit4, {
      params
    })
  },
  edit5(params) {
    return axios.get(base.baseUrl + base.edit5, {
      params
    })
  },
  edit77(params) {
    return axios.get(base.baseUrl + base.edit77, {
      params
    })
  },
}

export default api;