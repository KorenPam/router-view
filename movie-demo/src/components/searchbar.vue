<script setup>
import { ref } from 'vue'
import SearchBottom from './searchbottom.vue'
const inputValue = ref('')
const isShow = defineModel()
const handlecancel = () => {
  inputValue.value = ''
  isShow.value = false
}
</script>

<template>
  <div class="search-bar">
    <div class="container">
      <div class="search-top">
        <div class="search-input">
          <i
            class="iconfont icon-sousuo"
            style="
              position: absolute;
              left: 10px;
              top: 50%;
              transform: translateY(-50%);
            "
          ></i>
          <input type="text" v-model="inputValue" />
        </div>
        <div class="search-cancel" @click="handlecancel">取消</div>
      </div>
      <SearchBottom></SearchBottom>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  background-color: #f0f0f0;
  padding: 10px 0;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    .search-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .search-input {
      position: relative;
      width: 100%;
      margin-left: 30px;
    }
  }
}

.search-input input {
  width: calc(100% - 30px);
  padding: 8px;
  padding-left: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
}

.search-cancel {
  width: 60px;
  color: #999;
  cursor: pointer;
}
</style>
