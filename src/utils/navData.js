//导航路由公告数据
export default [
  {title:'首页',path:'/',name:'Home', icon: "el-icon-house", component:'HomePage/HomeView'},
  { title: '预约挂号', path: '/petregister', name: 'petregister', icon: "el-icon-s-order", component: 'Pet/' },
  { title: '养宠小Tips', path: '/pettips', name: 'pettips', icon: "el-icon-collection", component: 'Pet/PetRegister/index' },
  { title: '爱心宠物领养', path: '/petadopt', name: 'petadopt',  icon: "el-icon-umbrella", component: 'Pet/petadopt/index' },
  { title: '公益之路', path: '/strayanim', name: 'strayanim', icon: "el-icon-sunny", component: 'Pet/strayanim/index' },
  { title: '个人中心', path: '/perinfo', name: 'perinfo', icon: "el-icon-coffee-cup", component: 'UserInfo/PerInfo/index' },
]