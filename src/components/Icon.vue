<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: false,
  },
});

const icon = defineAsyncComponent(() => import(`../assets/svg/${props.name}.svg`));
</script>

<template>
  <component :is="icon" :class="class" />
</template>
