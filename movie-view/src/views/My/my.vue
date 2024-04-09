<template>
    <div>
        <div class="image">
            <img src="@/assets/Hippopx.jpg" alt="">
        </div>

        <div>
            <h1 style="text-align: center;">AixPam</h1>
        </div>

        <div class="button">
            <el-button>退出登录</el-button>
            <el-button>修改密码</el-button>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    img{
        width: 400px;
        height: 400px;
        border-radius: 400px;
    }
    .image{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
        margin-left: 100px;
        margin-right: 100px;
        border-radius: 400px;
    }
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        margin:50px 100px

    }
</style>