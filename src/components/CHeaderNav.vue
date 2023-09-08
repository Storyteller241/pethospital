<template>
  <el-menu :default-active="active" mode="horizontal" background-color="#fff2cc" text-color="#9d966b"
    active-text-color="#FF8C00" router>
    <el-menu-item index="/">咚咚首页</el-menu-item>

    <el-submenu index="/petinfo" v-if="rolemeun = 1">
      <template slot="title">宠物信息管理</template>

      <el-menu-item index="/consdetail">宠物信息</el-menu-item>
      <el-menu-item index="/pettreatdetail"> 宠物治疗信息</el-menu-item>
      <el-menu-item index="petadopt">领养宠物信息</el-menu-item>
      <el-menu-item index="strayanim">流浪动物绝育</el-menu-item>
    </el-submenu>
    <el-submenu index="/docinfo">

      <template slot="title">医生信息管理</template>

      <el-menu-item index="docconsdetail">医生诊室信息</el-menu-item>
      <el-menu-item index="docperinfo">医生个人信息信息</el-menu-item>
      <el-menu-item index="docworkinfo">医生排班信息信息</el-menu-item>


    </el-submenu>
    <el-menu-item index="/userinfo">用户信息管理</el-menu-item>
    <el-menu-item class="user">
      <span class="user-name">
        {{ user.username }}
      </span>
      <el-button @click="logoutHandle">退出</el-button>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from 'vuex';


export default {
  data() {
    return {
      active: "/",
      roles:'',
      rolemeun:'',
    }
  },
  computed: {
    ...mapState("login", ["user"])
  },
  mounted() {
    if (sessionStorage.getItem("key")) {
      this.active = sessionStorage.getItem("key")
    }
    var roles = this.$store.state.role;
    console.log(roles,'===============roles');
    var rolemeun = 2;
    if(roles === 'admin') {
        rolemeun = 1;
    }else {
        rolemeun = 2;
    }
  },
  methods: {
    ...mapMutations("login", ["setUser"]),
    logoutHandle() {
      this.setUser({})
      localStorage.removeItem("amnn");
      this.$router.push("/login")
    },


  }
};

</script>

<style scoped lang="less">
.user {
  float: right !important;
  margin-right: 20px !important;
  line-height: 60px !important;
}

.user-name {
  color: #fff;
  margin-right: 10px;
  font-size: 15px;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: inline-block;
  line-height: 40px;
  overflow: hidden;
}

el-menu {
  float: left;
}

.dropmenu {
  background-color: #fff2cc;
}
</style>