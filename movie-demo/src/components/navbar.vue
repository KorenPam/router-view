<script setup>
import { ref } from 'vue'
import SearchBar from '@/components/searchbar.vue'

const isShow = ref(false)
</script>

<template>
  <div class="navbar">
    <div class="nav-container" v-show="!isShow">
      <div><i class="iconfont icon-rili"></i></div>
      <div class="routers">
        <div class="router-list">
          <router-link to="/findview"
            >发现
            <p :class="{ p_active: $route.path === '/findview' }"></p>
          </router-link>
        </div>
        <div class="router-list">
          <router-link to="/channelview"
            >频道
            <p :class="{ p_active: $route.path === '/channelview' }"></p>
          </router-link>
        </div>
        <div class="router-list">
          <router-link to="/myview"
            >我的
            <p :class="{ p_active: $route.path === '/myview' }"></p>
          </router-link>
        </div>
      </div>
      <div>
        <i
          class="iconfont icon-sousuo"
          style="cursor: pointer"
          @click="isShow = true"
        ></i>
      </div>
    </div>
    <SearchBar v-show="isShow" v-model="isShow"></SearchBar>
  </div>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
}
.iconfont {
  font-size: 25px;
}
.routers {
  display: flex;
  align-items: center;
  height: 50px;
  line-height: 45px;
  font-size: 14px;
  font-weight: bold;
}
.router-list {
  padding: 0 5px;
}
.router-list a {
  color: rgb(131, 129, 129);
  text-decoration: none;
  &.router-link-active {
    color: black;
  }
}
.router-list a:hover {
  color: black;
  p {
    height: 4px;
    background-color: black;
  }
}
.p_active {
  height: 4px;
  background-color: black;
}
</style>
