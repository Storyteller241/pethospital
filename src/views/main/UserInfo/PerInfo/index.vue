<template>
<div>
 <el-card style="width: 1200px; height: 900px; margin: 0 auto;margin-top: 20px; background-color: rgba(216, 205, 168, 0.449);" shadow="always">
  <el-form ref="form" :model="form" label-width="150px" style="padding-top: 20px; margin-left: 100px;;">
    <div style="font-size: 20px;margin-bottom: 40px;">
        <span>☕ {{ user.username }} , 的个人中心☕</span>
    </div>
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="😸用户名" prop="username">
                                <!-- <span>{{ this.form.username }}</span> -->
                              <el-input v-model="form.username" clearable :disabled="!isEdit">
                            
                            </el-input>
   
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="🦝年龄" prop="userage">
                              <el-input v-model="form.userage" clearable :disabled="!isEdit"></el-input>
                                <!-- {{ form.realName ? form.realName : '' }} -->
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="🐨宠物姓名" prop="petname">
                              <el-input v-model="form.petname" clearable :disabled="!isEdit"></el-input>
                                <!-- {{ form.realName ? form.realName : '' }} -->
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="🦄宠物品种" prop="breed">
                              <el-input v-model="form.breed" clearable :disabled="!isEdit"></el-input>
                                <!-- {{ form.realName ? form.realName : '' }} -->
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="🐇手机号" prop="tel" >
                                <el-input maxlength="11" v-model="form.tel" clearable :disabled="!isEdit"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="🐣邮箱" prop="email" >
                                <el-input maxlength="11" v-model="form.email" clearable :disabled="!isEdit"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="🐠地址" prop="address" >
                                <el-input v-model="form.address" clearable :disabled="!isEdit"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="🙈密码" prop="password">
                                <el-input v-model="form.password" type="password" :disabled="!isEdit"></el-input>
                            </el-form-item>
                        </el-col>

                        
                    </el-row>
                    <el-row>
                        <el-form-item>
                            <el-button v-if="!isEdit"  @click="edit">修改个人信息</el-button>
                            <el-col v-if="isEdit">
                            <el-button @click="edit7878">保存</el-button>
                            <el-button @click="isEdit = false">取消</el-button> 
                            </el-col>                     
                          </el-form-item>
                    </el-row>
                </el-form>
 </el-card>
</div>
</template>

<script>
import login from '@/store/modules/login';
import { mapState, mapMutations } from 'vuex';
export default {
    inject:['reload'],
  data() {
    return {
        form: {
          id:'',
          username: '',
          userage:'',
          petname: '',
          breed:'',
          tel: '',
          email:'',
          address:'',
          password:'',
        },
        isEdit: false,

    }
  },
  computed: {
    ...mapState("login", ["user"]),
 

  },
  methods: {

    edit() {
       this.isEdit = true;

    },
    loadData() {

  this.$api.userInfo22().then(res =>{
    console.log(res);
    let id1 = this.$store.state.login.user.id;
    console.log(id1,'111111111111111111111111  id1');
    let res22 = JSON.stringify(res.data.result);
    let res33 = JSON.parse(res22);
    var res44 = res33.find(res33 => res33.id === id1)

    console.log(res33,'33333333333333res33');
    console.log(res44,'4444444444444res44');
    console.log(res22,'22222222222222 res22');
    
     this.form = res44
     console.log(this.form);

    })
 },
 edit7878() {
      this.$api.edit77({
        // id: this.form.id, 
        id: this.form.id,
        username: this.form.username,
        userage: this.form.userage,
        petname: this.form.petname,
        breed: this.form.breed,
        tel: this.form.tel,
        
        email: this.form.email,
        address: this.form.address,
      }).then(res => {
        if(res.data.status === 200){
          this.dialogFormVisible = false;
          // this.$bus.$emit("refresh",true)
          console.log('编辑成功');
        }
        
      }).catch(error => {
        console.log(error);
      })
      this.dialogFormVisible = false;
      this.reload()
    },
 
  },
    created () {
     
    },
    
 mounted() {
    this.loadData();
 }
}
</script>

<style>

</style>