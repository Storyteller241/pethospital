<template>
  <div class="zouma2">
    <el-carousel height="200px" direction="vertical" :autoplay="true" weight="100%">
    <el-carousel-item v-for="item in zouma2" :key="item.key">
      <img :src="item.url"  height="360px" weight="100%" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zouma2: [
      {
          id: '1',
          url: require('@/assets/slideShow02/1.jpg')
        },
        {
          id: '2',
          url: require('@/assets/slideShow02/2.jpg')
        },
        {
          id: '3',
          url: require('@/assets/slideShow02/3.jpg')
        },

      ]
    }
  }
}
</script>

<style>
zouma2 {
  width: 100%;
}


</style>