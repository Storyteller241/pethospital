<template>
<div class="register">
 <div class="left">
  <el-card shadow="always">
    <span>猫狗哺乳类普通家宠</span>
    <el-button @click="dialogVisible = true" style="margin-left: 40px;">预约挂号</el-button>
  </el-card>
   <el-card style="width: 220px; height: 400px;margin-top: 10px;margin-left: 10px;" class="card">
    <img src="@/assets/images/doc1.jpg" alt="" style="width: 100%;">
    <span>
      <el-row style="margin-top: 10px;">
        李大锤医生
      </el-row>
      <el-row>
        年龄：35 岁
      </el-row>
      <el-row>
        中级兽医师
      </el-row>
    </span>
   </el-card>
   <el-card style="width: 220px; height: 400px;margin-top: 10px;margin-left: 10px;" class="card">
    <img src="@/assets/images/doc11.jpg" alt="" style="width: 100%;">
    <span>
      <el-row style="margin-top: 0px;">
        李三锤医生
      </el-row>
      <el-row>
        年龄：28 岁
      </el-row>
      <el-row>
        低级兽医师
      </el-row>
    </span>
   </el-card >
   <el-card style="width: 220px; height: 400px;margin-top: 10px;margin-left: 10px;" class="card">
    <img src="@/assets/images/doc3.jpg" alt="" style="width: 100%;">
    <span>
      <el-row style="margin-top: 10px;">
        李四锤医生
      </el-row>
      <el-row>
        年龄：55 岁
      </el-row>
      <el-row>
        高级兽医师
      </el-row>
    </span>
   </el-card >
   <el-card style="width: 220px; height: 400px;margin-top: 10px;margin-left: 10px;" class="card">
    <img src="@/assets/images/doc4.jpg" alt="" style="width: 100%;">
    <span>
      <el-row style="margin-top: 10px;">
        李二锤医生
      </el-row>
      <el-row>
        年龄：28 岁
      </el-row>
      <el-row>
        中级兽医师
      </el-row>
    </span>
   </el-card >
 </div>
 <div class="right">
  <el-card shadow="always">
    <span>其余家宠</span>
    <el-button @click="dialogVisible = true" style="margin-left: 40px;">预约挂号</el-button>
  </el-card>
  <el-card style="width: 220px; height: 450px; margin-top: 10px;margin-left: 10px;" class="card">
    <img src="@/assets/images/doc6.jpg" alt="" style="width: 100%;">
    <span>
      <el-row style="margin-top: 10px;">
        李六锤医生
      </el-row>
      <el-row>
        年龄：35 岁
      </el-row>
      <el-row>
        中级兽医师
      </el-row>
    </span>
   </el-card>
   <el-card style="width: 220px; height: 450px;margin-top: 10px;margin-left: 10px;" class="card">
    <img src="@/assets/images/doc10.jpg" alt="" style="width: 100%;">
    <span>
      <el-row style="margin-top: 0px;">
        李五锤医生
      </el-row>
      <el-row>
        年龄：28 岁
      </el-row>
      <el-row>
        低级兽医师
      </el-row>
    </span>
   </el-card >
 
 </div>
 <el-dialog class="el-icon-sugar" title="🐱请填写预约信息🐶" :visible.sync="dialogVisible">
  <el-form :model="form" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="form.username" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="form.userage" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="form.tel"  autocomplete="off" clearable input   οninput="if(value.length>11) value=value.slice(0,11)"></el-input>
    </el-form-item> 
    <el-form-item label="宠物姓名">
      <el-input v-model="form.petname" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="宠物年龄">
      <el-input v-model="form.petage" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="宠物品种" >
      <el-input v-model="form.breed" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="宠物病状" >
      <el-input v-model="form.symptom" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="选择医生" >
      <el-select v-model="form.doc" placeholder="请选择要预约医生">
      <el-option label="李大锤" value="李大锤"></el-option>
      <el-option label="李二锤" value="李二锤"></el-option>
      <el-option label="李三锤" value="李三锤"></el-option>
      <el-option label="李四锤" value="李四锤"></el-option>
    </el-select>
    </el-form-item>
    

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addConfirm">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
export default {



  data() {
      return {
        dialogVisible: false,
        form: {
          username: '',
          userage:'',
          petname: '',
          petage: '',
          tel:'',
          breed:'',
          symptom:'',
          doc: ''
        }
      };
    },
    methods: {

      addConfirm() {
     this.$api.add1({
         // id: this.form1.id,
         username: this.form.username,
         userage:this.form.userage,
         tel:this.form.tel,
         petname:this.form.petname,
         petage:this.form.petage,
         breed:this.form.breed,
         symptom: this.form.symptom,       
         doc: this.form.doc,
       }).then(res => {
         if(res.data.status === 200){
           this.dialogFormVisible1 = false;
           // this.$bus.$emit("refresh",true)
           console.log('添加成功');
         }
         
       }).catch(error => {
         console.log(error);
       })
       this.dialogVisible = false;
       this.reload()
   },

    }
  }
</script>

<style scoped>
.register {
  width: 1200px;
  height: 1000px;
  background: #efeee3;
  position:absolute;
  margin-left: 150px;
}
.left {
  margin-left: 20px;
  margin-top: 20px;
  width: 550px;
  height: 1000px;
  background: #f8f8f8;
float: left;
}
.right {
  margin-right: 20px;
  margin-top: 20px;
  width: 550px;
  height: 1000px;
  background: #f8f8f8;
float: right;
}
.card {
  display:inline-block;
}
</style>