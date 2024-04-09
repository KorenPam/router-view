<template>
  <div class="container">
      <router-link to="/home" class="nav-link" @click="inputShow = false">首页</router-link>

      <router-link to="/channellist" class="nav-link" @click="inputShow = false">频道</router-link>

      <router-link to="/my" class="nav-link" @click="inputShow = false">我的</router-link>

      <div class="layout-search">
        <div class="layout-search-container">
          <el-input
            class="layout-search-input"
            v-show="inputShow"
            v-model="inputValue"
            placeholder="搜索想看的电影"
            :prefix-icon="Search"
          />
        </div>
        <router-link to="/search" class="nav-link search-link">
          <el-icon class="layout-search-icon" @click="handleSearch"><Search /></el-icon>
        </router-link>
      </div>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const inputValue = ref('')
const inputShow = ref(false)

const handleSearch = () => {
  if (inputValue.value.trim() === '' || inputShow.value === false) {
    inputShow.value = true
  } else {
    console.log(inputValue.value)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 32px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ff4500;
}

.layout-search-link {
  display: flex;
  align-items: center;
}

.layout-search-icon {
  font-size: 20px;
  color: #999;
  margin-right: 5px;
}

.layout-search-text {
  font-size: 14px;
  color: #666;
}

.layout-search {
  display: flex;
  align-items: center;
}
.layout-search-container {
  width: 239px;
}
</style>
