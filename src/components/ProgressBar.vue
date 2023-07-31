<script setup>
import { questions } from "../data/questions.json";
import { useTestStore } from "../stores/useTestStore";
const { countOfPassedQuestions, progressStep } = useTestStore();

</script>

<template>
  <div class="ProgressBar">
    <p class="ProgressBar__title">{{ countOfPassedQuestions }} questions out of {{ questions.length }} passed</p>
    <div class="ProgressBar__line">
      <div v-for="index in 7" :key="index" :class="[{ 'ProgressBar__step--fill': index <= progressStep }, 'ProgressBar__step']"></div>
    </div>
  </div>
</template>

<style scoped>
.ProgressBar {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.ProgressBar__title {
  font-size: 14px;
  margin-bottom: 8px;
}

.ProgressBar__line {
  display: flex;
  justify-content: space-between;
  height: 6px;
  width: 100%;
}
.ProgressBar__step {
  width: 13%;
  height: 6px;
  border-radius: 5px;
  background-color: var(--green-lite);
}
.ProgressBar__step--fill {
  background-color: var(--green);
}

@media screen and (max-width: 320px) {
  .ProgressBar__title {
    font-size: 12px;
  }

  .ProgressBar__line,
  .ProgressBar__step {
    height: 5px;
  }
}
</style>
