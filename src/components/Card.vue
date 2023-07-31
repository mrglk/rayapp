<script setup>
const props = defineProps({
  iconName: String,
  title: String,
  highlight: Boolean,
});
</script>

<template>
  <div :class="[{ 'Card--highlight': highlight }, 'Card']">
    <div class="Card__iconWrapper">
      <Icon :name="iconName" class="Card__icon" />
    </div>
    <p class="Card__title">{{ title }}</p>
  </div>
</template>

<style scoped>
.Card {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  background-color: var(--white);
  border-radius: 20px;
  border: 1px solid #f3f3f3;
  padding: 16px 12px;
  text-decoration: none;
  color: var(--black);
}

.Card__iconWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--purple-lite);
}

.Card__icon {
  width: 24px;
  fill: var(--purple);
}

.Card--highlight .Card__iconWrapper {
  background-color: var(--red-lite);
}

.Card--highlight .Card__icon {
  fill: var(--red);
}

.Card__title {
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}

@media screen and (max-width: 360px) {
  .Card {
    padding-top: 14px;
    padding-bottom: 14px;
  }
  .Card__iconWrapper {
    width: 35px;
    height: 35px;
  }
  .Card__icon {
    width: 20px;
  }

  .Card__title {
    font-size: 14px;
    line-height: 18px;
  }
}

@media screen and (max-width: 320px) {
  .Card__iconWrapper {
    width: 25px;
    height: 25px;
  }
  .Card__icon {
    width: 15px;
  }

  .Card__title {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
