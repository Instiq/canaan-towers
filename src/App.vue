<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
@import url("./assets/css/style.scss");
@import url("./assets/css/sass/_modal.scss");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.chart {
  z-index: 400;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

</style>
