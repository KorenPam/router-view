<script setup>
import { onMounted, ref, inject, watch } from 'vue'
import { Checkbox } from 'ant-design-vue'

// 定义 props
const props = defineProps({
  toname: {
    type: String
  }
})

// 在组件挂载时初始化列表
onMounted(() => {
  changeList()
})

// 创建一个响应式变量来存储当前显示的任务列表
const arrlist = ref([])

// 注入未完成、已完成和总任务列表
const unfinished = inject('unfinished')
const finished = inject('finished')
const list = inject('list')

// 处理复选框变化事件
const changeCheckBox = () => {
  // 更新总任务列表
  finished.value = []
  unfinished.value = []
  list.value.forEach((task) => {
    if (task.isChecked) {
      finished.value.push(task)
    } else {
      unfinished.value.push(task)
    }
  })
  changeList(props.toname)
}

// 删除任务
const del = (id) => {
  unfinished.value = unfinished.value.filter((item) => item.id !== id)
  finished.value = finished.value.filter((item) => item.id !== id)
  list.value = unfinished.value.concat(finished.value)
  changeList(props.toname)
}

// 更新显示的任务列表
const changeList = (namenow) => {
  let newList = list.value
  switch (namenow) {
    case '未完成':
      newList = unfinished.value
      console.log(1)
      break
    case '已完成':
      newList = finished.value
      console.log(2)
      break
    default:
      console.log(3)
      break
  }
  // 只有当 newList 与当前 arrlist 的引用不同时才更新 arrlist
  if (newList !== arrlist.value) {
    arrlist.value = newList
  }
}

// 监听 props 的变化
watch(
  () => props.toname,
  (newValue, oldValue) => {
    if (newValue === '删除已完成') {
      // 当选择的是删除已完成时，清空已完成任务列表和未完成任务列表，并更新显示的列表
      finished.value = []
      list.value = list.value.filter((item) => item.isChecked !== true)
      unfinished.value = unfinished.value.filter((item) => item.isChecked !== true)
      changeList(oldValue)
    } else {
      // 其他情况下，直接更新显示的列表
      changeList(newValue)
    }
  }
)
</script>

<template>
  <div class="comment">
    <ul class="comment-list">
      <li class="todo-list" v-for="(item, index) in arrlist" :key="item.id">
        <Checkbox
          :checked="item.isChecked"
          @change="changeCheckBox"
          @click="item.isChecked = !item.isChecked"
          >{{ item.name }}</Checkbox
        >
        <button class="delete-button" @click="del(item.id)">Del</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.comment-list {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  width: 420px;
}
.comment {
  border: 1px;
}
.todo-list {
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #eee;
}
.delete-button {
  margin-left: auto;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #ff7875;
}
</style>
