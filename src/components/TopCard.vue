<script setup></script>

<template>
  <router-link to="/learning" class="TopCard ">
    <!-- <div class="container__row"> -->
      <div class="TopCard__inner">
        <div class="TopCard__top">
          <div class="TopCard__topContent">
            <div class="TopCard__iconWrapper">
              <Icon name="graduation-cap" class="TopCard__icon" />
            </div>
            <div class="TopCard__text">
              <h1 class="TopCard__title">Learning</h1>
              <p class="TopCard__subtitle">Category В</p>
            </div>
          </div>

          <Icon name="arrow" class="TopCard__arrowIcon" />
        </div>
        <div class="TopCard__bottom">
          <ProgressBar />
        </div>
      </div>
    <!-- </div> -->
  </router-link>
</template>

<style scoped>
.TopCard {
  text-decoration: none;
   color: var(--black);
}
.TopCard__inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--white);
  border-radius: 20px;
  border: 1px solid #f3f3f3;
  padding: 24px;
}

.TopCard__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.TopCard__topContent {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 5px;
}

.TopCard__title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 3px;
}

.TopCard__subtitle {
  font-size: 14px;
  color: var(--grey);
}
.TopCard__iconWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
flex-shrink: 0;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: var(--coral-lite);
}

.TopCard__icon {
  width: 32px;
}

.TopCard__arrowIcon {
  width: 24px;
  flex-shrink: 0;
}

.TopCard__bottom {
  display: flex;
}

@media screen and (max-width: 320px) {
.TopCard__inner {
   padding: 20px;
}
.TopCard__topContent {
  gap: 14px;
}

.TopCard__title {
  font-size: 18px;
}

.TopCard__subtitle {
  font-size: 12px;
}
.TopCard__iconWrapper {
  width: 53px;
  height: 53px;
}

.TopCard__icon {
  width: 28px;
}

.TopCard__arrowIcon {
  width: 20px;
}

}
</style>
