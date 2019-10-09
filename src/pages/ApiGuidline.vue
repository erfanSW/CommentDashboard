<template>
  <div class="container">
    <span class="dot"></span>
    <span class="dot" style="background-color:#FFBD2E"></span>
    <span class="dot" style="background-color:#27C93F"></span>
    <span>hell</span>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.dot {
  display: inline-block;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  background-color: #ff5f56;
  float: right;
  margin: 4px;
}
.container {
  margin: 300px;
  direction: ltr;
  text-align: left;
  float: right;
  background-color: black;
  width: 1200px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 6px grey;
}
.container:hover {
  box-shadow: 0px 0px 2px 2px grey;

}
</style>