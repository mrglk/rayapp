import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { questions } from "../data/questions.json";

export const useTestStore = defineStore("tests", () => {
  const testData = ref(JSON.parse(sessionStorage.getItem("testData")) || {});

  const handleQuestion = (id) => {
    testData.value[id] = !testData.value[id];
    sessionStorage.setItem("testData", JSON.stringify(testData.value));
  };

  const countOfPassedQuestions = computed(() => {
    return Object.keys(testData.value).filter((id) => !!testData.value[id]).length;
  });

  const progressStep = computed(() => {
    const passedPercent = (countOfPassedQuestions.value / questions.length) * 100;
    const step = 100 / 7;

    return Math.floor(passedPercent / step);
  });

  return { testData, handleQuestion, countOfPassedQuestions, progressStep };
});
