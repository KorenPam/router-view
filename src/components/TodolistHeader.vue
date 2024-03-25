<script setup>
import { ref, onMounted, inject } from 'vue'

// 从父组件注入未完成任务列表和总任务列表
const unfinished = inject('unfinished')
const list = inject('list')

// 创建一个响应式变量来存储待办事项的名称
const todoname = ref('')

// 创建一个引用，用于在组件挂载后将焦点设置到输入框
const inputRef = ref(null)
onMounted(() => {
  inputRef.value.focus()
})

// 添加待办事项的函数
const add = () => {
  // 检查待办事项名称是否为空
  if (!todoname.value.trim()) {
    alert('请输入待办事项')
    return
  }

  // 为总任务列表和未完成任务列表添加新任务
  const newTask = {
    id: +new Date(),
    name: todoname.value,
    isChecked: false
  }
  list.value.unshift(newTask)
  unfinished.value.unshift(newTask)

  // 清空输入框
  todoname.value = ''
}
</script>

<template>
  <div>
    <!-- 输入框 -->
    <input
      v-model="todoname"
      type="text"
      class="todo-header-input"
      placeholder="请输入待办事项"
      ref="inputRef"
      @keyup.enter="add"
    />
    <!-- 添加按钮 -->
    <button class="todo-header-button" @click="add">添加</button>
  </div>
</template>

<style scoped>
.todo-header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-header-input {
  width: 75%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 8px;
  font-size: 16px;
  outline: none;
}

.todo-header-button {
  padding: 5px 12px;
  border: 1px solid #1890ff;
  border-radius: 5px;
  background-color: #1890ff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
}

.todo-header-button:hover {
  background-color: #40a9ff;
  border-color: #40a9ff;
}
</style>
