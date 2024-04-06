<template>
  <a-carousel autoplay >
    <div class="image"><img src="@/assets/bridge.jpg" alt="" /></div>
    <div class="image"><img src="@/assets/landscape.jpg" alt="" /></div>
    <div class="image"><img src="@/assets/sunset.jpg" alt="" /></div>
    <div class="image"><img src="@/assets/sunset2.jpg" alt="" /></div>
  </a-carousel>
  <!-- <el-carousel autoplay height="150px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item" alt="" />
      </el-carousel-item>
      
    </el-carousel> -->
</template>

<style scoped>
:deep(.slick-slide) {
  margin-top: 60px;
  height: 751px;
  /* width: 80vw; */
}
.image{
  width: 10px;
}
</style>
<script setup>
// const imgs = ["@/assets/bridge.jpg", "@/assets/landscape.jpg", "@/assets/sunset.jpg", "@/assets/sunset2.jpg"] 
</script>