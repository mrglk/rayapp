<script setup>
const props = defineProps({
  number: String,
  isDone: Boolean,
});
</script>

<template>
  <button :class="[{ 'Question--active': isDone }, 'Question']">
    <Icon name="question-bg" class="Question__bg" />
    <p class="Question__num">{{ number }}</p>
    <Icon name="check-circle" class="Question__doneMark" />
  </button>
</template>

<style scoped>
.Question {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 79px;
  height: 79px;
  background-color: transparent;
  border: none;
}
.Question__bg {
  position: absolute;
  width: 79px;
  top: 0;
  left: 0;
}
.Question__num {
  position: relative;
  z-index: 1;
  font-size: 18px;
  color: var(--black);
}
.Question__doneMark {
  display: none;
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 1;
}
.Question--active .Question__doneMark {
  display: block;
}
</style>
