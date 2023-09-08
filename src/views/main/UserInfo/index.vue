<template>
 <div style="width: 1300px; padding-top: 20px; margin: auto;">
 <div style="padding-bottom: 5px;">
  <el-card shadow="hover" class="describe-container">
  <el-row>
    <el-col :span="24">
      <div style="padding-left: 900px;"><el-button round  icon="el-icon-circle-plus-outline" type="primary" @click="addUser" style="background: sandybrown; border-color:sandybrown ;"><span style="margin-left: 5px;">新增用户</span></el-button></div>
  </el-col>
  </el-row>
</el-card>
 </div>
 <el-card shadow="hover" class="describe-container" body-style="">
  <el-table
    :data="tableData"
    stripe
    style="width: 100%;">
    <el-table-column
      fixed
      prop="id"
      label="ID"
      width="80">
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
      width="120">
    </el-table-column>
    
    <el-table-column
      prop="userage"
      label="年龄"
      width="120">
    </el-table-column>
    <el-table-column
      prop="petname"
      label="宠物姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="breed"
      label="宠物品种"
      width="300">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="电话"
      width="150">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="300">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="240"
      key="slot">
      <!--  eslint-disable-next-line -->
      <template slot-scope="scope">
        <el-button  @click="edit(scope.$index,scope.row, scope.row.id)" type="primary" icon="el-icon-edit" round style="background: sandybrown; border-color:sandybrown ;">编辑</el-button>
        <el-button @click="delUser(scope.$index, scope.row)" type="warning" icon="el-icon-delete" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
 </el-card>
 
<el-dialog class="el-icon-sugar" title="🐱编辑用户信息🐶" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="👩‍💼姓名  " :label-width="formLabelWidth">
      <el-input v-model="form.username" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="🍀年龄" :label-width="formLabelWidth">
      <el-input v-model="form.userage" autocomplete="off" clearable input type="number"></el-input>
    </el-form-item>
    <el-form-item label="🐷宠物姓名" :label-width="formLabelWidth">
      <el-input v-model="form.petname" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="🐕宠物品种" :label-width="formLabelWidth">
      <el-input v-model="form.breed" autocomplete="off" clearable></el-input>
    </el-form-item>

    <el-form-item label="📞电话  " :label-width="formLabelWidth">
      <el-input v-model="form.tel" :rules="formRules.phone" autocomplete="off" clearable input type="number"  οninput="if(value.length>11) value=value.slice(0,11)"></el-input>
    </el-form-item>
    <el-form-item label="📬邮箱  " :label-width="formLabelWidth">
      <el-input v-model="form.email" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="⛳地址  " :label-width="formLabelWidth">
      <el-input v-model="form.address" autocomplete="off" clearable></el-input>
    </el-form-item>   
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="editConfirm">11确 定</el-button>
  </div>
</el-dialog>
<el-dialog class="el-icon-sugar" title="🐱添加用户信息🐶" :visible.sync="dialogFormVisible1">
  <el-form :model="form1">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form1.username" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="登录密码" :label-width="formLabelWidth">
      <el-input v-model="form1.password" autocomplete="off" clearable type="password"></el-input>
    </el-form-item>
    <el-form-item label="角色" :label-width="formLabelWidth">
      <el-input v-model="form1.role" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="年龄" :label-width="formLabelWidth">
      <el-input v-model="form1.userage" autocomplete="off" clearable input type="number"></el-input>
    </el-form-item>
    <el-form-item label="宠物姓名" :label-width="formLabelWidth">
      <el-input v-model="form1.petname" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="宠物品种" :label-width="formLabelWidth">
      <el-input v-model="form1.breed" autocomplete="off" clearable></el-input>
    </el-form-item>

    <el-form-item label="电话" :label-width="formLabelWidth">
      <el-input v-model="form1.tel" :rules="formRules.phone" autocomplete="off" clearable input type="number"  οninput="if(value.length>11) value=value.slice(0,11)"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth">
      <el-input v-model="form1.email" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form1.address" autocomplete="off" clearable></el-input>
    </el-form-item>   
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="addConfirm">确 定</el-button>
  </div>
</el-dialog>
<template>
  <!-- <PaginationPanel></PaginationPanel> -->
</template>
 </div>
 
</template>


<script>
// import PaginationPanel from '@/components/PaginationPanel.vue';
import { formRules } from '@/utils/validator';

  export default {
    inject:['reload'],

    components: {
      // PaginationPanel
    },
      data() {
      return {
        tableData: [],
        dialogFormVisible: false,
        dialogFormVisible1: false,
        form: {
          // id:'',
          username: '',
          userage:'',
          petname: '',
          breed:'',
          tel: '',
          email:'',
          address:'',
        },
        form1: {
          id:'',
          username: '',
          password:'',
          role:'',
          userage:'',
          petname: '',
          breed:'',
          tel: '',
          email:'',
          address:'',
        },

        formLabelWidth: '120px',
        formRules : formRules,
      }
      },


    methods: {

      addUser(){
        this.dialogFormVisible1 = true;
      },

  addConfirm() {
    this.$api.add({
        // id: this.form1.id,
        username: this.form1.username,
        password:this.form1.password,
        role:this.form1.role,
        userage: this.form1.userage,
        petname: this.form1.petname,
        breed: this.form1.breed,
        tel: this.form1.tel,
        email: this.form1.email,
        address: this.form1.address,
      }).then(res => {
        if(res.data.status === 200){
          this.dialogFormVisible1 = false;
          // this.$bus.$emit("refresh",true)
          console.log('添加成功');
        }
        
      }).catch(error => {
        console.log(error);
      })
      this.dialogFormVisible1 = false;
      this.reload()
  },


      delUser(index, row) {
       //弹框询问用户是否删除数据
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //确定删除
        this.$api.del({ id: row.id }).then(res => {
          if (res.data.status === 200) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.reload()
          }else{
            this.$message({
          type: 'error',
          message: '删除失败!'
        });
          }
        })

      }).catch(() => {
        //取消删除
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
      },
      
      edit(id,row) { 
        this.form.id = id + 1;
        this.form.username = row.username;
        this.form.userage = row.userage;
        this.form.petname = row.petname;
        this.form.breed = row.breed;
        this.form.tel = row.tel;
        this.form.email =  row.email;
        this.form.address = row.address;


        this.dialogFormVisible = true;
     console.log(this.form.id,'999999');
    },
    editConfirm() {
      this.$api.edit({
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
      //   this.id = index
      //   row.data = this.form.data
      //   this.dialogFormVisible = true;
      //   this.$api.edit(
      //     //和后台sql语句有关，，，，sql有错误
 
      //   ).then(res =>{
      //     this.tableData = res.data.result
      //   })
      // }

   
 loadData() {
  this.$api.userInfo().then(res =>{
     this.tableData = res.data.result
    //  console.log(this.tableData.id);
    })
 }
    
  },
  created(){
     
    },
  
    mounted(){
     this.loadData()
     
  }
}
</script>

<style>
.user-1 {
 width: 1300px;
 padding-top: 20px;
 margin: auto;
}
.describe-container {
    /* margin-bottom: 15px; */
    background: #fff;
    border-radius: 3px;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 3px;
    overflow: auto;
    box-shadow: 0 1px 4px 0 rgba(3, 44, 77, 0.1);
}
el-button--primary:active {
  background: #f6e8c0;
  border-color: #f6e8c0;
  color: #fff;
}
el-button--primary:focus,
el-button--primary:hover {
  background: #f4dd9e;
  border-color: #f4dd9e;
  color: #fff;
}
el-form-item {
  margin-left: 0px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

</style>