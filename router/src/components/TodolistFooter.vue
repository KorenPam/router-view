<script setup>
import { ref, watch } from 'vue'
// 2、定义发射给父组件的方法
const emits = defineEmits(['showTasks'])
const activeTab = ref('全部')
const showTasks = (name) => {
  activeTab.value = name
  emits('showTasks', name)
}
watch(
  () => activeTab.value,
  (newValue, oldValue) => {
    if (newValue === '删除已完成') {
      activeTab.value = oldValue
    }
  }
)
</script>

<template>
  <div class="button-group">
    <button class="button" :class="{ active: activeTab === '全部' }" @click="showTasks('全部')">
      全部
    </button>
    <button class="button" :class="{ active: activeTab === '未完成' }" @click="showTasks('未完成')">
      未完成
    </button>
    <button class="button" :class="{ active: activeTab === '已完成' }" @click="showTasks('已完成')">
      已完成
    </button>
    <button class="button" @click="showTasks('删除已完成')">删除已完成</button>
  </div>
</template>

<style scoped>
.active {
  background-color: #efe111 !important;
}
.button-group {
  display: flex;
}

.button {
  flex: 1;
  border: none;
  outline: none;
  background-color: #1890ff;
  color: white;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
}
.button:hover {
  background-color: #40a9ff;
  border-color: #40a9ff;
}
</style>
