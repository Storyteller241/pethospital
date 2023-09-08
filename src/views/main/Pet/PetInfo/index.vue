<template>
  <div style="width: 1300px; padding-top: 20px; margin: auto;">
  <div style="padding-bottom: 5px;">
   <el-card shadow="hover" class="describe-container">
   <el-row>
     <el-col :span="24">
       <div style="padding-left: 900px;"><el-button round  icon="el-icon-circle-plus-outline" type="primary" @click="addUser" style="background: sandybrown; border-color:sandybrown ;"><span style="margin-left: 5px;">新增待领养宠物</span></el-button></div>
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
       prop="name"
       label="姓名"
       width="120">
     </el-table-column>
     
     <el-table-column
       prop="age"
       label="年龄"
       width="120">
     </el-table-column>
     <el-table-column
       prop="status1"
       label="宠物领养状态"
       width="120">
       <template slot-scope="scope">
        <div v-if="scope.row.status1 = false"><i  class="el-icon-cloudy"></i> 待领养</div>         
          <div v-if="scope.row.status1 = true"><i  class="el-icon-sunny"></i> 已被领养</div>

       </template>
     </el-table-column>
   
     <el-table-column
       prop="des"
       label="描述"
       width="300">
     </el-table-column>
     <el-table-column
       prop="adname"
       label="领养人姓名"
       width="120">
     </el-table-column>
     <el-table-column
       prop="adtel"
       label="领养人电话"
       width="120">
     </el-table-column>
     <el-table-column
       prop="adadress"
       label="领养人地址"
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
  
 <el-dialog class="el-icon-sugar" title="🐱编辑领养宠物信息🐶" :visible.sync="dialogFormVisible">
   <el-form :model="form">
     <el-form-item label="👩‍💼姓名  " :label-width="formLabelWidth">
       <el-input v-model="form.name" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="🍀年龄" :label-width="formLabelWidth">
       <el-input v-model="form.age" autocomplete="off" clearable input type="number"></el-input>
     </el-form-item>
     <el-form-item label="🐷宠物领养状态" :label-width="formLabelWidth">
      <el-switch v-model="form.status1"></el-switch>
     </el-form-item>
     <el-form-item label="🐕宠物描述" :label-width="formLabelWidth">
       <el-input v-model="form.des" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="👩‍💼领养人姓名  " :label-width="formLabelWidth">
       <el-input v-model="form.adname" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="📞领养人电话  " :label-width="formLabelWidth">
       <el-input v-model="form.adtel" :rules="formRules.phone" autocomplete="off" clearable input type="number"  οninput="if(value.length>11) value=value.slice(0,11)"></el-input>
     </el-form-item>
     <el-form-item label="⛳领养人地址  " :label-width="formLabelWidth">
       <el-input v-model="form.adadress" autocomplete="off" clearable></el-input>
     </el-form-item>   
   </el-form>
   <div slot="footer" class="dialog-footer">
     <el-button @click="dialogFormVisible = false">取 消</el-button>
     <el-button type="primary" @click="editConfirm">确 定</el-button>
   </div>
 </el-dialog>
 <el-dialog class="el-icon-sugar" title="🐱添加流浪动物信息🐶" :visible.sync="dialogFormVisible1">
   <el-form :model="form1">
     <el-form-item label="姓名" :label-width="formLabelWidth">
       <el-input v-model="form1.name" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="年龄" :label-width="formLabelWidth">
       <el-input v-model="form1.age" autocomplete="off" clearable input type="number"></el-input>
     </el-form-item>
     <el-form-item label="状态" :label-width="formLabelWidth">
       <el-switch v-model="form1.status1"></el-switch>
     </el-form-item>
     <el-form-item label="宠物描述" :label-width="formLabelWidth">
       <el-input v-model="form1.des" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="领养人姓名" :label-width="formLabelWidth">
       <el-input v-model="form1.adname" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="领养人电话" :label-width="formLabelWidth">
       <el-input v-model="form1.adtel" :rules="formRules.phone" autocomplete="off" clearable input type="number"  οninput="if(value.length>11) value=value.slice(0,11)"></el-input>
     </el-form-item>
     <el-form-item label="领养人地址" :label-width="formLabelWidth">
       <el-input v-model="form1.adadress" autocomplete="off" clearable></el-input>
     </el-form-item>   
   </el-form>
   <div slot="footer" class="dialog-footer">
     <el-button @click="dialogFormVisible1 = false">取 消</el-button>
     <el-button type="primary" @click="addConfirm">22确 定</el-button>
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
           name: '',
           age:'',
           status1: '',
           des:'',
           adname:'',
           adtel: '',
           adadress:'',
         },
         form1: {
           id:'',
           name: '',
           age:'',
           status1: '',
           des:'',
           adname:'',
           adtel: '',
           adadress:'',
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
     this.$api.add3({
         // id: this.form1.id,
         name: this.form1.name,
         age:this.form1.age,
         status1:this.form1.status1,
         des: this.form1.des,
         adname: this.form1.adname,
         adtel: this.form1.adtel,
         adadress: this.form1.adadress,
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
        this.$confirm('此操作将永久删除该流浪动物, 是否继续?', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         type: 'warning'
       }).then(() => {
         //确定删除
         this.$api.del3({ id: row.id }).then(res => {
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
         this.form.name = row.name;
         this.form.age = row.age;
         this.form.status1 = row.status1;
         this.form.des = row.des;
         this.form.adname = row.adname;
         this.form.adtel = row.adtel;
         this.form.adadress = row.adadress;
 
 
         this.dialogFormVisible = true;
      console.log(this.form.id,'999999');
     },
     editConfirm() {
       this.$api.edit4({
         // id: this.form.id, 
         id: this.form.id,
         name: this.form.name,
         age: this.form.age,
         status1: this.form.status1,
         des: this.form.des,
         adname: this.form.adname,
         adtel: this.form.adtel,
         adadress: this.form.adadress,
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
   this.$api.adpetInfo().then(res =>{
      this.tableData = res.data.result
      console.log(this.tableData,'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
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