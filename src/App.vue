<script>
import AppHeader from './components/Header/AppHeader.vue';

  export default{
    components: {
      AppHeader,
    }
  }
</script>

<template>
  <AppHeader/>
  <router-view></router-view>
</template>

<style scoped lang="scss">
  @use './assets/styles/general.scss' as *;

  
</style>
