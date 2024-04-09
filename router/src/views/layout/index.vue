<template>
  <div class="nav-container">
    <div class="nav">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/todolist">Todolist</router-link></li>
        <li><router-link to="/user">个人简介</router-link></li>
      </ul>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {}
</script>

<style scoped>
.nav-container {
  position: fixed; 
  top: 0;
  width: 100%; 
  z-index: 1000; 
}

.nav {
  margin: 0;
  background-color: #ffffff;
  padding: 20px 0;
  border-bottom: #918f8f solid 2px;
}

.nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.nav ul li {
  display: inline;
  margin-right: 20px;
}

.nav ul li:last-child {
  margin-right: 0;
}

.nav ul li a {
  color: #000000;
  text-decoration: none;
  font-weight: bold;
}

.nav ul li a:hover {
  color: #1346d3;
  border-bottom: #1346d3 solid 2px;
}
</style>
