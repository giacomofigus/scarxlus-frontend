<script>
    import AppHomeHero from '../components/Home/AppHomeHero.vue'
    import AppHomeAbout from '../components/Home/AppHomeAbout.vue'
    import AppHomePlans from '../components/Home/AppHomePlans.vue';

    export default{
        components: {
            AppHomeHero,
            AppHomeAbout,
            AppHomePlans,
        }
    }
</script>

<template>
    <main>
        <AppHomeHero/>
        <AppHomeAbout/>
        <AppHomePlans/>
    </main>
</template>

<style scoped lang="scss">
    main {
        display: flex;
        flex-direction: column;

    }
</style>