<template>
  <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in zouma" :key="item.id">
      <img :src="item.url"  height="360px" alt="">
    </el-carousel-item>
  </el-carousel>
</template>


<script>
export default {


  data() {
    return {
      zouma:[
        {
          id: '1',
          url: require('@/assets/slideShow/3.png')
        },
        {
          id: '2',
          url: require('@/assets/slideShow/2.png')
        },
        {
          id: '3',
          url: require('@/assets/slideShow/1.png')
        },
        {
          id: '4',
          url: require('@/assets/slideShow/4.png')
        },

      ]
    }
  }
}
</script>

<style>
.img-box{
    width: 100%;
    height: 100%;
  }
</style>