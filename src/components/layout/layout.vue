<template>
  <div class="layout">
      <header class="header">头部</header>
      <section class="container"><router-view/></section>
      <footer class="footer">
          <p>Copyright &copy; www.Xzcsgdjt.com, All Rights Reserved.</p>
          <p>Email : xzcsgdjt@qq.com QQ : 5698401</p>
      </footer>
  </div>

</template>

<script>
    export default {

    }
</script>

<style>
.pd20{
  padding:0 20px;
}
.header{
  height: 60px;
  width: 100%;
  line-height: 60px;
  background-color: aqua;
  text-align: center;
}
.footer{
  height: 50px;
  width: 100%;
  background-color: #F6F8FA;
  text-align: center;
  position: fixed;
  bottom: 0;
  padding: 10px 0;
}
.container{
  width: 100%;
  position: absolute;
  top: 60px;
  bottom: 50px;
  overflow: auto;
}
.pageBox{
  padding: 65px 0 15px 0;
}
.breadnav{
  position: fixed;
  top: 60px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding:0 20px;
  background-color: #F6F8FA;
  z-index: 999;
}
</style>
