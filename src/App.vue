<script>
import AppFooter from './components/Footer/AppFooter.vue';
import AppHeader from './components/Header/AppHeader.vue';

  export default{
    components: {
      AppHeader,
      AppFooter,
    }
  }
</script>

<template>
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>

<style scoped lang="scss">
  @use './assets/styles/general.scss' as *;

  
</style>
