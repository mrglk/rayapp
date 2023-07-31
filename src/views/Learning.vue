<script setup>
import { questions } from "../data/questions.json";
</script>

<template>
  <div class="Learning">
    <div class="Learning__top">
      <div class="Learning__backWrapper">
        <router-link to="/" class="Learning__back">
           <Icon name="arrow-left" class="Learning__backIcon" />
        </router-link>
      </div>
      <h2 class="Learning__header">Learning</h2>
    </div>
    <div class="Learning__titleWrapper">
      <p class="Learning__title">Tests</p>
    </div>
    <div class="Learning__questions">
      <div v-for="{ id } in questions" class="Learning__question">
        <Question :number="id" :done="false" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.Learning {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}

.Learning__top {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 56px;
}

.Learning__backWrapper {
    width: 24px;
}
.Learning__back {
  display: flex;
}

.Learning__backIcon {
  width: 24px;
}

.Learning__header {
  font-size: 18px;
  font-weight: 500;
}

.Learning__titleWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 26px;
}
.Learning__title {
  text-align: center;
  padding: 14px 0;
  width: 109px;
  border-bottom: 2px solid var(--coral);
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  color: var(--coral);
}
.Learning__questions {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
}

.Learning__question {
  width: calc(25% - 5px);
}

@media screen and (max-width: 360px) {
.Learning__question {
  width: calc(33.33% - 5px);
}
}

@media screen and (max-width: 320px) {
  .Learning__top {
    gap: 13px;
  }
  .Learning__header {
    font-size: 16px;
  }

  .Learning__backIcon {
    width: 22px;
  }

  .Learning__title{
    padding: 12px 0;
    width: 90px;
}
}
</style>
