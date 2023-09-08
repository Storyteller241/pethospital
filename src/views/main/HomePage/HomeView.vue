<template>
  <div class="index-wrap">

   <div class="div1">
    <div class="index-right">
      <HomeSwiper02></HomeSwiper02>
      <!-- <HomeSwiper03></HomeSwiper03> -->
    </div>
    <el-divider style="color: #f0f0e2;"><span icon="el-icon-lollipop"></span></el-divider>
    <div class="contain2">
      <HomeCon></HomeCon>
    </div>

   </div>
  </div>

</template>

<script>

// @ is an alias to /src
import HomeSwiper02 from './HomeSwiper02.vue';
// import HomeSwiper03 from './HomeSwiper03.vue';
import HomeCon from './HomeCon.vue'


export default {
  name: 'HomeView',
  components: {
    HomeSwiper02,
    HomeCon
    // HomeSwiper03,

}
}
</script>
<style lang="less" scoped>
.index-wrap {
  .div1 {
    height: 1200px;
   background-color: #f0f0e2;
  }
  width: 1200px;
  margin: 0 auto;
}

.index-right {
  // float: left;
  width: 1200px;
}

</style>
