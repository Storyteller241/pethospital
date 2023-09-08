//导航路由公告数据（管理员）
export default [
  // { title: '首页', path: '/', name: 'Home', icon: "el-icon-house", component: 'HomePage/HomeView' },
  { title: '预约信息管理', path: '/adpetregister', name: 'adpetregister', icon: "el-icon-document-checked", component: 'Pet/AdPetRegister/index' },
  { title: '诊室信息', path: '/consdetail', name: 'consdetail', icon: "el-icon-notebook-1", component: 'Pet/PetConsDetail/index' },
  { title: '医生个人信息', path: '/docperinfo', name: 'docperinfo', icon: "el-icon-user-solid", component: 'Doc/DocPerInfo/index' },
  // { title: '医生诊室信息', path: '/docconsdetail', name: 'docconsdetail', component: 'Pet/PetConsDetail/index' },
  // { title: '医生排班信息', path: '/docworkinfo', name: 'docworkinfo', component: 'Doc/DocWorkInfo/index' },
  { title: '用户信息', path: '/userinfo', name: 'userinfo',  icon: "el-icon-user", component: 'UserInfo' },
  { title: '待领养宠物信息', path: '/petinfo', name: 'petinfo', icon: "el-icon-moon", component: 'PetInfo' },



]