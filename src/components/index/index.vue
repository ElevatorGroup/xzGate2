<template>
  <div class="hello">
    <div class="nav_left">导航</div>
    <div class="content">
      <router-link to="/layout/cockpit">领导驾驶舱</router-link>
      <router-link to="/layout/newsCenter">新闻中心</router-link>
      <router-link to="/layout/msgCenter">消息中心</router-link>
      <router-link to="/layout/waitDoCenter">待办中心</router-link>
      <router-link to="/layout/selfService">员工自助</router-link>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'Index',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  display: flex;
}
.hello .nav_left{
  width: 60px;
  height:700px;
  line-height: 500px;
  text-align: center;
  background-color: crimson;
}
.hello .content{
  width: 100%;
  height: 500px;
  line-height: 500px;
  text-align: center;
  background-color: bisque;
}
</style>
