<template>
  <div>
    <div class="container absolute-center">
      <span class="dot"></span>
      <span class="dot" style="background-color:#FFBD2E"></span>
      <span class="dot" style="background-color:#27C93F"></span>
      <q-btn id="copyBtn" @click="copyToclipboard">
        <q-icon size="30px" name="img:statics/copy-outline.png" />
      </q-btn>
      <br />
      <br />
      <div>
        <p class="script" id="script">fuck off</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    copyToclipboard() {
      var text = document.getElementById("script").innerText;
      var elem = document.createElement("textarea");
      document.body.appendChild(elem);
      elem.value = text;
      elem.select();
      document.execCommand("copy");
      document.body.removeChild(elem);
      this.$q.notify({
        message: 'متن کپی شد',
        color: 'purple-10',
        position: 'center',
        timeout: 100,
      })
    }
  }
};
</script>

<style scoped>
h6 {
  margin: 100px;
}

.dot {
  display: inline-block;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  background-color: #ff5f56;
  float: right;
  padding: 5px;
  margin: 4px;
}
.container {
  justify-content: center;
  direction: ltr;
  text-align: left;
  color: white;
  float: right;
  background-color: #151718;
  width: 1200px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 6px grey;
}
.script {
  /* text-align: right; */
  float: right;
  font-size: 23px;
  padding: 24px;
}
#copyBtn {
  box-shadow: 0px 0px 2px 2px grey;
  color: white;
  background-color: white;
}
</style>