<script setup></script>

<template>
  <section class="NavigationBar">
    <div class="NavigationBar__row">
      <nav class="NavigationBar__links">
        <a href="#" class="NavigationBar__link NavigationBar__link--active">
          <div class="NavigationBar__iconWrapper">
            <Icon name="home" class="NavigationBar__icon" />
          </div>
          <span class="NavigationBar__title">Home</span>
        </a>
        <a href="#" class="NavigationBar__link">
          <div class="NavigationBar__iconWrapper">
            <Icon name="route" class="NavigationBar__icon" />
          </div>
          <span class="NavigationBar__title">Your plan</span>
        </a>
        <a href="#" class="NavigationBar__link">
          <div class="NavigationBar__iconWrapper">
            <Icon name="ranking" class="NavigationBar__icon" />
          </div>
          <span class="NavigationBar__title">Leaderboard</span>
        </a>
        <a href="#" class="NavigationBar__link">
          <div class="NavigationBar__iconWrapper">
            <Icon name="user" class="NavigationBar__icon" />
          </div>
          <span class="NavigationBar__title">Profile</span>
        </a>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.NavigationBar {
  position: fixed;
  bottom: 0;
  left: calc(50% - 180px);
  padding: 8px 33px;
  background-color: var(--white);
  border-radius: 24px 24px 0px 0px;
  max-width: 360px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.NavigationBar__links {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.NavigationBar__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.NavigationBar__iconWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  margin-bottom: 4px;
  border-radius: 12px;
  flex-shrink: 0;
}
.NavigationBar__icon {
  width: 24px;
  fill: var(--grey);
}

.NavigationBar__icon path {
  fill: var(--grey);
}

.NavigationBar__title {
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--grey);
}

.NavigationBar__link--active .NavigationBar__iconWrapper {
  background-color: var(--coral-lite);
}

.NavigationBar__link--active .NavigationBar__icon {
  fill: var(--coral);
}

.NavigationBar__link--active .NavigationBar__title {
  color: var(--coral);
}

@media screen and (max-width: 360px) {
  .NavigationBar {
    left: 0;
  }

  @media screen and (max-width: 320px) {
    .NavigationBar {
      padding-right: 23px;
      padding-left: 23px;
    }
    .NavigationBar__iconWrapper {
      width: 35px;
      height: 35px;
    }
    .NavigationBar__icon {
      width: 20px;
    }

    .NavigationBar__title {
      font-size: 10px;
    }
  }
}
</style>
