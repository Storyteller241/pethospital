<template>
  <div style="width: 1300px; padding-top: 20px; margin: auto;">
  <div style="padding-bottom: 5px;">
   <el-card shadow="hover" class="describe-container">
   <el-row>
     <el-col :span="24">
       <div style="padding-left: 900px;"><el-button round  icon="el-icon-circle-plus-outline" type="primary" @click="addUser" style="background: sandybrown; border-color:sandybrown ;"><span style="margin-left: 5px;">新增就诊信息</span></el-button></div>
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
       width="100">
     </el-table-column>
     <el-table-column
       prop="symptom"
       label="病名"
       width="120">
     </el-table-column>
     <el-table-column
       prop="breed"
       label="宠物品种"
       width="100">
     </el-table-column>
     <el-table-column
       prop="cons"
       label="诊室"
       width="150">
     </el-table-column>
     <el-table-column
       prop="doc"
       label="病情描述"
       width="300">
     </el-table-column>

     <el-table-column
       fixed="right"
       label="操作"
       width="240"
       key="slot">
       <!--  eslint-disable-next-line -->
       <template slot-scope="scope">
        <el-button  @click="edit(scope.$index,scope.row, scope.row.id)" type="primary" icon="el-icon-view" circle style="background: sandybrown; border-color:sandybrown ;"></el-button>
         <el-button  @click="edit(scope.$index,scope.row, scope.row.id)" type="primary" icon="el-icon-edit" circle style="background: sandybrown; border-color:sandybrown ;"></el-button>
         <el-button @click="delUser(scope.$index, scope.row)" type="warning" icon="el-icon-delete" circle></el-button>
       </template>
     </el-table-column>
   </el-table>
  </el-card>
  
 <el-dialog class="el-icon-sugar" title="🐱编辑诊室宠物信息🐶" :visible.sync="dialogFormVisible">
   <el-form :model="form">
     <el-form-item label="🐷宠物姓名 " :label-width="formLabelWidth">
       <el-input v-model="form.name" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="🍀年龄" :label-width="formLabelWidth">
       <el-input v-model="form.age" autocomplete="off" clearable input type="number"></el-input>
     </el-form-item>

     <el-form-item label="🐕宠物品种" :label-width="formLabelWidth">
       <el-input v-model="form.breed" autocomplete="off" clearable></el-input>
     </el-form-item>
 
     <el-form-item label="病名  " :label-width="formLabelWidth">
       <el-input v-model="form.symptom" autocomplete="off" clearable ></el-input>
     </el-form-item>
     <el-form-item label="诊室  " :label-width="formLabelWidth">
       <el-input v-model="form.cons" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="描述  " :label-width="formLabelWidth">
       <el-input v-model="form.doc" autocomplete="off" clearable></el-input>
     </el-form-item>   
   </el-form>
   <div slot="footer" class="dialog-footer">
     <el-button @click="dialogFormVisible = false">取 消</el-button>
     <el-button type="primary" @click="editConfirm">确 定</el-button>
   </div>
 </el-dialog>
 <el-dialog class="el-icon-sugar" title="🐱添加诊室宠物信息🐶" :visible.sync="dialogFormVisible1">
   <el-form :model="form1">
     <el-form-item label="姓名" :label-width="formLabelWidth">
       <el-input v-model="form1.name" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="年龄" :label-width="formLabelWidth">
       <el-input v-model="form1.age" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="品种" :label-width="formLabelWidth">
       <el-input v-model="form1.breed" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="病名" :label-width="formLabelWidth">
       <el-input v-model="form1.symptom" autocomplete="off" clearable></el-input>
     </el-form-item>
     <el-form-item label="诊室" :label-width="formLabelWidth">
       <!-- <el-input v-model="form1.cons" autocomplete="off" clearable></el-input> -->
       <el-select v-model="form1.cons" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
     </el-form-item>
     <el-form-item label="是否住院" style="margin-left: 70px;">
    <el-switch v-model="form1.zhuyuan" style="margin-right: 520px;"></el-switch>
  </el-form-item>
     <el-form-item label="描述" :label-width="formLabelWidth">
       <el-input v-model="form1.doc" autocomplete="off" clearable></el-input>
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
           name: '',
           age:'',
           breed: '',
           symptom:'',
           cons: '',
           doc:'',
           img:'',
           zhuyuan:''
         },
         form1: {
           id:'',
           name: '',
           age:'',
           breed:'',
           symptom:'',
           cons: '',
           doc:'',
           zhuyuan:''
         },
         options: [{
          value: '一号诊室',
          label: '一号诊室'
        }, {
          value: '二号诊室',
          label: '二号诊室'
        }, {
          value: '三号诊室',
          label: '三号诊室'
        }, {
          value: '四号诊室',
          label: '四号诊室'
        }],
 
         formLabelWidth: '120px',
         formRules : formRules,
       }
       },
 
 
     methods: {
 
       addUser(){
         this.dialogFormVisible1 = true;
       },
 
   addConfirm() {
     this.$api.add0({
         // id: this.form1.id,
         name: this.form1.name,
         age:this.form1.age,
         breed:this.form1.breed,
         symptom: this.form1.symptom,
         cons: this.form1.cons,  
         img:'',       
         doc: this.form1.doc,
         zhuyuan:this.form1.zhuyuan
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
         this.$api.del0({ id: row.id }).then(res => {
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
         this.form.symptom =  row.symptom;
         this.form.cons = row.cons;
         this.form.doc = row.doc;
         this.form.zhuyuan = row.zhuyuan;
         this.form.breed = row.breed;
 
 
         this.dialogFormVisible = true;
      console.log(this.form.id,'999999');
     },
     editConfirm() {
       this.$api.edit1({
         // id: this.form.id, 
         id: this.form.id,
         name: this.form.name,
         age: this.form.age,
         symptom: this.form.symptom,
         cons: this.form.cons,
         doc:this.form.doc,
         zhuyuan:this.form.zhuyuan,
         breed: this.form.breed,
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
   this.$api.petInfo().then(res =>{
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