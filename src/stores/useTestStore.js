import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { questions } from "../data/questions.json";

export const useTestStore = defineStore("tests", () => {
  const testData = ref(JSON.parse(sessionStorage.getItem("testData")) || {});

  const handleTests = (id) => {
    testData.value[id] = !testData.value[id];
    sessionStorage.setItem("testData", JSON.stringify(testData.value));
  };

  const countOfPassedTests = computed(() => {
    if (Object.keys(testData.value).length === 0) {
      return 0;
    }
    
    return Object.keys(testData.value).filter((question) => !!testData.value[question]).length;
  })

  const getProgressStep = computed(() => {
    const passedPercent = (countOfPassedTests.value / questions.length) * 100;
    const step = 100 / 7;

    return Math.floor(passedPercent / step);
  });

  return { testData, handleTests, countOfPassedTests, getProgressStep };
});