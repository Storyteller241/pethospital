<template>
<div class="HomCon1">
<div>
  <el-row :gutter="20">
  <el-col :span="10">
    <el-card :body-style="{ padding: '0px' }" class="HomeCard" shadow="always" >
    
      <div>
        <span>
          <el-card shadow="hover" style="width: 450px; height: 150px;margin-left: 10px;">
            <el-col style="float: left; width: 100px; height: 100px;"><img src="../../../assets/images/666.jpg" ></el-col>
            <span style="font-size: 30px;font-weight: 600;color: rgba(193, 174, 145, 0.688);cursor: pointer;" @click="guahao">
              📃预约挂号📃
            </span>
            <el-card shadow="always">
              快速挂号，治疗保障
            </el-card>
          </el-card>
        </span>
      </div>
    </el-card>
  </el-col>
  <el-col :span="12">
    <el-card :body-style="{ padding: '0px' }" class="HomeCard" shadow="always" >
    
      <div>
        <span>
           <el-card shadow="hover" style="width: 450px; height: 150px;">
          <el-col style="float: left; width: 100px; height: 100px;"><img src="../../../assets/images/11.jpg" ></el-col>
          <span style="font-size: 30px;font-weight: 600;color: rgba(193, 174, 145, 0.688);cursor: pointer;" @click="guahao">
              ✨养宠小Tips🌷
            </span>
            <el-card shadow="always">
              宠物生病怎么办？？
            </el-card>
         </el-card></span>
      </div>
    </el-card>
  </el-col>
 
</el-row>
<el-row>
  <el-divider></el-divider>
</el-row>
<el-row :gutter="20">
  <el-col :span="10">
    <el-card :body-style="{ padding: '0px' }" class="HomeCard" shadow="always" >
    
      <div>
        <span><el-card shadow="hover" style="width: 450px; height: 150px;margin-left: 10px;">
            <el-col style="float: left; width: 100px; height: 100px;"><img src="../../../assets/images/65.jpg" ></el-col>
            <span style="font-size: 30px;font-weight: 600;color: rgba(193, 174, 145, 0.688);cursor: pointer;" @click="guahao">
              💗公益之路💕
            </span>
            <el-card shadow="always">
              热爱公益，公益奉献
            </el-card>
          </el-card></span>
      </div>
    </el-card>
  </el-col>
  <el-col :span="12">
    <el-card :body-style="{ padding: '0px' }" class="HomeCard" shadow="always" >
    
      <div>
        <span><el-card shadow="hover" style="width: 450px; height: 150px;">
            <el-col style="float: left; width: 100px; height: 100px;"><img src="../../../assets/images/88.jpg" ></el-col>
            <span style="font-size: 30px;font-weight: 600;color: rgba(193, 174, 145, 0.688);cursor: pointer;" @click="guahao">
              💕爱心领养💕
            </span>
            <el-card shadow="always">
              绝美小流浪带回家~
            </el-card>
          </el-card></span>
      </div>
    </el-card>
  </el-col>
 
</el-row>
</div>
<div style="width: 1000px; height: 600px; background: #ffffff; margin: 0 auto; margin-top: 40px;">
 <el-card>
  <span style="font-size: 30px;font-weight: 600;color: rgba(193, 174, 145, 0.688);">🩺医院风采🧪</span>
 </el-card>
 <el-card style="width: 400px;height: 400px;margin-left: 0px;margin-top: 30px;display: inline-block;">
<img src="@/assets/images/yy.jpg" alt="" style="width: 100%;height: 100%;"> </el-card>
 <el-card style="width: 400px;height: 400px;margin-left: 50px;margin-top: 30px;display: inline-block;"> 
  <img src="@/assets/images/yy2.jpg" alt="" style="width: 100%;height: 100%;"></el-card>
  <el-card style="width: 400px;height: 400px;margin-right: 50px;margin-top: 30px;display: inline-block;"> 
  <img src="@/assets/images/yy2.jpg" alt="" style="width: 100%;height: 100%;"></el-card>
  <el-card style="width: 400px;height: 400px;margin-left: 0px;margin-top: 30px;display: inline-block;">
<img src="@/assets/images/yy.jpg" alt="" style="width: 100%;height: 100%;"> </el-card>

</div>
</div>
</template>

<script>
export default {


  methods: {
    guahao() {
      this.$router.push('/petregister');
    }
  }
}
</script>

<style>

.HomeCard {

  width: 600px;
  height: 150px;
  margin-left: 40px;
  margin-right: 20px;
  background-color: #fff;
  border:solid;
  border-radius: 30px;
}
.HomCon1 .HomeCard {
 margin-right: 20px !important;
 margin-left: 20px;
}
</style>