<script setup>
import { ref, provide, watch } from 'vue'
import TodolistHeader from '@/components/TodolistHeader.vue'
import TodolistFooter from '@/components/TodolistFooter.vue'
import TodolistList from '@/components/TodolistList.vue'

// 创建一个响应式变量来存储任务列表
const list = ref([])

// 创建一个响应式变量来存储已完成的任务列表
const finished = ref([])

// 创建一个响应式变量来存储未完成的任务列表
const unfinished = ref([])

// 从本地存储中获取任务列表
const storedList = localStorage.getItem('taskList')
if (storedList) {
  list.value = JSON.parse(storedList)
}

// 将任务列表分成已完成和未完成列表
list.value.forEach((task) => {
  if (task.isChecked) {
    finished.value.push(task)
  } else {
    unfinished.value.push(task)
  }
})

// 监听任务列表的变化，并将其保存到本地存储
watch(
  list,
  (newValue) => {
    localStorage.setItem('taskList', JSON.stringify(newValue))
  },
  { deep: true }
)
// 将任务列表和已完成、未完成的任务列表提供给子组件
provide('list', list)
provide('finished', finished)
provide('unfinished', unfinished)
// 创建一个响应式变量来存储当前显示的任务列表名称
const toname = ref()

// 响应式函数，用于更新当前显示的任务列表名称
const showTasks = (name) => {
  toname.value = name
}
</script>

<template>
  <div class="container">
    <div class="title">
      <h1>
        Todo-list<a href="https://gitee.com/korenpam/todo-list.git" class="vlink" target="_blank"
          >Gitee</a
        >
      </h1>
    </div>
    <div class="comment-wrapper">
      <!-- 待办事项列表头部组件 -->
      <TodolistHeader></TodolistHeader>
      <!-- 待办事项列表组件 -->
      <TodolistList :toname="toname"></TodolistList>
      <!-- 待办事项列表底部组件 -->
      <TodolistFooter @showTasks="showTasks"></TodolistFooter>
    </div>
  </div>
</template>

<style scoped>
.vlink {
  margin-left: 20px;
  color: rgb(44, 185, 44);
  font-size: 28px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  transition: color 0.3s ease-in-out;
}
h1 {
  position: relative;
  color: rgb(44, 185, 44);
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 400px;
  margin-top: 60px;
}
.comment-wrapper {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
}
</style>
