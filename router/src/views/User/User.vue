<template>
  <div class="profile">
    <h1>个人简介</h1>
    <div class="info">
      <div class="details">
        <p><strong>姓名：</strong>{{ name }}</p>
        <p><strong>年龄：</strong>{{ age }}岁</p>
        <p><strong>学号</strong>{{ num }}</p>
        <p><strong>职业：</strong>{{ email }}</p>
      </div>
      <img
        class="user-img"
        src="https://th.bing.com/th?id=OIF.0ZJ%2fw9DQKI%2bQ0fiE7qAhaQ&rs=1&pid=ImgDetMain"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
const name = '王惠潮'
const age = 21
const num = '22002369'
const email = '2375778757@qq.com'
</script>

<style scoped>
.user-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
  object-position: top;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}
.profile {
  max-width: 600px;
  margin: auto;
  margin-top: 60px;
  padding: 20px;
}

.info {
  display: flex;
  align-items: center;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
}

.details {
  flex-grow: 1;
}

.bio {
  margin-top: 20px;
}
</style>
