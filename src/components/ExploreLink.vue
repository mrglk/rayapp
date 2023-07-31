<script setup>
const props = defineProps({
  iconName: String,
  title: String,
  link: String,
});
</script>

<template>
  <div class="ExploreLink">
    <div class="ExploreLink__iconWrapper">
      <Icon :name="iconName" class="ExploreLink__icon" />
    </div>
    <p class="ExploreLink__title">{{ title }}</p>
  </div>
</template>

<style scoped>
.ExploreLink {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--black);
  text-decoration: none;
  max-width: 58px;
}

.ExploreLink__iconWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: var(--coral);
}

.ExploreLink__icon {
  width: 28px;
  fill: var(--white);
}
.ExploreLink__title {
  text-align: center;
  font-size: 14px;
  line-height: 20px;
}

@media screen and (max-width: 320px) {
  .ExploreLink {
    gap: 6px;
  }
  .ExploreLink__iconWrapper {
    width: 50px;
    height: 50px;
  }

  .ExploreLink__icon {
    width: 24px;
  }

  .ExploreLink__title {
    font-size: 12px;
    line-height: 17px;
  }
}

@media screen and (max-width: 279px) {
  .ExploreLink__iconWrapper {
    width: 45px;
    height: 45px;
  }

  .ExploreLink__icon {
    width: 20px;
  }

  .ExploreLink__title {
    font-size: 10px;
    line-height: 14px;
  }
}
</style>
