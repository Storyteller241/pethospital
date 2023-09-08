<template>
  <div class="register">
   <div class="left">
    <el-card shadow="always">
      <span><i class="el-icon-umbrella"></i>爱心领养即同意本院领养协议</span>
      <el-button @click="dialogVisible1 = true" style="margin-left: 40px;">爱心领养</el-button>
    </el-card>
     <el-card style="width: 400px; height: 350px;margin-top: 10px;margin-left: 10px;" class="card">
      <img src="@/assets/images/pet1.jpg" alt="" style="width: 100%;">
      <span>
        <el-row style="margin-top: 10px;">
          姓名：小花
        </el-row>
        <el-row>
          年龄：约5 岁
        </el-row>
        <el-row>
         状态： 已绝育、已打疫苗、除虫，亲人，活泼。
        </el-row>
      </span>
     </el-card>
     <el-card style="width: 400px; height: 350px;margin-top: 10px;margin-left: 10px;" class="card">
      <img src="@/assets/images/pet2.jpg" alt="" style="width: 100%;">
      <span>
        <el-row style="margin-top: 0px;">
          姓名：啊黄
        </el-row>
        <el-row>
          年龄：约 3 岁
        </el-row>
        <el-row>
         状态： 已除虫、已打疫苗，性格温和，亲人。
        </el-row>
      </span>
     </el-card >
     <el-card style="width: 400px; height: 400px;margin-left: 10px;" class="card">
      <img src="@/assets/images/pet3.jpg" alt="" style="width: 100%;">
      <span>
        <el-row style="margin-top: 10px;">
        姓名：小白
        </el-row>
        <el-row>
          年龄：1 岁
        </el-row>
        <el-row>
          状态： 已除虫、已绝育、已打疫苗，活泼，粘人。
        </el-row>
      </span>
     </el-card >
     <el-card style="width: 400px; height: 360px;margin-top: 10px;margin-left: 10px;" class="card">
      <img src="@/assets/images/pet4.jpg" alt="" style="width: 100%;">
      <span>
        <el-row style="margin-top: 10px;">
          姓名：陛下
        </el-row>
        <el-row>
          年龄：2 岁
        </el-row>
        <el-row>
          状态： 已绝育、已打疫苗，不太亲人。
        </el-row>
      </span>
     </el-card >
     <el-card style="width: 400px; height: 350px;margin-top: 10px;margin-left: 10px;" class="card">
      <img src="@/assets/images/pet8.jpg" alt="" style="width: 100%;">
      <span>
        <el-row style="margin-top: 10px;">
          姓名： 小可怜
        </el-row>
        <el-row>
          年龄：8 个月
        </el-row>
        <el-row>
          状态： 已绝育、已打疫苗，性格稍微怯懦。
        </el-row>
      </span>
     </el-card>
     <el-card style="width: 400px; height: 350px;margin-top: 10px;margin-left: 10px;" class="card">
      <img src="@/assets/images/pet6.jpg" alt="" style="width: 100%;">
      <span>
        <el-row style="margin-top: 0px;">
          姓名：美丽
        </el-row>
        <el-row>
          年龄：1 岁
        </el-row>
        <el-row>
          状态： 已打疫苗、已绝育，警惕，但不伤害人。
        </el-row>
      </span>
     </el-card >
     <el-card style="width: 400px; height: 350px;margin-top: 10px;margin-left: 10px;" class="card">
      <img src="@/assets/images/pet7.jpg" alt="" style="width: 100%;">
      <span>
        <el-row style="margin-top: 10px;">
          姓名：喵老大
        </el-row>
        <el-row>
          年龄：4 岁
        </el-row>
        <el-row>
          状态： 已打疫苗、已绝育，性格强势，欺猫太甚。
        </el-row>
      </span>
     </el-card>
     <el-card style="width: 400px; height: 380px;margin-top: 10px;margin-left: 10px;" class="card">
      <img src="@/assets/images/pet9.jpg" alt="" style="width: 100%;">
      <span>
        <el-row style="margin-top: 0px;">
          姓名：黑旋风
        </el-row>
        <el-row>
          年龄：2 岁
        </el-row>
        <el-row>
          状态： 已绝育、已打疫苗，性格亲人。
        </el-row>
      </span>
     </el-card >
   </div>
   <el-dialog :visible.sync="dialogVisible1">
   <el-card>
    <el-card style="margin-bottom: 20px;"><span>爱心领养协议</span></el-card>
    <el-card style="margin-bottom: 20px;">
      <span style="margin-top: 20px;">
      1、在接收前，有权要求甲方提供关于领养猫包括健康状况、性格、爱好、生活习惯等在内之真实情况，并进行初
步观察及接触。
2、与家人做必要的沟通及商议，不得因家人反对、婚姻、生育、工作变动等原因抛弃领养猫。
3、为领养猫提供猫粮或泊制新鲜的纯肉类食品；提供洁净的饮用水。
4、在室内提供适当的活动空间，进行家庭喂养，不得放养，并保证领养猫安全。
5、定期为领养猫注射疫苗。适龄猫应在适当的时候完成绝育手术。
6、在必要时，为领养猫提供必要的医疗措施。决不可以在猫咪生病时放弃对猫咪的治疗。
7、在接收领养猫后的适当时间内，协助甲方及“啊嘛咚咚宠物医院”对喂养情况进行了解及回访。
8、在无法继续喂养领养猫的情况下，将猫交回甲方或“宠物之家”，不得未经宠物之家同意而自行转交他人或将
其抛弃。
    </span>
    </el-card>
    <el-button @click="dialogVisible = true;dialogVisible1 = false">我已阅读此协议</el-button>
   </el-card>
   </el-dialog>
   <el-dialog class="el-icon-sugar" title="🐱请填写领养信息🐶" :visible.sync="dialogVisible">
    <el-form :model="form" label-width="auto">
      <el-form-item label="领养人姓名">
        <el-input v-model="form.name" autocomplete="off" clearable></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age" autocomplete="off" clearable></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.tel"  autocomplete="off" clearable input   οninput="if(value.length>11) value=value.slice(0,11)"></el-input>
      </el-form-item> 
      <el-form-item label="邮箱">
        <el-input v-model="form.email"  autocomplete="off" clearable input   οninput="if(value.length>11) value=value.slice(0,11)"></el-input>
      </el-form-item> 

      <el-form-item label="选择领养的小宠物" >
        <el-select v-model="form.doc" placeholder="请选择宠物">
        <el-option label="小花" value="小花"></el-option>
        <el-option label="啊黄" value="啊黄"></el-option>
        <el-option label="美丽" value="美丽"></el-option>
        <el-option label="喵老大" value="喵老大"></el-option>
        <el-option label="小白" value="小白"></el-option>
        <el-option label="小可怜" value="小可怜"></el-option>
        <el-option label="黑旋风" value="黑旋风"></el-option>
        <el-option label="陛下" value="陛下"></el-option>
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
          dialogVisible1: false,
          form: {
            name: '',
            age:'',
            petname: '',
            tel:'',
            email:'',
            breed:'',
            symptom:'',
            desc: '',
            doc: ''
          }
        };
      },
      methods: {
  
        addConfirm() {
       this.$api.add1({
           // id: this.form1.id,
           name: this.form.name,
           age:this.form.age,
           breed:this.form.breed,
           symptom: this.form.symptom,
           cons: this.form.cons,         
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
  
  <style>
  .register {
    width: 1200px;
    height: 1700px;
    background: #efeee3;
    position:absolute;
    margin-left: 150px;
  }
  .left {
    margin-left: 20px;
    margin-top: 20px;
    width: 1100px;
    height: 1700px;
    background: #f8f8f8;
  float: left;
  }

  .card {
    display:inline-block;
  }
  </style>