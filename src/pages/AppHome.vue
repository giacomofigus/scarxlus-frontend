<script>
    import AppHomeHero from '../components/Home/AppHomeHero.vue'
    import AppHomeAbout from '../components/Home/AppHomeAbout.vue'

    export default{
        components: {
            AppHomeHero,
            AppHomeAbout
        }
    }
</script>

<template>
    <div class="container">
        <AppHomeHero/>
        <AppHomeAbout/>
    </div>
</template>

<style scoped lang="scss">
    .container {
        display: flex;
        flex-direction: column;

    }
</style>