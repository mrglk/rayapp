<script setup></script>

<template>
  <div class="App">
    <div class="App__row">
      <router-view></router-view>
      <NavigationBar v-if="$route.name !== 'Learning'" />
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
}

body {
  font-family: var(--generalFont);
  background-color: var(--white-dirty);
  margin: auto;
  color: var(--black);
}

.App {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 48px;
  padding-bottom: 100px;
}

.App__row {
  position: relative;
  display: flex;
  flex-direction: column;
    flex: 1 0 auto;
  width: 100%;
  max-width: 360px;
  padding-left: 16px;
  padding-right: 16px;
}

img {
  max-width: 100%;
  height: auto;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.container__row {
  display: flex;
  width: 100%;
  max-width: 360px;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
