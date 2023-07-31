<script setup></script>

<template>
  <div class="App">
    <div class="App__row">
      <NavigationBar v-if="$route.name !== 'Learning'" />
      <router-view />
    </div>
  </div>
</template>

<style>
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
</style>
