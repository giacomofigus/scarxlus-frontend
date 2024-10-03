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
    <main>
        <AppHomeHero/>
        <AppHomeAbout/>
    </main>
</template>

<style scoped lang="scss">
    main {
        display: flex;
        flex-direction: column;

    }
</style>