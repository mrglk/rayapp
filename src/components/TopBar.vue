<script setup></script>

<template>
  <div class="TopBar">
    <div class="TopBar__inner">
      <h2 class="TopBar__title">Ray Driving Theory</h2>
      <div class="TopBar__buttons">
        <button class="TopBar__button">
          <Icon name="crown" class="TopBar__icon" />
        </button>
        <button class="TopBar__button">
          <Icon name="fire" class="TopBar__icon" />
          <span>13</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.TopBar {
  height: 56px;
}
.TopBar__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
}
.TopBar__title {
  font-size: 18px;
  font-weight: 500;
  margin-right: 5px;
}

.TopBar__buttons {
  display: flex;
  gap: 8px;
}

.TopBar__button {
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: var(--white);
  padding: 4px 6px;
  border: none;
  border-radius: 8px;
}

.TopBar__button span {
  font-size: 14px;
  font-weight: 500;
  color: var(--black);
}

.TopBar__icon {
  width: 24px;
}

@media screen and (max-width: 320px) {
  .TopBar__title {
    font-size: 16px;
  }

  .TopBar__buttons {
    gap: 6px;
  }

  .TopBar__button span {
    font-size: 12px;
  }

  .TopBar__icon {
    width: 20px;
  }
}
</style>
