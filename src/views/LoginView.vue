<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>😻啊嘛咚咚宠物医院管理系统😻</span>
      </div>
      <el-tabs v-model="currentIndex" stretch @tab-click="handleTabsClick">
        <el-tab-pane label="登录" name="login">
          <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm">
            <el-form-item  label="用户名" label-width="80px" prop="username">
              <el-input type="text" v-model="loginForm.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" label-width="80px" prop="password">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  @click="submitForm('loginForm')">登录</el-button>
              <!-- @keyup.enter="keyDown('loginForm')" -->
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm">
            <el-form-item label="用户名" label-width="80px" prop="username">
              <el-input type="text" v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" label-width="80px">
              <el-input type="text" v-model="registerForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop="password">
              <el-input type="password" v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" label-width="80px" prop="configurePassword">
              <el-input type="password" v-model="registerForm.configurePassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>

            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
                 
<script>

import api from "../api/index.js"
import { mapMutations } from "vuex"
import { h } from "vue";
import { Loading } from 'element-ui';

export default {
  data() {
    //验证规则
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("咚咚提示：请输入用户名"))

      } else if (value.length < 4) {
        callback(new Error("（咚咚微笑）长度不够哦~"))
      } else {
        callback();
      }
    }
    var validatePassWord = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("咚咚提示：请输入密码"))

      } else {
        callback();
      }
    }
    var validateConfigurePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("咚咚提示：请输入密码"))

      } else if (value !== this.registerForm.password) {
        callback(new Error("咚咚提示：两次输入密码不一样哦~"))
      } else {
        callback();
      }
    }
    return {
      currentIndex: "login",
      loginForm: {
        username: "",
        password: ""
      },
      registerForm: {
        username: "",
        password: "",
        configurePassword: "",
        email: ""
      },
      activeTab: "login",
      rules: {
        username: [
          {
            validator: validateUserName, trigger: "blur"
          }
        ],
        password: [
          {
            validator: validatePassWord, trigger: "blur"
          }
        ],
        configurePassword: [
          {
            validator: validateConfigurePassword, trigger: "blur"
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations("login", ["setUser","setRole"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          if (this.activeTab === "login") {
            //登录
            api.login(this.loginForm).then((res) => {
              console.log(res,'------res.data');
              if (res.data.status === 200) {
                console.log(res,'111111111111');
                this.setUser(res.data);
                localStorage.setItem(
                  "amnn",
                  JSON.stringify(res.data)
                );
                // api.userInfo1(this.loginForm.username).then((res) => {
                //   console.log(res.data,'ress--------------');
                // })
                // api.userInfo(this.loginForm.username).then((res) => {
                // console.log(res.data.role,'222222222222');
                // })
                this.$router.push('/')
                this.loading = false;
              } else {
                const h = this.$createElement;
                this.$notify({
                  title: '登陆失败',
                  message: h('i', "用户名密码错误！ψ(｀∇´)ψ"),
                });
                this.loading = false;
              }
            })
          }
          if (this.activeTab === "register") {
            //注册
            api.register(this.registerForm).then(res => {
              if (res.data.status === 200) {
                const h = this.$createElement;
                this.$notify({
                  title: '注册成功',
                  message: h('i', "请前往登录页面登录(☆▽☆)"),
                });
              } else {
                this.$notify({
                  title: '注册失败',
                  message: h('i', "请重新注册(p≧w≦q)"),
                });
              }
            })
          }

        } else {
          return;
        }
      });
    },
    // keyDown(e){
    //       //如果是回车则执行登录方法
    //       if(e.keyCode == 13){
    //         //需要执行的登录方法
    //         this. submitForm(formName);
    //       }
    //     },

    handleTabsClick(tab) {
      this.activeTab = tab.name;
    },
  },
  // mounted () {
  //       //绑定事件
  //       window.addEventListener('keydown',this.keyDown);
  //     },
  //     //销毁事件
  //     destroyed(){
  //       window.removeEventListener('keydown',this.keyDown,false);
  //     }

};
</script>

<style scoped lang="less">
.box-card{
  background: rgba(227, 215, 133, 0.2);
}

.login {
  width: 1200px;
  margin: 0 auto;
}
  .box-card {
    width: 500px;
    margin: 100px auto;
  }

</style>
