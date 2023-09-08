<template>
  
<div class="allNav">
  <div style="width: 100%;height: 60px;">
    <el-col class="user">
      <span style="float: left;margin-top: 17px; margin-right: 600px;margin-left: 50px;font-size: 20px; font-family: fantasy;">👩‍⚕️🐶👨‍⚕️ amdd宠物医院</span>
      <span class="hyuser">💖欢迎 {{ user.username }} 进入amdd宠物医院！💖</span>
      <span class="user-name">
       <img src="../assets/images/tx2.jpg" alt="" style="width: 100%;
    height: 100%;
    object-fit:cover;">
      </span>
      <el-button @click="logoutHandle">退出</el-button>
    </el-col>
</div>
  <div class="navHeader">
    <el-menu
          class="bar-el-menu"
          default-active=""
          @open="handleOpen"
          @close="handleClose"
          router
          mode="horizontal"
        >

          <!-- 遍历菜单 -->
          <template v-for="item in $store.state.login.user.role == 'user'?navData:adNavData">
            <!-- 含有子菜单 -->
            <template v-if="item.children">
              <!-- 第一层 含有子菜单菜单 -->
              <el-submenu :index="item.path" :key="item.path">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{ item.title }}</span>
                </template>

                <!-- 第二层 子菜单遍历 -->
                <template v-for="subItem in item.children">
                  <!-- 子菜单不含子菜单 -->
                  <el-menu-item
                   
                    :index="subItem.path"
                    :key="subItem.path"
                  >
                    <i :class="subItem.icon"></i>
                    <span slot="title">{{ subItem.title }}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>

            <!-- 第一层 不含子菜单  -->
            <template v-else>
              <el-menu-item :index="item.path" :key="item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </template>
          </template>
          
        </el-menu>
  </div>
  <div class="nav">
  
</div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { Component } from 'vue';
import navData from '@/utils/navData';
import adNavData from '@/utils/adNavData';


export default {
  
  data() {
    return {
      active: "/",
      // roles:'',
      rolemeun:'',
       navData,
       adNavData,
    }
  },
  computed: {
    ...mapState("login", ["user"]),
 

  },
  mounted() {
  //   var meun = new Array()
  // console.log(this.$store.state.login.user.role ,'------------111-----------111--------');
  //   if( this.$store.state.login.user.role == 'user') {
  //     meun.push(navData);
  //   } else{
  //     meun.push(adNavData);
  //   }
   
    if (sessionStorage.getItem("key")) {
      this.active = sessionStorage.getItem("key")
    }
    // var roles = this.$store.state.role;
    // console.log(roles,'===============roles');
    // var rolemeun = 2;
    // if(roles === 'admin') {
    //     rolemeun = 1;
    // }else {
    //     rolemeun = 2;
    // }
  },
  methods: {
    ...mapMutations("login", ["setUser"]),
    logoutHandle() {
      this.setUser({})
      localStorage.removeItem("amnn");
      this.$router.push("/login")
    },

    handleOpen() {

    },
    handleClose() {

    }

  }



};

</script>

<style scoped lang="less">

.navHeader {
  width: 100%;
  height: 60px;
  background-color: #fbf7df;
}
.navHeader .el-menu {
  margin-left: 30px;
}
.nav {
  position: relative;
  margin-top: 10px;
}
/deep/ .el-menu {
  background-color: #fbf7df;
  margin-left: 20px;
  float: left;
  display: inline-block;
  width: 100%;
  height: 60px;
}
/deep/.el-submenu {
    position: relative;
  }
 

.user {
  float: right !important;
  line-height: 30px !important;
}
.user-name {
  color: #fff;
  // margin-left: 1300px;
  // margin-right: 200px;
  margin-top: 10px;
  font-size: 15px;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: inline-block;
  line-height: 40px;
  overflow: hidden;
}
.hyuser {
  float: left;
  font-family: fantasy;
  width: 400px;
  height: 40px;
  margin-top: 15px;
  // margin-left: 850px;
  display: inline-block;
}
.user .el-button {
  margin-top: 10px;
  float: right !important;
  margin-right: 40px;
}



 el-menu {
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #FFF;
    width: 300px;
    display: inline-block;
    background-color: #fff2cc;
 }

.dropmenu {
  background-color: #fff2cc;
}
</style>