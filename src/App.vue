<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("./assets/css/style.scss");
@import url("./assets/css/sass/_modal.scss");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

*{
  margin: 0;
}


.flex--1 {
    display: flex;
}

.flex--2 {
    display: flex;
    align-items: center;
}

.flex--3 {
    display: flex;
    flex-direction: column;
}

button, button:focus {
  outline: none;
  border: none;
}

</style>
