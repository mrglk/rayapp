<script setup>
import { cardsData, exploreData } from "../data/data";
</script>

<template>
  <div class="Home">
    <TopBar />
    <TopCard />
    <div class="Home__cards">
      <div class="Home__card" v-for="{ title, icon, highlight, link } in cardsData">
        <Card :iconName="icon" :title="title" :highlight="highlight" :link="link" />
      </div>
    </div>
    <div class="Home__explore">
      <div class="Home__exploreLink" v-for="{ title, icon, link } in exploreData">
        <ExploreLink :iconName="icon" :title="title" :link="link" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.Home {
  width: 100%;
}
.Home__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 24px;
}

.Home__card {
  width: calc(50% - 4px);
}
.Home__card:last-child {
  width: 100%;
}
.Home__explore {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

@media screen and (max-width: 320px) {
  .Home__cards {
    gap: 6px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 279px) {
  .Home__card {
    width: calc(100%);
  }
}
</style>
